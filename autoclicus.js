// AutoClicUS v4.0.0 - "C'est l'heure du taux de change! — Propulsé par JSLAI"
// Automation assistant for SmartD USD exchange rate operations
// Paste this complete snippet into Chrome DevTools console

(function() {
  'use strict';

  // =============================================================================
  // CONFIG
  // =============================================================================
  const Config = {
    version: '4.0.0',
    theme: {
      bg: '#ffffff',
      bgSecondary: '#f7f9f8',
      primary: '#00874e',
      primaryLight: '#00a65a',
      text: '#1a1a1a',
      textSecondary: '#6c757d',
      border: '#e0e0e0',
      error: '#dc3545',
      warning: '#ffc107',
      success: '#00874e',
      shadow: 'rgba(0, 0, 0, 0.1)'
    },
    limits: {
      maxActions: 1000,
      maxConditions: 50,
      maxLoops: 9999,
      maxAuditSize: 5 * 1024 * 1024, // 5MB
      speedMin: 0.25,
      speedMax: 8
    },
    rateValidation: {
      min: 1.0,
      max: 2.0
    },
    storage: {
      actions: 'autoclicus_actions_v4',
      conditions: 'autoclicus_conditions_v4',
      config: 'autoclicus_config_v4',
      audit: 'autoclicus_audit_v4'
    }
  };

  // =============================================================================
  // STATE
  // =============================================================================
  const State = {
    // Recording
    isRecording: false,
    recordedActions: [],

    // Playback
    isPlaying: false,
    isPaused: false,
    currentStep: 0,
    loopCount: 1,
    currentLoop: 0,
    speed: 1,

    // Conditions
    conditions: [],
    preflightPassed: false,

    // Dry run
    dryRun: false,

    // Audit
    sessionId: null,
    auditTrail: [],

    // UI
    shadowRoot: null,
    currentTab: 'record',

    // Timing
    startTime: null,
    totalDuration: 0,
    timeLimit: null,
    deadlineTime: null
  };

  // =============================================================================
  // FINGERPRINT - Element identification and resolution
  // =============================================================================
  const Fingerprint = {
    capture(element, eventType) {
      const rect = element.getBoundingClientRect();
      const path = this.getPath(element);

      return {
        selector: this.getSelector(element),
        xpath: this.getXPath(element),
        text: element.textContent?.trim().substring(0, 100) || '',
        tag: element.tagName.toLowerCase(),
        id: element.id || '',
        className: element.className || '',
        name: element.getAttribute('name') || '',
        type: element.getAttribute('type') || '',
        placeholder: element.getAttribute('placeholder') || '',
        dataAttrs: this.getDataAttrs(element),
        path: path,
        coords: { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 },
        index: this.getElementIndex(element),
        eventType: eventType
      };
    },

    getSelector(element) {
      if (element.id) return `#${element.id}`;

      let selector = element.tagName.toLowerCase();
      const classStr = typeof element.className === 'string'
        ? element.className
        : element.className?.baseVal || '';
      if (classStr) {
        const classes = classStr.split(' ').filter(c => c.trim());
        if (classes.length > 0) {
          selector += '.' + classes.join('.');
        }
      }

      if (element.name) selector += `[name="${element.name}"]`;
      if (element.type) selector += `[type="${element.type}"]`;

      return selector;
    },

    getXPath(element) {
      if (element.id) return `//*[@id="${element.id}"]`;

      const parts = [];
      let current = element;

      while (current && current.nodeType === Node.ELEMENT_NODE) {
        let index = 0;
        let sibling = current.previousSibling;

        while (sibling) {
          if (sibling.nodeType === Node.ELEMENT_NODE && sibling.nodeName === current.nodeName) {
            index++;
          }
          sibling = sibling.previousSibling;
        }

        const tagName = current.nodeName.toLowerCase();
        const pathIndex = index > 0 ? `[${index + 1}]` : '';
        parts.unshift(tagName + pathIndex);

        current = current.parentNode;
      }

      return '/' + parts.join('/');
    },

    getDataAttrs(element) {
      const attrs = {};
      for (let attr of element.attributes) {
        if (attr.name.startsWith('data-')) {
          attrs[attr.name] = attr.value;
        }
      }
      return attrs;
    },

    getPath(element) {
      const path = [];
      let current = element;

      while (current && current !== document.body) {
        path.unshift({
          tag: current.tagName.toLowerCase(),
          id: current.id || '',
          className: current.className || ''
        });
        current = current.parentElement;
      }

      return path;
    },

    getElementIndex(element) {
      const parent = element.parentElement;
      if (!parent) return 0;

      const siblings = Array.from(parent.children);
      return siblings.indexOf(element);
    },

    resolve(fingerprint) {
      const strategies = [
        () => fingerprint.id ? document.getElementById(fingerprint.id) : null,
        () => document.querySelector(fingerprint.selector),
        () => this.evaluateXPath(fingerprint.xpath),
        () => this.findByText(fingerprint.text, fingerprint.tag),
        () => this.findByDataAttrs(fingerprint.dataAttrs),
        () => this.findByPath(fingerprint.path),
        () => this.findByCoords(fingerprint.coords)
      ];

      for (let strategy of strategies) {
        try {
          const element = strategy();
          if (element && this.isVisible(element)) {
            return { element, confidence: this.calculateConfidence(element, fingerprint) };
          }
        } catch (e) {
          // Strategy failed, try next
        }
      }

      return { element: null, confidence: 0 };
    },

    evaluateXPath(xpath) {
      const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
      return result.singleNodeValue;
    },

    findByText(text, tag) {
      if (!text) return null;

      const elements = tag ? document.getElementsByTagName(tag) : document.querySelectorAll('*');
      for (let el of elements) {
        if (el.textContent?.trim().includes(text.substring(0, 50))) {
          return el;
        }
      }
      return null;
    },

    findByDataAttrs(dataAttrs) {
      if (!dataAttrs || Object.keys(dataAttrs).length === 0) return null;

      for (let [key, value] of Object.entries(dataAttrs)) {
        const el = document.querySelector(`[${key}="${value}"]`);
        if (el) return el;
      }
      return null;
    },

    findByPath(path) {
      if (!path || path.length === 0) return null;

      let current = document.body;
      for (let step of path) {
        const children = Array.from(current.children);
        const match = children.find(child => {
          return child.tagName.toLowerCase() === step.tag &&
                 (!step.id || child.id === step.id) &&
                 (!step.className || child.className === step.className);
        });

        if (!match) return null;
        current = match;
      }

      return current;
    },

    findByCoords(coords) {
      const element = document.elementFromPoint(coords.x, coords.y);
      return element;
    },

    isVisible(element) {
      if (!element) return false;

      const style = window.getComputedStyle(element);
      if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
        return false;
      }
      // offsetParent is null for fixed/sticky elements and <body> — not actually hidden
      if (element.offsetParent === null && style.position !== 'fixed' && style.position !== 'sticky' && element !== document.body) {
        return false;
      }
      return true;
    },

    calculateConfidence(element, fingerprint) {
      let score = 0;
      let checks = 0;

      if (element.id && element.id === fingerprint.id) { score += 30; checks++; }
      if (element.className === fingerprint.className) { score += 20; checks++; }
      if (element.getAttribute('name') === fingerprint.name) { score += 15; checks++; }
      if (element.textContent?.trim().includes(fingerprint.text.substring(0, 30))) { score += 15; checks++; }
      if (element.tagName.toLowerCase() === fingerprint.tag) { score += 10; checks++; }

      return checks > 0 ? score / checks : 0;
    }
  };

  // =============================================================================
  // CONDITIONS - Preflight and runtime conditions
  // =============================================================================
  const Conditions = {
    types: [
      'visible', 'hidden', 'hasText', 'notHasText', 'hasColor',
      'hasClass', 'exists', 'urlContains', 'count', 'value',
      'checked', 'enabled'
    ],

    check(condition) {
      try {
        const { type, selector, value } = condition;

        switch (type) {
          case 'visible': {
            const el = document.querySelector(selector);
            return el && Fingerprint.isVisible(el);
          }
          case 'hidden': {
            const el = document.querySelector(selector);
            return !el || !Fingerprint.isVisible(el);
          }
          case 'hasText': {
            const el = document.querySelector(selector);
            return el && el.textContent?.includes(value);
          }
          case 'notHasText': {
            const el = document.querySelector(selector);
            return !el || !el.textContent?.includes(value);
          }
          case 'hasColor': {
            const el = document.querySelector(selector);
            if (!el) return false;
            const style = window.getComputedStyle(el);
            return style.backgroundColor === value || style.color === value;
          }
          case 'hasClass': {
            const el = document.querySelector(selector);
            return el && el.classList.contains(value);
          }
          case 'exists': {
            return document.querySelector(selector) !== null;
          }
          case 'urlContains': {
            return window.location.href.includes(value);
          }
          case 'count': {
            const elements = document.querySelectorAll(selector);
            return elements.length === parseInt(value);
          }
          case 'value': {
            const el = document.querySelector(selector);
            return el && el.value === value;
          }
          case 'checked': {
            const el = document.querySelector(selector);
            return el && el.checked;
          }
          case 'enabled': {
            const el = document.querySelector(selector);
            return el && !el.disabled;
          }
          default:
            return false;
        }
      } catch (e) {
        console.error('Condition check error:', e);
        return false;
      }
    },

    checkAll(conditions, preflight = false) {
      const toCheck = preflight
        ? conditions.filter(c => c.preflight)
        : conditions.filter(c => !c.preflight);

      const results = toCheck.map(condition => ({
        condition,
        passed: this.check(condition)
      }));

      return {
        allPassed: results.every(r => r.passed),
        results
      };
    },

    async runPreflight(conditions) {
      const { allPassed, results } = this.checkAll(conditions, true);

      if (!allPassed) {
        const failed = results.filter(r => !r.passed);
        UI.showPreflightResults(results);
        throw new Error(`Preflight failed: ${failed.map(f => f.condition.name).join(', ')}`);
      }

      State.preflightPassed = true;
      return true;
    }
  };

  // =============================================================================
  // AUDIT - Structured audit trail
  // =============================================================================
  const Audit = {
    log(action, target, value, result, duration) {
      const entry = {
        id: this.generateId(),
        sessionId: State.sessionId,
        timestamp: new Date().toISOString(),
        sequence: State.currentStep + 1,
        type: action.type,
        action: action.eventType || action.type,
        target: this.sanitizeTarget(target),
        value: this.sanitizeValue(value),
        result: result,
        duration_ms: duration,
        context: {
          url: window.location.href,
          loop: State.currentLoop,
          dryRun: State.dryRun
        }
      };

      State.auditTrail.push(entry);
      this.save();
      this.pruneIfNeeded();

      return entry;
    },

    generateId() {
      return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
    },

    sanitizeTarget(target) {
      if (typeof target === 'string') {
        // Remove potential account numbers or sensitive data
        return target.replace(/\d{10,}/g, '***');
      }
      return target?.selector || target?.xpath || 'unknown';
    },

    sanitizeValue(value) {
      if (typeof value !== 'string') return value;

      // Sanitize potential sensitive data
      return value.replace(/\d{10,}/g, '***');
    },

    save() {
      try {
        const data = {
          version: Config.version,
          sessions: this.groupBySessions()
        };
        localStorage.setItem(Config.storage.audit, JSON.stringify(data));
      } catch (e) {
        console.error('Failed to save audit trail:', e);
      }
    },

    load() {
      try {
        const data = localStorage.getItem(Config.storage.audit);
        if (data) {
          const parsed = JSON.parse(data);
          return parsed.sessions || [];
        }
      } catch (e) {
        console.error('Failed to load audit trail:', e);
      }
      return [];
    },

    groupBySessions() {
      const sessions = {};

      for (let entry of State.auditTrail) {
        if (!sessions[entry.sessionId]) {
          sessions[entry.sessionId] = [];
        }
        sessions[entry.sessionId].push(entry);
      }

      return Object.entries(sessions).map(([id, entries]) => ({
        sessionId: id,
        startTime: entries[0]?.timestamp,
        endTime: entries[entries.length - 1]?.timestamp,
        entries: entries
      }));
    },

    exportJSON() {
      const sessions = this.load();
      const blob = new Blob([JSON.stringify(sessions, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `autoclicus-audit-${new Date().toISOString()}.json`;
      a.click();
      URL.revokeObjectURL(url);
    },

    exportCSV() {
      const sessions = this.load();
      const rows = [['Session ID', 'Timestamp', 'Sequence', 'Type', 'Action', 'Target', 'Value', 'Result', 'Duration (ms)', 'URL', 'Loop']];

      for (let session of sessions) {
        for (let entry of session.entries) {
          rows.push([
            entry.sessionId,
            entry.timestamp,
            entry.sequence,
            entry.type,
            entry.action,
            entry.target,
            entry.value || '',
            entry.result,
            entry.duration_ms,
            entry.context.url,
            entry.context.loop
          ]);
        }
      }

      const csv = rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `autoclicus-audit-${new Date().toISOString()}.csv`;
      a.click();
      URL.revokeObjectURL(url);
    },

    clear() {
      State.auditTrail = [];
      localStorage.removeItem(Config.storage.audit);
    },

    pruneIfNeeded() {
      try {
        const data = localStorage.getItem(Config.storage.audit);
        if (data && data.length > Config.limits.maxAuditSize) {
          const parsed = JSON.parse(data);
          // Keep only last 50% of sessions
          parsed.sessions = parsed.sessions.slice(-Math.floor(parsed.sessions.length / 2));
          localStorage.setItem(Config.storage.audit, JSON.stringify(parsed));
        }
      } catch (e) {
        console.error('Failed to prune audit trail:', e);
      }
    },

    getTrail() {
      return State.auditTrail;
    }
  };

  // =============================================================================
  // RECORDER - Action recording
  // =============================================================================
  const Recorder = {
    start() {
      if (State.isRecording) return;

      State.isRecording = true;
      State.recordedActions = [];

      // Attach event listeners
      document.addEventListener('click', this.onEvent, true);
      document.addEventListener('input', this.onEvent, true);
      document.addEventListener('change', this.onEvent, true);
      document.addEventListener('keydown', this.onEvent, true);

      UI.flash('success', 'Enregistrement démarré');
      UI.render();
    },

    stop() {
      if (!State.isRecording) return;

      State.isRecording = false;

      // Remove event listeners
      document.removeEventListener('click', this.onEvent, true);
      document.removeEventListener('input', this.onEvent, true);
      document.removeEventListener('change', this.onEvent, true);
      document.removeEventListener('keydown', this.onEvent, true);

      UI.flash('info', `Enregistrement arrêté - ${State.recordedActions.length} actions`);
      UI.render();
    },

    onEvent(event) {
      // Ignore events from our own UI (composedPath crosses shadow DOM boundary)
      if (event.composedPath().some(el => el.id === 'autoclicus-container')) return;

      const target = event.target;
      const eventType = event.type;

      // Skip certain events
      if (eventType === 'keydown' && !['Enter', 'Tab'].includes(event.key)) return;

      const fingerprint = Fingerprint.capture(target, eventType);

      const action = {
        id: Date.now().toString(36) + Math.random().toString(36).substring(2, 9),
        type: 'action',
        eventType: eventType,
        fingerprint: fingerprint,
        value: target.value || target.textContent?.trim() || '',
        timestamp: Date.now()
      };

      // Debounce input events
      if (eventType === 'input') {
        const lastAction = State.recordedActions[State.recordedActions.length - 1];
        if (lastAction &&
            lastAction.eventType === 'input' &&
            lastAction.fingerprint.selector === fingerprint.selector &&
            action.timestamp - lastAction.timestamp < 500) {
          // Update last action instead of adding new one
          lastAction.value = action.value;
          lastAction.timestamp = action.timestamp;
          UI.render();
          return;
        }
      }

      State.recordedActions.push(action);
      UI.render();
    }
  };

  // =============================================================================
  // PLAYER - Playback engine
  // =============================================================================
  const Player = {
    async start() {
      if (State.isPlaying) return;

      // Origin check
      if (!window.location.hostname.includes('desjardins.com')) {
        const proceed = confirm('⚠️ Ce script est conçu pour SmartD (*.desjardins.com).\n\nContinuer quand même?');
        if (!proceed) return;
      }

      // Preflight check
      try {
        await Conditions.runPreflight(State.conditions);
      } catch (e) {
        UI.flash('error', e.message);
        return;
      }

      State.isPlaying = true;
      State.isPaused = false;
      State.currentStep = 0;
      State.currentLoop = 0;
      State.startTime = Date.now();
      State.sessionId = Audit.generateId();
      State.auditTrail = [];

      UI.flash('success', State.dryRun ? 'Simulation démarrée' : 'Lecture démarrée');
      UI.render();

      await this.run();
    },

    async run() {
      while (State.isPlaying && State.currentLoop < State.loopCount) {
        State.currentLoop++;
        State.currentStep = 0;

        for (let i = 0; i < State.recordedActions.length; i++) {
          if (!State.isPlaying) break;

          while (State.isPaused) {
            await this.sleep(100);
          }

          State.currentStep = i;
          UI.render();

          const action = State.recordedActions[i];

          try {
            await this.execAction(action);
          } catch (e) {
            console.error('Action execution error:', e);
            Audit.log(action, action.fingerprint, action.value, 'error', 0);

            // Check for fallback
            const condition = State.conditions.find(c => c.triggerIndex === i);
            if (condition && condition.fallbackActions) {
              await this.executeFallback(condition.fallbackActions);
            } else {
              UI.flash('error', `Erreur: ${e.message}`);
              this.stop();
              return;
            }
          }

          // Check time limits
          if (State.timeLimit && (Date.now() - State.startTime) > State.timeLimit * 1000) {
            UI.flash('warning', 'Limite de temps atteinte');
            this.stop();
            return;
          }

          if (State.deadlineTime && Date.now() > State.deadlineTime) {
            UI.flash('warning', 'Heure limite atteinte');
            this.stop();
            return;
          }

          // Delay between actions
          await this.sleep(1000 / State.speed);
        }

        if (State.currentLoop < State.loopCount) {
          await this.sleep(2000 / State.speed);
        }
      }

      if (State.isPlaying) {
        this.stop();
        UI.flash('success', 'Lecture terminée');
      }
    },

    async execAction(action) {
      const startTime = Date.now();

      try {
        if (action.type === 'prompt') {
          await this.showPrompt(action);
          Audit.log(action, action.targetSelector, 'user_input', 'success', Date.now() - startTime);
          return;
        }

        if (action.type === 'confirm') {
          const result = await this.showConfirm(action);
          Audit.log(action, 'confirm', result ? 'yes' : 'no', 'success', Date.now() - startTime);
          if (!result) {
            this.stop();
            return;
          }
          return;
        }

        // Regular action
        const { element, confidence } = Fingerprint.resolve(action.fingerprint);

        if (!element) {
          throw new Error(`Element not found: ${action.fingerprint.selector}`);
        }

        if (confidence < 50) {
          console.warn(`Low confidence (${confidence}%) for element:`, action.fingerprint);
        }

        // Visual feedback
        UI.highlightElement(element, State.dryRun);

        if (!State.dryRun) {
          // Execute action
          switch (action.eventType) {
            case 'click':
              element.click();
              break;
            case 'input':
            case 'change':
              this.setInputValue(element, action.value);
              break;
            case 'keydown':
              element.dispatchEvent(new KeyboardEvent('keydown', { key: action.value }));
              break;
          }
        }

        Audit.log(action, action.fingerprint, action.value, 'success', Date.now() - startTime);
      } catch (e) {
        Audit.log(action, action.fingerprint, action.value, 'error', Date.now() - startTime);
        throw e;
      }
    },

    setInputValue(element, value) {
      const proto = element instanceof HTMLTextAreaElement
        ? window.HTMLTextAreaElement.prototype
        : window.HTMLInputElement.prototype;
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(proto, 'value')?.set;

      if (element instanceof HTMLSelectElement) {
        element.value = value;
      } else if (nativeInputValueSetter) {
        nativeInputValueSetter.call(element, value);
      } else {
        element.value = value;
      }

      // Trigger events
      element.dispatchEvent(new Event('input', { bubbles: true }));
      element.dispatchEvent(new Event('change', { bubbles: true }));
    },

    async showPrompt(action) {
      return new Promise((resolve) => {
        const modal = document.createElement('div');
        modal.style.cssText = `
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          z-index: 1000000;
          min-width: 400px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        `;

        modal.innerHTML = `
          <h3 style="margin: 0 0 10px 0; color: ${Config.theme.primary}; font-size: 20px;">
            ${action.title || 'Entrée requise'}
          </h3>
          <p style="margin: 0 0 20px 0; color: ${Config.theme.textSecondary}; font-size: 14px;">
            ${action.message || 'Veuillez entrer une valeur'}
          </p>
          <input type="text" id="prompt-input" placeholder="${action.placeholder || ''}"
                 value="${action.defaultValue || ''}"
                 style="width: 100%; padding: 10px; border: 1px solid ${Config.theme.border};
                        border-radius: 6px; font-size: 16px; box-sizing: border-box; margin-bottom: 20px;">
          <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button id="prompt-cancel" style="padding: 10px 20px; background: #fff; color: ${Config.theme.text};
                    border: 1px solid ${Config.theme.border}; border-radius: 6px; cursor: pointer; font-size: 14px;">
              Annuler
            </button>
            <button id="prompt-ok" style="padding: 10px 20px; background: ${Config.theme.primary}; color: white;
                    border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 500;">
              Confirmer
            </button>
          </div>
        `;

        const overlay = document.createElement('div');
        overlay.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999999;
        `;

        document.body.appendChild(overlay);
        document.body.appendChild(modal);

        const input = modal.querySelector('#prompt-input');
        const okBtn = modal.querySelector('#prompt-ok');
        const cancelBtn = modal.querySelector('#prompt-cancel');

        input.focus();

        const cleanup = () => {
          document.body.removeChild(overlay);
          document.body.removeChild(modal);
        };

        const submit = () => {
          const value = input.value;

          if (action.required && !value) {
            input.style.borderColor = Config.theme.error;
            return;
          }

          // Rate validation
          const numValue = parseFloat(value);
          if (!isNaN(numValue) && action.id?.includes('taux')) {
            if (numValue < Config.rateValidation.min || numValue > Config.rateValidation.max) {
              const proceed = confirm(`⚠️ Le taux ${numValue} semble incorrect (attendu: ${Config.rateValidation.min}-${Config.rateValidation.max}).\n\nContinuer quand même?`);
              if (!proceed) return;
            }
          }

          cleanup();

          // Inject value into target field
          if (action.targetSelector) {
            const target = document.querySelector(action.targetSelector);
            if (target) {
              Player.setInputValue(target, value);
            }
          }

          resolve(value);
        };

        okBtn.addEventListener('click', submit);
        cancelBtn.addEventListener('click', () => {
          cleanup();
          Player.stop();
          resolve(null);
        });

        input.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') submit();
          if (e.key === 'Escape') cancelBtn.click();
        });
      });
    },

    async showConfirm(action) {
      return new Promise((resolve) => {
        const modal = document.createElement('div');
        modal.style.cssText = `
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          z-index: 1000000;
          min-width: 400px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        `;

        modal.innerHTML = `
          <h3 style="margin: 0 0 10px 0; color: ${Config.theme.primary}; font-size: 20px;">
            ${action.title || 'Confirmation'}
          </h3>
          <p style="margin: 0 0 10px 0; color: ${Config.theme.text}; font-size: 14px;">
            ${action.message || 'Voulez-vous continuer?'}
          </p>
          ${action.details ? `<p style="margin: 0 0 20px 0; color: ${Config.theme.textSecondary}; font-size: 13px;">${action.details}</p>` : ''}
          <div style="display: flex; gap: 10px; justify-content: flex-end; margin-top: 20px;">
            <button id="confirm-cancel" style="padding: 10px 20px; background: #fff; color: ${Config.theme.text};
                    border: 1px solid ${Config.theme.border}; border-radius: 6px; cursor: pointer; font-size: 14px;">
              ${action.cancelLabel || 'Non'}
            </button>
            <button id="confirm-ok" style="padding: 10px 20px; background: ${Config.theme.primary}; color: white;
                    border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 500;">
              ${action.okLabel || 'Oui'}
            </button>
          </div>
        `;

        const overlay = document.createElement('div');
        overlay.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999999;
        `;

        document.body.appendChild(overlay);
        document.body.appendChild(modal);

        const okBtn = modal.querySelector('#confirm-ok');
        const cancelBtn = modal.querySelector('#confirm-cancel');

        okBtn.focus();

        const cleanup = () => {
          document.body.removeChild(overlay);
          document.body.removeChild(modal);
        };

        okBtn.addEventListener('click', () => {
          cleanup();
          resolve(true);
        });

        cancelBtn.addEventListener('click', () => {
          cleanup();
          resolve(false);
        });
      });
    },

    async executeFallback(actions) {
      UI.flash('info', 'Exécution du plan de secours');

      for (let action of actions) {
        await this.execAction(action);
        await this.sleep(1000 / State.speed);
      }
    },

    pause() {
      State.isPaused = true;
      UI.render();
    },

    resume() {
      State.isPaused = false;
      UI.render();
    },

    stop() {
      State.isPlaying = false;
      State.isPaused = false;
      State.totalDuration = Date.now() - (State.startTime || Date.now());
      UI.render();
    },

    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  };

  // =============================================================================
  // UI - User interface
  // =============================================================================
  const UI = {
    init() {
      // Create container
      const container = document.createElement('div');
      container.id = 'autoclicus-container';

      // Attach shadow DOM
      State.shadowRoot = container.attachShadow({ mode: 'open' });

      // Create styles
      const style = document.createElement('style');
      style.textContent = this.getStyles();
      State.shadowRoot.appendChild(style);

      // Create UI
      const ui = document.createElement('div');
      ui.id = 'autoclicus-ui';
      State.shadowRoot.appendChild(ui);

      document.body.appendChild(container);

      this.render();
      this.attachKeyboardShortcuts();
    },

    getStyles() {
      return `
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        #autoclicus-ui {
          position: fixed;
          top: 20px;
          right: 20px;
          width: 450px;
          max-height: 90vh;
          background: ${Config.theme.bg};
          border: 1px solid ${Config.theme.border};
          border-radius: 12px;
          box-shadow: 0 10px 40px ${Config.theme.shadow};
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 14px;
          color: ${Config.theme.text};
          z-index: 999999;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .header {
          background: linear-gradient(135deg, ${Config.theme.primary} 0%, ${Config.theme.primaryLight} 100%);
          color: white;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .header-avatar {
          flex-shrink: 0;
        }

        .header-info {
          flex: 1;
        }

        .header-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 2px;
        }

        .header-subtitle {
          font-size: 12px;
          opacity: 0.9;
        }

        .header-clock {
          font-size: 12px;
          opacity: 0.9;
          font-variant-numeric: tabular-nums;
        }

        .tabs {
          display: flex;
          background: ${Config.theme.bgSecondary};
          border-bottom: 1px solid ${Config.theme.border};
          overflow-x: auto;
        }

        .tab {
          flex: 1;
          padding: 12px 8px;
          text-align: center;
          cursor: pointer;
          border: none;
          background: transparent;
          color: ${Config.theme.textSecondary};
          font-size: 13px;
          font-weight: 500;
          transition: all 0.2s;
          position: relative;
          white-space: nowrap;
        }

        .tab:hover {
          background: rgba(0, 135, 78, 0.05);
          color: ${Config.theme.primary};
        }

        .tab.active {
          color: ${Config.theme.primary};
          font-weight: 600;
        }

        .tab.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: ${Config.theme.primary};
        }

        .content {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
        }

        .btn {
          padding: 10px 16px;
          border: none;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }

        .btn-primary {
          background: linear-gradient(135deg, ${Config.theme.primary} 0%, ${Config.theme.primaryLight} 100%);
          color: white;
        }

        .btn-primary:hover {
          box-shadow: 0 4px 12px rgba(0, 135, 78, 0.3);
          transform: translateY(-1px);
        }

        .btn-secondary {
          background: white;
          color: ${Config.theme.text};
          border: 1px solid ${Config.theme.border};
        }

        .btn-secondary:hover {
          background: ${Config.theme.bgSecondary};
        }

        .btn-danger {
          background: ${Config.theme.error};
          color: white;
        }

        .btn-small {
          padding: 6px 12px;
          font-size: 12px;
        }

        .btn-group {
          display: flex;
          gap: 8px;
          margin-bottom: 16px;
        }

        .input-group {
          margin-bottom: 16px;
        }

        .input-group label {
          display: block;
          margin-bottom: 6px;
          font-weight: 500;
          color: ${Config.theme.text};
          font-size: 13px;
        }

        .input-group input,
        .input-group select,
        .input-group textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid ${Config.theme.border};
          border-radius: 6px;
          font-family: inherit;
          font-size: 14px;
          color: ${Config.theme.text};
          background: white;
        }

        .input-group input:focus,
        .input-group select:focus,
        .input-group textarea:focus {
          outline: none;
          border-color: ${Config.theme.primary};
          box-shadow: 0 0 0 3px rgba(0, 135, 78, 0.1);
        }

        .checkbox-group {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
        }

        .checkbox-group input[type="checkbox"] {
          width: 18px;
          height: 18px;
          cursor: pointer;
        }

        .checkbox-group label {
          cursor: pointer;
          user-select: none;
        }

        .card {
          background: white;
          border: 1px solid ${Config.theme.border};
          border-radius: 8px;
          padding: 16px;
          margin-bottom: 16px;
        }

        .card-header {
          font-weight: 600;
          margin-bottom: 12px;
          color: ${Config.theme.text};
          font-size: 15px;
        }

        .action-list {
          max-height: 300px;
          overflow-y: auto;
        }

        .action-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px;
          border: 1px solid ${Config.theme.border};
          border-radius: 6px;
          margin-bottom: 8px;
          background: white;
        }

        .action-item.active {
          background: rgba(0, 135, 78, 0.05);
          border-color: ${Config.theme.primary};
        }

        .action-item.prompt {
          border-left: 3px solid ${Config.theme.warning};
        }

        .action-item.confirm {
          border-left: 3px solid ${Config.theme.primary};
        }

        .action-index {
          font-weight: 600;
          color: ${Config.theme.textSecondary};
          min-width: 30px;
        }

        .action-type {
          font-size: 12px;
          padding: 3px 8px;
          background: ${Config.theme.bgSecondary};
          border-radius: 4px;
          color: ${Config.theme.textSecondary};
          font-weight: 500;
        }

        .action-details {
          flex: 1;
          font-size: 13px;
          color: ${Config.theme.text};
        }

        .action-delete {
          padding: 4px 8px;
          background: transparent;
          border: none;
          color: ${Config.theme.error};
          cursor: pointer;
          font-size: 18px;
          line-height: 1;
        }

        .progress-bar {
          height: 6px;
          background: ${Config.theme.bgSecondary};
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 16px;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, ${Config.theme.primary} 0%, ${Config.theme.primaryLight} 100%);
          transition: width 0.3s;
        }

        .status-badge {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 500;
        }

        .status-success {
          background: rgba(0, 135, 78, 0.1);
          color: ${Config.theme.success};
        }

        .status-error {
          background: rgba(220, 53, 69, 0.1);
          color: ${Config.theme.error};
        }

        .status-warning {
          background: rgba(255, 193, 7, 0.1);
          color: ${Config.theme.warning};
        }

        .condition-list {
          max-height: 300px;
          overflow-y: auto;
        }

        .condition-item {
          padding: 12px;
          border: 1px solid ${Config.theme.border};
          border-radius: 6px;
          margin-bottom: 8px;
          background: white;
        }

        .condition-item.preflight {
          border-left: 3px solid ${Config.theme.primary};
        }

        .condition-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .condition-name {
          font-weight: 600;
          color: ${Config.theme.text};
        }

        .condition-details {
          font-size: 12px;
          color: ${Config.theme.textSecondary};
        }

        .audit-log {
          max-height: 400px;
          overflow-y: auto;
          font-family: 'Courier New', monospace;
          font-size: 12px;
          background: ${Config.theme.bgSecondary};
          padding: 12px;
          border-radius: 6px;
        }

        .audit-entry {
          padding: 6px 0;
          border-bottom: 1px solid ${Config.theme.border};
        }

        .audit-entry:last-child {
          border-bottom: none;
        }

        .flash-message {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          padding: 12px 20px;
          border-radius: 6px;
          box-shadow: 0 4px 12px ${Config.theme.shadow};
          z-index: 1000000;
          animation: slideDown 0.3s ease-out;
          font-weight: 500;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translate(-50%, -20px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }

        .flash-success {
          background: ${Config.theme.success};
          color: white;
        }

        .flash-error {
          background: ${Config.theme.error};
          color: white;
        }

        .flash-warning {
          background: ${Config.theme.warning};
          color: ${Config.theme.text};
        }

        .flash-info {
          background: ${Config.theme.primary};
          color: white;
        }

        .empty-state {
          text-align: center;
          padding: 40px 20px;
          color: ${Config.theme.textSecondary};
        }

        .empty-state-icon {
          font-size: 48px;
          margin-bottom: 12px;
          opacity: 0.5;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 16px;
        }

        .stat-card {
          background: ${Config.theme.bgSecondary};
          padding: 16px;
          border-radius: 8px;
          text-align: center;
        }

        .stat-value {
          font-size: 28px;
          font-weight: 700;
          color: ${Config.theme.primary};
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 12px;
          color: ${Config.theme.textSecondary};
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 16px;
        }

        .table th {
          text-align: left;
          padding: 10px;
          background: ${Config.theme.bgSecondary};
          font-weight: 600;
          border-bottom: 2px solid ${Config.theme.border};
          font-size: 12px;
          color: ${Config.theme.textSecondary};
          text-transform: uppercase;
        }

        .table td {
          padding: 10px;
          border-bottom: 1px solid ${Config.theme.border};
        }

        .table tr:last-child td {
          border-bottom: none;
        }
      `;
    },

    render() {
      const ui = State.shadowRoot.querySelector('#autoclicus-ui');
      if (!ui) return;

      ui.innerHTML = `
        ${this.renderHeader()}
        ${this.renderTabs()}
        ${this.renderContent()}
      `;

      this.attachEventListeners();
    },

    renderHeader() {
      const now = new Date();
      const time = now.toLocaleTimeString('fr-CA', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

      return `
        <div class="header">
          <div class="header-avatar">
            <svg viewBox="0 0 40 40" width="40" height="40">
              <circle cx="20" cy="20" r="20" fill="#fff" opacity="0.2"/>
              <circle cx="20" cy="14" r="7" fill="#fff"/>
              <ellipse cx="20" cy="32" rx="12" ry="10" fill="#fff"/>
            </svg>
          </div>
          <div class="header-info">
            <div class="header-title">Emma IA</div>
            <div class="header-subtitle">Assistante · Taux de change</div>
          </div>
          <div class="header-clock">${time}</div>
        </div>
      `;
    },

    renderTabs() {
      const tabs = [
        { id: 'record', label: 'Enregistrer' },
        { id: 'conditions', label: 'Conditions' },
        { id: 'edit', label: 'Éditer' },
        { id: 'audit', label: 'Audit' },
        { id: 'stats', label: 'Stats' },
        { id: 'save', label: 'Sauvegarder' }
      ];

      return `
        <div class="tabs">
          ${tabs.map(tab => `
            <button class="tab ${State.currentTab === tab.id ? 'active' : ''}" data-tab="${tab.id}">
              ${tab.label}
            </button>
          `).join('')}
        </div>
      `;
    },

    renderContent() {
      switch (State.currentTab) {
        case 'record': return this.renderRecordTab();
        case 'conditions': return this.renderConditionsTab();
        case 'edit': return this.renderEditTab();
        case 'audit': return this.renderAuditTab();
        case 'stats': return this.renderStatsTab();
        case 'save': return this.renderSaveTab();
        default: return '';
      }
    },

    renderRecordTab() {
      const progress = State.recordedActions.length > 0
        ? ((State.currentStep + 1) / State.recordedActions.length) * 100
        : 0;

      return `
        <div class="content">
          <div class="card">
            <div class="card-header">Contrôles</div>

            <div class="checkbox-group">
              <input type="checkbox" id="dry-run" ${State.dryRun ? 'checked' : ''}>
              <label for="dry-run">Mode simulation (ne modifie rien)</label>
            </div>

            <div class="btn-group">
              <button class="btn btn-primary" id="btn-record" ${State.isRecording ? 'disabled' : ''}>
                ${State.isRecording ? '🔴 Enregistrement...' : '⚫ Enregistrer (F6)'}
              </button>
              <button class="btn btn-secondary" id="btn-stop-record" ${!State.isRecording ? 'disabled' : ''}>
                ⏹️ Arrêter
              </button>
            </div>

            <div class="btn-group">
              <button class="btn btn-primary" id="btn-play" ${State.isPlaying || State.recordedActions.length === 0 ? 'disabled' : ''}>
                ▶️ Lire (F7)
              </button>
              <button class="btn btn-secondary" id="btn-pause" ${!State.isPlaying || State.isPaused ? 'disabled' : ''}>
                ⏸️ Pause
              </button>
              <button class="btn btn-secondary" id="btn-stop" ${!State.isPlaying ? 'disabled' : ''}>
                ⏹️ Arrêter (F8)
              </button>
            </div>

            ${State.isPlaying ? `
              <div class="progress-bar">
                <div class="progress-fill" style="width: ${progress}%"></div>
              </div>
              <div style="text-align: center; font-size: 13px; color: ${Config.theme.textSecondary};">
                Étape ${State.currentStep + 1} / ${State.recordedActions.length} · Boucle ${State.currentLoop} / ${State.loopCount}
              </div>
            ` : ''}
          </div>

          <div class="card">
            <div class="card-header">Paramètres</div>

            <div class="input-group">
              <label>Vitesse (${State.speed}x)</label>
              <input type="range" id="speed" min="0.25" max="8" step="0.25" value="${State.speed}">
            </div>

            <div class="input-group">
              <label>Boucles (${State.loopCount})</label>
              <input type="number" id="loops" min="1" max="${Config.limits.maxLoops}" value="${State.loopCount}">
            </div>

            <div class="input-group">
              <label>Limite de temps (secondes, 0 = aucune)</label>
              <input type="number" id="time-limit" min="0" value="${(State.timeLimit || 0) / 1000}">
            </div>
          </div>

          ${this.renderPreflightStatus()}
        </div>
      `;
    },

    renderPreflightStatus() {
      const preflights = State.conditions.filter(c => c.preflight);

      if (preflights.length === 0) {
        return `
          <div class="card">
            <div class="card-header">Vérifications préalables</div>
            <div style="text-align: center; padding: 20px; color: ${Config.theme.textSecondary};">
              Aucune vérification configurée
            </div>
          </div>
        `;
      }

      return `
        <div class="card">
          <div class="card-header">Vérifications préalables</div>
          ${preflights.map(condition => {
            const passed = Conditions.check(condition);
            return `
              <div style="display: flex; align-items: center; gap: 10px; padding: 8px 0;">
                <span style="font-size: 18px;">${passed ? '✅' : '❌'}</span>
                <span style="flex: 1;">${condition.name}</span>
              </div>
            `;
          }).join('')}
        </div>
      `;
    },

    renderConditionsTab() {
      return `
        <div class="content">
          <div class="card">
            <div class="card-header">Conditions</div>
            <div class="btn-group">
              <button class="btn btn-primary btn-small" id="add-condition">+ Ajouter</button>
              <button class="btn btn-secondary btn-small" id="test-conditions">🧪 Tester toutes</button>
            </div>
          </div>

          ${State.conditions.length === 0 ? `
            <div class="empty-state">
              <div class="empty-state-icon">🎯</div>
              <div>Aucune condition configurée</div>
            </div>
          ` : `
            <div class="condition-list">
              ${State.conditions.map((condition, index) => `
                <div class="condition-item ${condition.preflight ? 'preflight' : ''}">
                  <div class="condition-header">
                    <div class="condition-name">
                      ${condition.preflight ? '🔒 ' : ''}${condition.name}
                    </div>
                    <button class="action-delete" data-condition-index="${index}">×</button>
                  </div>
                  <div class="condition-details">
                    Type: ${condition.type} · Sélecteur: ${condition.selector}
                    ${condition.value ? ` · Valeur: ${condition.value}` : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      `;
    },

    renderEditTab() {
      return `
        <div class="content">
          <div class="card">
            <div class="card-header">Actions (${State.recordedActions.length})</div>
            <div class="btn-group">
              <button class="btn btn-primary btn-small" id="add-prompt">+ Prompt</button>
              <button class="btn btn-primary btn-small" id="add-confirm">+ Confirmation</button>
              <button class="btn btn-danger btn-small" id="clear-actions">🗑️ Tout effacer</button>
            </div>
          </div>

          ${State.recordedActions.length === 0 ? `
            <div class="empty-state">
              <div class="empty-state-icon">📝</div>
              <div>Aucune action enregistrée</div>
            </div>
          ` : `
            <div class="action-list">
              ${State.recordedActions.map((action, index) => `
                <div class="action-item ${State.currentStep === index ? 'active' : ''} ${action.type === 'prompt' ? 'prompt' : ''} ${action.type === 'confirm' ? 'confirm' : ''}">
                  <div class="action-index">${index + 1}</div>
                  <div class="action-type">${action.type}</div>
                  <div class="action-details">
                    ${action.type === 'prompt' ? `📝 ${action.title || 'Prompt'}` :
                      action.type === 'confirm' ? `❓ ${action.title || 'Confirmation'}` :
                      `${action.eventType} · ${action.fingerprint.selector}`}
                  </div>
                  <button class="action-delete" data-action-index="${index}">×</button>
                </div>
              `).join('')}
            </div>
          `}
        </div>
      `;
    },

    renderAuditTab() {
      const sessions = Audit.load();

      return `
        <div class="content">
          <div class="card">
            <div class="card-header">Journal d'audit</div>
            <div class="btn-group">
              <button class="btn btn-primary btn-small" id="export-audit-json">⬇️ Export JSON</button>
              <button class="btn btn-primary btn-small" id="export-audit-csv">⬇️ Export CSV</button>
              <button class="btn btn-danger btn-small" id="clear-audit">🗑️ Effacer</button>
            </div>
          </div>

          ${State.auditTrail.length === 0 && sessions.length === 0 ? `
            <div class="empty-state">
              <div class="empty-state-icon">📊</div>
              <div>Aucune entrée d'audit</div>
            </div>
          ` : `
            ${State.auditTrail.length > 0 ? `
              <div class="card">
                <div class="card-header">Session en cours</div>
                <div class="audit-log">
                  ${State.auditTrail.map(entry => `
                    <div class="audit-entry">
                      [${new Date(entry.timestamp).toLocaleTimeString()}]
                      ${entry.sequence}. ${entry.action} →
                      <span style="color: ${entry.result === 'success' ? Config.theme.success : Config.theme.error}">
                        ${entry.result}
                      </span>
                      (${entry.duration_ms}ms)
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            ${sessions.length > 0 ? `
              <div class="card">
                <div class="card-header">Sessions précédentes (${sessions.length})</div>
                ${sessions.slice(-5).reverse().map(session => `
                  <div style="padding: 10px; border: 1px solid ${Config.theme.border}; border-radius: 6px; margin-bottom: 8px;">
                    <div style="font-weight: 600; margin-bottom: 4px;">
                      Session ${session.sessionId.substring(0, 8)}
                    </div>
                    <div style="font-size: 12px; color: ${Config.theme.textSecondary};">
                      ${new Date(session.startTime).toLocaleString()} · ${session.entries.length} actions
                    </div>
                  </div>
                `).join('')}
              </div>
            ` : ''}
          `}
        </div>
      `;
    },

    renderStatsTab() {
      const totalActions = State.recordedActions.length;
      const estimatedTime = totalActions * (1000 / State.speed) / 1000;
      const loops = State.loopCount;

      return `
        <div class="content">
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-value">${totalActions}</div>
              <div class="stat-label">Actions</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">${State.conditions.length}</div>
              <div class="stat-label">Conditions</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">${loops}</div>
              <div class="stat-label">Boucles</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">${(estimatedTime * loops).toFixed(1)}s</div>
              <div class="stat-label">Temps estimé</div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">Estimation par vitesse</div>
            <table class="table">
              <thead>
                <tr>
                  <th>Vitesse</th>
                  <th>Temps / boucle</th>
                  <th>Temps total</th>
                </tr>
              </thead>
              <tbody>
                ${[0.25, 0.5, 1, 2, 4, 8].map(speed => {
                  const timePerLoop = totalActions * (1000 / speed) / 1000;
                  const totalTime = timePerLoop * loops;
                  return `
                    <tr>
                      <td>${speed}x</td>
                      <td>${timePerLoop.toFixed(1)}s</td>
                      <td>${totalTime.toFixed(1)}s</td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>

          <div class="card">
            <div class="card-header">Système</div>
            <div style="font-size: 13px; color: ${Config.theme.textSecondary};">
              Version: ${Config.version}<br>
              User Agent: ${navigator.userAgent.substring(0, 50)}...<br>
              URL: ${window.location.href}
            </div>
          </div>
        </div>
      `;
    },

    renderSaveTab() {
      return `
        <div class="content">
          <div class="card">
            <div class="card-header">Sauvegarder</div>
            <div class="btn-group">
              <button class="btn btn-primary" id="save-local">💾 Sauvegarder localement</button>
            </div>
            <div class="btn-group">
              <button class="btn btn-secondary" id="export-json">⬇️ Exporter JSON</button>
            </div>
          </div>

          <div class="card">
            <div class="card-header">Charger</div>
            <div class="btn-group">
              <button class="btn btn-primary" id="load-local">📂 Charger depuis localStorage</button>
            </div>
            <div class="input-group">
              <label>Ou importer un fichier JSON</label>
              <input type="file" id="import-json" accept=".json">
            </div>
          </div>

          <div class="card">
            <div class="card-header">Danger Zone</div>
            <div class="btn-group">
              <button class="btn btn-danger" id="reset-all">🗑️ Tout réinitialiser</button>
            </div>
          </div>
        </div>
      `;
    },

    attachEventListeners() {
      const root = State.shadowRoot;

      // Tabs
      root.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
          State.currentTab = tab.dataset.tab;
          this.render();
        });
      });

      // Record tab
      const btnRecord = root.querySelector('#btn-record');
      const btnStopRecord = root.querySelector('#btn-stop-record');
      const btnPlay = root.querySelector('#btn-play');
      const btnPause = root.querySelector('#btn-pause');
      const btnStop = root.querySelector('#btn-stop');
      const speedInput = root.querySelector('#speed');
      const loopsInput = root.querySelector('#loops');
      const timeLimitInput = root.querySelector('#time-limit');
      const dryRunCheckbox = root.querySelector('#dry-run');

      if (btnRecord) btnRecord.addEventListener('click', () => Recorder.start());
      if (btnStopRecord) btnStopRecord.addEventListener('click', () => Recorder.stop());
      if (btnPlay) btnPlay.addEventListener('click', () => Player.start());
      if (btnPause) btnPause.addEventListener('click', () => State.isPaused ? Player.resume() : Player.pause());
      if (btnStop) btnStop.addEventListener('click', () => Player.stop());
      if (speedInput) speedInput.addEventListener('input', (e) => { State.speed = parseFloat(e.target.value); this.render(); });
      if (loopsInput) loopsInput.addEventListener('input', (e) => { State.loopCount = parseInt(e.target.value); this.render(); });
      if (timeLimitInput) timeLimitInput.addEventListener('input', (e) => { State.timeLimit = parseInt(e.target.value) * 1000; });
      if (dryRunCheckbox) dryRunCheckbox.addEventListener('change', (e) => { State.dryRun = e.target.checked; });

      // Conditions tab
      const btnAddCondition = root.querySelector('#add-condition');
      const btnTestConditions = root.querySelector('#test-conditions');

      if (btnAddCondition) {
        btnAddCondition.addEventListener('click', () => {
          const name = prompt('Nom de la condition:');
          if (!name) return;

          const type = prompt(`Type (${Conditions.types.join(', ')}):`);
          if (!Conditions.types.includes(type)) {
            alert('Type invalide');
            return;
          }

          const selector = prompt('Sélecteur CSS:');
          if (!selector) return;

          const value = prompt('Valeur (optionnel):') || '';
          const preflight = confirm('Vérification préalable (avant exécution)?');

          State.conditions.push({ name, type, selector, value, preflight });
          this.render();
        });
      }

      if (btnTestConditions) {
        btnTestConditions.addEventListener('click', () => {
          const { results } = Conditions.checkAll(State.conditions);
          const message = results.map(r =>
            `${r.passed ? '✅' : '❌'} ${r.condition.name}`
          ).join('\n');
          alert(message);
        });
      }

      root.querySelectorAll('[data-condition-index]').forEach(btn => {
        btn.addEventListener('click', () => {
          const index = parseInt(btn.dataset.conditionIndex);
          State.conditions.splice(index, 1);
          this.render();
        });
      });

      // Edit tab
      const btnAddPrompt = root.querySelector('#add-prompt');
      const btnAddConfirm = root.querySelector('#add-confirm');
      const btnClearActions = root.querySelector('#clear-actions');

      if (btnAddPrompt) {
        btnAddPrompt.addEventListener('click', () => {
          const title = prompt('Titre:') || 'Entrée requise';
          const message = prompt('Message:') || '';
          const placeholder = prompt('Placeholder:') || '';
          const targetSelector = prompt('Sélecteur cible:') || '';

          State.recordedActions.push({
            id: Date.now().toString(36),
            type: 'prompt',
            title,
            message,
            placeholder,
            targetSelector,
            required: true
          });

          this.render();
        });
      }

      if (btnAddConfirm) {
        btnAddConfirm.addEventListener('click', () => {
          const title = prompt('Titre:') || 'Confirmation';
          const message = prompt('Message:') || '';
          const details = prompt('Détails (optionnel):') || '';

          State.recordedActions.push({
            id: Date.now().toString(36),
            type: 'confirm',
            title,
            message,
            details,
            okLabel: 'Oui',
            cancelLabel: 'Non'
          });

          this.render();
        });
      }

      if (btnClearActions) {
        btnClearActions.addEventListener('click', () => {
          if (confirm('Effacer toutes les actions?')) {
            State.recordedActions = [];
            this.render();
          }
        });
      }

      root.querySelectorAll('[data-action-index]').forEach(btn => {
        btn.addEventListener('click', () => {
          const index = parseInt(btn.dataset.actionIndex);
          State.recordedActions.splice(index, 1);
          this.render();
        });
      });

      // Audit tab
      const btnExportJSON = root.querySelector('#export-audit-json');
      const btnExportCSV = root.querySelector('#export-audit-csv');
      const btnClearAudit = root.querySelector('#clear-audit');

      if (btnExportJSON) btnExportJSON.addEventListener('click', () => Audit.exportJSON());
      if (btnExportCSV) btnExportCSV.addEventListener('click', () => Audit.exportCSV());
      if (btnClearAudit) {
        btnClearAudit.addEventListener('click', () => {
          if (confirm('Effacer tout l\'historique d\'audit?')) {
            Audit.clear();
            this.render();
          }
        });
      }

      // Save tab
      const btnSaveLocal = root.querySelector('#save-local');
      const btnLoadLocal = root.querySelector('#load-local');
      const btnExportJSONFile = root.querySelector('#export-json');
      const btnImportJSON = root.querySelector('#import-json');
      const btnResetAll = root.querySelector('#reset-all');

      if (btnSaveLocal) {
        btnSaveLocal.addEventListener('click', () => {
          try {
            localStorage.setItem(Config.storage.actions, JSON.stringify(State.recordedActions));
            localStorage.setItem(Config.storage.conditions, JSON.stringify(State.conditions));
            localStorage.setItem(Config.storage.config, JSON.stringify({
              speed: State.speed,
              loopCount: State.loopCount,
              timeLimit: State.timeLimit
            }));
            this.flash('success', 'Sauvegardé');
          } catch (e) {
            this.flash('error', 'Erreur de sauvegarde');
          }
        });
      }

      if (btnLoadLocal) {
        btnLoadLocal.addEventListener('click', () => {
          try {
            const actions = localStorage.getItem(Config.storage.actions);
            const conditions = localStorage.getItem(Config.storage.conditions);
            const config = localStorage.getItem(Config.storage.config);

            if (actions) State.recordedActions = JSON.parse(actions);
            if (conditions) State.conditions = JSON.parse(conditions);
            if (config) {
              const cfg = JSON.parse(config);
              State.speed = cfg.speed || 1;
              State.loopCount = cfg.loopCount || 1;
              State.timeLimit = cfg.timeLimit || null;
            }

            this.flash('success', 'Chargé');
            this.render();
          } catch (e) {
            this.flash('error', 'Erreur de chargement');
          }
        });
      }

      if (btnExportJSONFile) {
        btnExportJSONFile.addEventListener('click', () => {
          const data = {
            version: Config.version,
            actions: State.recordedActions,
            conditions: State.conditions,
            config: {
              speed: State.speed,
              loopCount: State.loopCount,
              timeLimit: State.timeLimit
            }
          };

          const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `autoclicus-${new Date().toISOString()}.json`;
          a.click();
          URL.revokeObjectURL(url);
        });
      }

      if (btnImportJSON) {
        btnImportJSON.addEventListener('change', (e) => {
          const file = e.target.files[0];
          if (!file) return;

          const reader = new FileReader();
          reader.onload = (event) => {
            try {
              const data = JSON.parse(event.target.result);

              if (data.actions) State.recordedActions = data.actions;
              if (data.conditions) State.conditions = data.conditions;
              if (data.config) {
                State.speed = data.config.speed || 1;
                State.loopCount = data.config.loopCount || 1;
                State.timeLimit = data.config.timeLimit || null;
              }

              this.flash('success', 'Importé');
              this.render();
            } catch (e) {
              this.flash('error', 'Fichier invalide');
            }
          };
          reader.readAsText(file);
        });
      }

      if (btnResetAll) {
        btnResetAll.addEventListener('click', () => {
          if (confirm('Tout réinitialiser? Cette action est irréversible.')) {
            State.recordedActions = [];
            State.conditions = [];
            State.speed = 1;
            State.loopCount = 1;
            State.timeLimit = null;
            Audit.clear();
            localStorage.removeItem(Config.storage.actions);
            localStorage.removeItem(Config.storage.conditions);
            localStorage.removeItem(Config.storage.config);
            this.flash('success', 'Réinitialisé');
            this.render();
          }
        });
      }
    },

    attachKeyboardShortcuts() {
      document.addEventListener('keydown', (e) => {
        // Ignore if typing in input
        if (e.target.matches('input, textarea')) return;

        if (e.key === 'F6') {
          e.preventDefault();
          State.isRecording ? Recorder.stop() : Recorder.start();
        }

        if (e.key === 'F7') {
          e.preventDefault();
          if (!State.isPlaying && State.recordedActions.length > 0) Player.start();
        }

        if (e.key === 'F8') {
          e.preventDefault();
          if (State.isPlaying) Player.stop();
          if (State.isRecording) Recorder.stop();
        }
      });
    },

    flash(type, message) {
      const colors = {
        success: { bg: Config.theme.success, fg: '#fff' },
        error: { bg: Config.theme.error, fg: '#fff' },
        warning: { bg: Config.theme.warning, fg: Config.theme.text },
        info: { bg: Config.theme.primary, fg: '#fff' }
      };
      const c = colors[type] || colors.info;

      const flash = document.createElement('div');
      flash.textContent = message;
      flash.style.cssText = `
        position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
        padding: 12px 20px; border-radius: 6px; z-index: 1000000;
        font-weight: 500; font-size: 14px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        box-shadow: 0 4px 12px ${Config.theme.shadow};
        background: ${c.bg}; color: ${c.fg};
        animation: autoclicus-flash 0.3s ease-out;
      `;

      // Inject keyframes once
      if (!document.getElementById('autoclicus-flash-style')) {
        const style = document.createElement('style');
        style.id = 'autoclicus-flash-style';
        style.textContent = `@keyframes autoclicus-flash { from { opacity:0; transform:translate(-50%,-20px); } to { opacity:1; transform:translate(-50%,0); } }`;
        document.head.appendChild(style);
      }

      document.body.appendChild(flash);
      setTimeout(() => flash.remove(), 3000);
    },

    highlightElement(element, dryRun = false) {
      const rect = element.getBoundingClientRect();

      const highlight = document.createElement('div');
      highlight.style.cssText = `
        position: fixed;
        top: ${rect.top}px;
        left: ${rect.left}px;
        width: ${rect.width}px;
        height: ${rect.height}px;
        border: 3px solid ${dryRun ? Config.theme.warning : Config.theme.primary};
        background: ${dryRun ? 'rgba(255, 193, 7, 0.1)' : 'rgba(0, 135, 78, 0.1)'};
        pointer-events: none;
        z-index: 999998;
        border-radius: 4px;
        animation: pulse 0.6s;
      `;

      const style = document.createElement('style');
      style.textContent = `
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
      `;

      document.head.appendChild(style);
      document.body.appendChild(highlight);

      setTimeout(() => {
        highlight.remove();
        style.remove();
      }, 600);
    },

    showPreflightResults(results) {
      const failed = results.filter(r => !r.passed);

      const message = results.map(r =>
        `${r.passed ? '✅' : '❌'} ${r.condition.name}`
      ).join('\n');

      alert(`Vérifications préalables:\n\n${message}\n\n${failed.length > 0 ? '❌ Échec - impossible de continuer' : '✅ Succès'}`);
    }
  };

  // =============================================================================
  // INITIALIZATION
  // =============================================================================
  try {
    // Load saved data
    try {
      const savedActions = localStorage.getItem(Config.storage.actions);
      const savedConditions = localStorage.getItem(Config.storage.conditions);
      const savedConfig = localStorage.getItem(Config.storage.config);

      if (savedActions) State.recordedActions = JSON.parse(savedActions);
      if (savedConditions) State.conditions = JSON.parse(savedConditions);
      if (savedConfig) {
        const cfg = JSON.parse(savedConfig);
        State.speed = cfg.speed || 1;
        State.loopCount = cfg.loopCount || 1;
        State.timeLimit = cfg.timeLimit || null;
      }
    } catch (e) {
      console.warn('Failed to load saved data:', e);
    }

    // Initialize UI
    UI.init();

    // Update clock every second
    setInterval(() => {
      const clock = State.shadowRoot?.querySelector('.header-clock');
      if (clock) {
        const now = new Date();
        const time = now.toLocaleTimeString('fr-CA', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        clock.textContent = time;
      }
    }, 1000);

    console.log(`%c✨ AutoClicUS v${Config.version} - Propulsé par JSLAI`, 'color: #00874e; font-size: 14px; font-weight: bold;');
    console.log('%cF6=Enregistrer | F7=Lire | F8=Arrêter', 'color: #6c757d; font-size: 12px;');

  } catch (e) {
    console.error('AutoClicUS initialization error:', e);
    alert('Erreur d\'initialisation AutoClicUS. Consultez la console pour plus de détails.');
  }

})();
