@echo off
chcp 65001 >nul 2>&1
title AutoClicUS Launcher — JSLAI

:: =============================================================================
:: AutoClicUS Multi-Instance Launcher
:: Opens N Chrome windows side by side, full height, with target site loaded
:: No dependencies — pure Windows batch
:: =============================================================================

echo.
echo  ╔════════════════════════════════════════════════╗
echo  ║     AutoClicUS - Lanceur Multi-Instance        ║
echo  ║     Propulse par JSLAI                         ║
echo  ╚════════════════════════════════════════════════╝
echo.

:: --- Configuration ---
:: Change DEFAULT_URL to your target site
set "DEFAULT_URL=https://example.com"
set "CHROME_PATH="

:: Try common Chrome paths
if exist "C:\Program Files\Google\Chrome\Application\chrome.exe" (
    set "CHROME_PATH=C:\Program Files\Google\Chrome\Application\chrome.exe"
)
if exist "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" (
    set "CHROME_PATH=C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
)
if exist "%LOCALAPPDATA%\Google\Chrome\Application\chrome.exe" (
    set "CHROME_PATH=%LOCALAPPDATA%\Google\Chrome\Application\chrome.exe"
)

if "%CHROME_PATH%"=="" (
    echo  [ERREUR] Chrome non trouve sur ce PC.
    echo  Verifiez l'installation de Google Chrome.
    pause
    exit /b 1
)

echo  Chrome trouve: %CHROME_PATH%
echo.

:: --- Ask for target URL ---
echo  URL cible (Entree = %DEFAULT_URL%):
set /p "TARGET_URL=  URL: "
if "%TARGET_URL%"=="" set "TARGET_URL=%DEFAULT_URL%"
echo.
echo  Cible: %TARGET_URL%
echo.

:: --- Main menu ---
echo  Que voulez-vous faire?
echo.
echo    [0] J'ai deja Chrome ouvert (snippet seulement)
echo    [1] 1 instance  (plein ecran)
echo    [2] 2 instances (cote a cote)
echo    [3] 3 instances (tiers d'ecran)
echo    [4] 4 instances (quarts d'ecran)
echo.
set /p "CHOICE=  Choix (0-4): "

:: Option 0: snippet-only mode
if "%CHOICE%"=="0" goto :SNIPPET_ONLY

:: Validate input for instances
set "NUM_INSTANCES=%CHOICE%"
if "%NUM_INSTANCES%"=="" set "NUM_INSTANCES=2"
if %NUM_INSTANCES% LSS 1 set "NUM_INSTANCES=1"
if %NUM_INSTANCES% GTR 4 set "NUM_INSTANCES=4"

echo.
echo  Lancement de %NUM_INSTANCES% instance(s)...
echo.

:: --- Get screen resolution via PowerShell ---
for /f "tokens=*" %%a in ('powershell -command "[System.Windows.Forms.Screen]::PrimaryScreen.WorkingArea.Width"') do set "SCREEN_W=%%a"
for /f "tokens=*" %%a in ('powershell -command "[System.Windows.Forms.Screen]::PrimaryScreen.WorkingArea.Height"') do set "SCREEN_H=%%a"

:: Fallback if PowerShell fails
if "%SCREEN_W%"=="" set "SCREEN_W=1920"
if "%SCREEN_H%"=="" set "SCREEN_H=1040"

echo  Resolution detectee: %SCREEN_W% x %SCREEN_H%

:: --- Calculate window dimensions ---
set /a "WIN_W=%SCREEN_W% / %NUM_INSTANCES%"
set /a "WIN_H=%SCREEN_H%"

:: --- Launch instances with positioning ---
for /L %%i in (1,1,%NUM_INSTANCES%) do (
    set /a "X_POS=(%%i - 1) * %WIN_W%"
    call :LAUNCH_CHROME %%i
)

:SHOW_INSTRUCTIONS
echo.
echo  ╔════════════════════════════════════════════════╗
echo  ║  Pour charger AutoClicUS dans chaque fenetre:  ║
echo  ║                                                ║
echo  ║  1. Appuyez sur F12 (DevTools)                 ║
echo  ║  2. Onglet Console                             ║
echo  ║  3. Collez le snippet autoclicus.js            ║
echo  ║  4. Appuyez sur Entree                         ║
echo  ╚════════════════════════════════════════════════╝
echo.

:: Copy snippet to clipboard if available
if exist "%~dp0autoclicus.js" (
    type "%~dp0autoclicus.js" | clip
    echo  [OK] Le snippet a ete copie dans le presse-papiers!
    echo       Faites Ctrl+V dans la console Chrome.
) else (
    echo  [INFO] Fichier autoclicus.js non trouve dans le meme dossier.
    echo         Copiez-le manuellement.
)
echo.
pause
exit /b 0

:SNIPPET_ONLY
echo.
echo  ╔════════════════════════════════════════════════╗
echo  ║  Mode: Snippet seulement                      ║
echo  ╚════════════════════════════════════════════════╝
echo.

:: Copy snippet to clipboard
if exist "%~dp0autoclicus.js" (
    type "%~dp0autoclicus.js" | clip
    echo  [OK] Le snippet a ete copie dans le presse-papiers!
    echo.
    echo  Dans votre fenetre Chrome:
    echo    1. Appuyez sur F12 (DevTools)
    echo    2. Onglet Console
    echo    3. Ctrl+V pour coller
    echo    4. Appuyez sur Entree
) else (
    echo  [ERREUR] Fichier autoclicus.js non trouve!
    echo           Placez-le dans le meme dossier que launch.bat
)
echo.
pause
exit /b 0

:LAUNCH_CHROME
set "INSTANCE_NUM=%1"
set /a "XPOS=(%INSTANCE_NUM% - 1) * %WIN_W%"

:: Launch Chrome with window position
start "" "%CHROME_PATH%" --new-window --window-size=%WIN_W%,%WIN_H% --window-position=%XPOS%,0 "%TARGET_URL%"

:: Brief delay between launches to prevent conflicts
timeout /t 1 /nobreak >nul 2>&1

echo  [OK] Instance %INSTANCE_NUM% lancee — Position: %XPOS%,0 — Taille: %WIN_W%x%WIN_H%
goto :eof
