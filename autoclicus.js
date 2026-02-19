// AutoClicUS v5.2.0 - "C'est l'heure du taux de change! — Propulsé par JSLAI"
// Automation assistant for SmartD USD exchange rate operations
// Paste this complete snippet into Chrome DevTools console

(function() {
  'use strict';

  // =============================================================================
  // CONFIG
  // =============================================================================
  const Config = {
    version: '5.2.0',
    emmaAvatar: 'data:image/jpeg;base64,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',
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
  // STORAGE — Safe localStorage wrapper (banking sites may block storage)
  // =============================================================================
  const Storage = (() => {
    const memoryFallback = {};
    let useMemory = false;

    // Test localStorage availability once
    try {
      const testKey = '__autoclicus_test__';
      localStorage.setItem(testKey, '1');
      localStorage.removeItem(testKey);
    } catch (e) {
      useMemory = true;
      console.warn('AutoClicUS: localStorage unavailable — using in-memory storage (data lost on page reload)');
    }

    return {
      getItem(key) {
        if (useMemory) return memoryFallback[key] || null;
        try { return localStorage.getItem(key); } catch (e) { return memoryFallback[key] || null; }
      },
      setItem(key, value) {
        if (useMemory) { memoryFallback[key] = value; return; }
        try { localStorage.setItem(key, value); } catch (e) { memoryFallback[key] = value; }
      },
      removeItem(key) {
        if (useMemory) { delete memoryFallback[key]; return; }
        try { localStorage.removeItem(key); } catch (e) { delete memoryFallback[key]; }
      },
      get isMemoryMode() { return useMemory; }
    };
  })();

  // =============================================================================
  // SAFE HTML — Trusted Types compatible innerHTML setter
  // =============================================================================
  const safeHTML = (() => {
    let policy = null;
    try {
      if (window.trustedTypes?.createPolicy) {
        policy = window.trustedTypes.createPolicy('autoclicus', { createHTML: s => s });
      }
    } catch (e) { /* Trusted Types not enforced or already created — fine */ }

    return function(element, html) {
      try {
        element.innerHTML = policy ? policy.createHTML(html) : html;
      } catch (e) {
        // Last resort: use DOMParser
        const doc = new DOMParser().parseFromString(html, 'text/html');
        element.replaceChildren(...doc.body.childNodes);
      }
    };
  })();

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
    deadlineTime: null,

    // Settings (user-configurable)
    settings: {
      shortcuts: { record: 'F6', play: 'F7', stop: 'F8', pause: 'F9' },
      delayBetweenActions: 1000,
      delayBetweenLoops: 2000,
      autoSave: true,
      showTooltips: true,
      confirmBeforeDelete: true
    },

    // Rates
    tauxAcheteur: '',
    tauxVendeur: '',

    // Countdown (default 16:00 today)
    countdownEnd: (() => { const t = new Date(); t.setHours(16, 0, 0, 0); return t.getTime() > Date.now() ? t.getTime() : null; })(),
    countdownInterval: null,

    // Loop execution stats
    loopTimestamps: [],
    loopStartTime: null,

    // UI state for forms
    showConditionForm: false,
    showPromptForm: false,
    showConfirmForm: false,
    capturingShortcut: null,
    elementPickerActive: false,
    pickedElement: null,
    editingActionIndex: null
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
      // P3: Debounced save — batch at loop boundaries instead of every action
      if (!this._saveScheduled) {
        this._saveScheduled = true;
        setTimeout(() => {
          this.save();
          this.pruneIfNeeded();
          this._saveScheduled = false;
        }, 2000);
      }

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
        Storage.setItem(Config.storage.audit, JSON.stringify(data));
      } catch (e) {
        console.error('Failed to save audit trail:', e);
      }
    },

    load() {
      try {
        const data = Storage.getItem(Config.storage.audit);
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
      Storage.removeItem(Config.storage.audit);
    },

    pruneIfNeeded() {
      try {
        const data = Storage.getItem(Config.storage.audit);
        if (data && data.length > Config.limits.maxAuditSize) {
          const parsed = JSON.parse(data);
          // Keep only last 50% of sessions
          parsed.sessions = parsed.sessions.slice(-Math.floor(parsed.sessions.length / 2));
          Storage.setItem(Config.storage.audit, JSON.stringify(parsed));
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
      State.loopTimestamps = [];
      State.loopStartTime = Date.now();

      UI.flash('success', State.dryRun ? 'Simulation démarrée' : 'Lecture démarrée');
      UI.render();

      await this.run();
    },

    async run() {
      while (State.isPlaying && State.currentLoop < State.loopCount) {
        State.currentLoop++;
        State.currentStep = 0;
        State.loopStartTime = Date.now();

        for (let i = 0; i < State.recordedActions.length; i++) {
          if (!State.isPlaying) break;

          while (State.isPaused) {
            await this.sleep(100);
          }

          State.currentStep = i;
          UI.updatePlaybackDisplay(); // P1: targeted update, not full re-render

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
          await this.sleep(State.settings.delayBetweenActions / State.speed);
        }

        // Record loop completion for stats
        State.loopTimestamps.push(Date.now() - State.loopStartTime);
        // P3: Flush audit at loop boundary
        Audit.save();

        if (State.currentLoop < State.loopCount) {
          await this.sleep(State.settings.delayBetweenLoops / State.speed);
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
        if (action.type === 'wait') {
          await this.sleep(action.delay || 1000);
          Audit.log(action, 'wait', `${action.delay}ms`, 'success', Date.now() - startTime);
          return;
        }

        if (action.type === 'navigate') {
          if (!State.dryRun) {
            window.location.href = action.url;
          }
          Audit.log(action, 'navigate', action.url, 'success', Date.now() - startTime);
          return;
        }

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

        if (action.type === 'paste_buyer_rate' || action.type === 'paste_seller_rate') {
          const rate = action.type === 'paste_buyer_rate' ? State.tauxAcheteur : State.tauxVendeur;
          const label = action.type === 'paste_buyer_rate' ? 'acheteur' : 'vendeur';
          if (!rate) {
            UI.flash('error', `Taux ${label} non défini`);
            Audit.log(action, action.type, 'missing_rate', 'error', Date.now() - startTime);
            return;
          }
          const activeEl = document.activeElement;
          if (activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA')) {
            if (!State.dryRun) {
              this.setInputValue(activeEl, rate);
            }
            Audit.log(action, action.type, rate, 'success', Date.now() - startTime);
          } else {
            // Try clipboard fallback
            if (!State.dryRun) {
              try { await navigator.clipboard.writeText(rate); } catch (e) { /* ignore */ }
            }
            Audit.log(action, action.type, `clipboard:${rate}`, 'success', Date.now() - startTime);
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

        safeHTML(modal, `
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
        `);

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

        safeHTML(modal, `
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
        `);

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
      Audit.save(); // P3: Final flush on stop
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

      // Attach shadow DOM with fallback to regular DOM (some banking sites restrict Shadow DOM)
      try {
        State.shadowRoot = container.attachShadow({ mode: 'open' });
      } catch (e) {
        console.warn('AutoClicUS: Shadow DOM unavailable — using scoped regular DOM');
        State.shadowRoot = container;
      }

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

        @keyframes ai-gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes ai-pulse {
          0%, 100% { box-shadow: 0 0 8px rgba(0, 135, 78, 0.3); }
          50% { box-shadow: 0 0 20px rgba(0, 135, 78, 0.6), 0 0 40px rgba(0, 166, 90, 0.2); }
        }

        @keyframes ai-glow-ring {
          0%, 100% { box-shadow: 0 0 0 2px rgba(255,255,255,0.6); }
          50% { box-shadow: 0 0 0 2px rgba(255,255,255,0.9), 0 0 12px rgba(255,255,255,0.4); }
        }

        @keyframes ai-dot-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.7); }
        }

        @keyframes ai-recording-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(220, 53, 69, 0.4); }
          50% { box-shadow: 0 0 0 8px rgba(220, 53, 69, 0); }
        }

        @keyframes ai-progress-sweep {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes ai-shimmer {
          0% { background-position: -100% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes ai-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        #autoclicus-ui {
          position: fixed;
          top: 20px;
          right: 20px;
          width: 520px;
          min-width: 380px;
          max-width: 90vw;
          max-height: 90vh;
          background: ${Config.theme.bg};
          border: 2px solid rgba(0, 135, 78, 0.2);
          border-radius: 16px;
          box-shadow: 0 10px 40px ${Config.theme.shadow}, 0 0 0 1px rgba(0, 135, 78, 0.05);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 14px;
          color: ${Config.theme.text};
          z-index: 999999;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          backdrop-filter: blur(10px);
          transition: border-color 0.4s, box-shadow 0.4s;
        }

        #autoclicus-ui.state-recording {
          border-color: ${Config.theme.error};
          box-shadow: 0 0 20px rgba(220, 53, 69, 0.3), 0 0 40px rgba(220, 53, 69, 0.1), 0 10px 40px ${Config.theme.shadow};
          animation: ai-recording-pulse 1.5s ease-in-out infinite;
        }

        #autoclicus-ui.state-playing {
          border-color: ${Config.theme.primary};
          box-shadow: 0 0 20px rgba(0, 135, 78, 0.3), 0 0 40px rgba(0, 135, 78, 0.1), 0 10px 40px ${Config.theme.shadow};
          animation: ai-pulse 2s ease-in-out infinite;
        }

        .header {
          background: linear-gradient(135deg, ${Config.theme.primary} 0%, #005a34 40%, ${Config.theme.primaryLight} 100%);
          background-size: 200% 200%;
          animation: ai-gradient 6s ease infinite;
          color: white;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          position: relative;
          overflow: hidden;
        }

        .header::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at 30% 50%, rgba(255,255,255,0.08) 0%, transparent 50%);
          pointer-events: none;
        }

        .header-avatar {
          flex-shrink: 0;
          position: relative;
        }

        .header-avatar img {
          animation: ai-glow-ring 3s ease-in-out infinite;
        }

        .header-info {
          flex: 1;
        }

        .header-title {
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-shadow: 0 1px 3px rgba(0,0,0,0.2);
        }

        .header-subtitle {
          font-size: 11px;
          opacity: 0.85;
        }

        .header-ai-badge {
          display: inline-block;
          padding: 1px 5px;
          background: rgba(255,255,255,0.25);
          border-radius: 6px;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1px;
          vertical-align: middle;
          margin-left: 4px;
        }

        .header-right {
          text-align: right;
          flex-shrink: 0;
        }

        .header-clock {
          font-size: 18px;
          font-weight: 600;
          font-variant-numeric: tabular-nums;
          text-shadow: 0 1px 3px rgba(0,0,0,0.2);
        }

        .header-countdown {
          font-size: 12px;
          font-weight: 700;
          color: #ff4444;
          font-variant-numeric: tabular-nums;
          margin-top: 1px;
          text-shadow: 0 0 10px rgba(255,68,68,0.8);
          letter-spacing: 0.5px;
        }

        .header-countdown.expired {
          color: #ff6b6b;
          animation: ai-recording-pulse 0.8s ease-in-out infinite;
          text-shadow: 0 0 12px rgba(255,107,107,0.9);
        }

        .header-ai-status {
          font-size: 9px;
          opacity: 0.8;
          margin-top: 1px;
          display: flex;
          align-items: center;
          gap: 3px;
          justify-content: flex-end;
        }

        .ai-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #4ade80;
          animation: ai-dot-pulse 2s ease-in-out infinite;
        }

        /* Rate bar */
        .rate-bar {
          display: flex;
          align-items: flex-end;
          gap: 10px;
          padding: 6px 14px;
          background: ${Config.theme.bgSecondary};
          border-bottom: 1px solid ${Config.theme.border};
          font-size: 13px;
        }

        .rate-field {
          flex: 1;
          min-width: 0;
        }

        .rate-field label {
          display: block;
          font-size: 10px;
          font-weight: 600;
          color: ${Config.theme.textSecondary};
          text-transform: uppercase;
          letter-spacing: 0.3px;
          white-space: nowrap;
          margin-bottom: 2px;
        }

        .rate-field input {
          width: 100%;
          min-width: 70px;
          padding: 4px 6px;
          border: 1px solid ${Config.theme.border};
          border-radius: 5px;
          font-size: 14px;
          font-weight: 600;
          font-family: 'SF Mono', 'Courier New', monospace;
          color: ${Config.theme.primary};
          text-align: center;
          background: white;
        }

        .rate-field input:focus {
          outline: none;
          border-color: ${Config.theme.primary};
          box-shadow: 0 0 0 2px rgba(0, 135, 78, 0.15);
        }

        .rate-divider {
          width: 1px;
          height: 28px;
          background: ${Config.theme.border};
        }

        /* Geek progress bar */
        .progress-bar-geek {
          height: 8px;
          background: #0a0a0a;
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 16px;
          position: relative;
          border: 1px solid rgba(0, 135, 78, 0.3);
        }

        .progress-bar-geek .progress-fill-geek {
          height: 100%;
          border-radius: 3px;
          transition: width 0.3s;
          position: relative;
          overflow: hidden;
        }

        .progress-bar-geek .progress-fill-geek.playing {
          background: linear-gradient(90deg, #00874e, #00ff88, #00874e);
          background-size: 200% 100%;
          animation: ai-progress-sweep 1s linear infinite;
          box-shadow: 0 0 8px rgba(0, 255, 136, 0.6), inset 0 0 4px rgba(0, 255, 136, 0.3);
        }

        .progress-bar-geek .progress-fill-geek.recording {
          background: linear-gradient(90deg, #dc3545, #ff6b6b, #dc3545);
          background-size: 200% 100%;
          animation: ai-progress-sweep 0.8s linear infinite;
          box-shadow: 0 0 8px rgba(220, 53, 69, 0.6), inset 0 0 4px rgba(255, 107, 107, 0.3);
        }

        .progress-bar-geek::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,0.15) 3px, rgba(0,0,0,0.15) 4px);
          pointer-events: none;
        }

        /* Resize handle */
        .resize-handle {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 18px;
          height: 18px;
          cursor: ew-resize;
          opacity: 0.4;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          color: ${Config.theme.textSecondary};
          z-index: 10;
          border-radius: 0 8px 0 16px;
          transition: opacity 0.2s;
        }

        .resize-handle:hover {
          opacity: 0.8;
          background: rgba(0,0,0,0.05);
        }

        /* Execution stats */
        .exec-stats {
          background: linear-gradient(135deg, #0a1628 0%, #1a2744 100%);
          padding: 8px 14px 6px;
          border-bottom: 1px solid rgba(0, 135, 78, 0.2);
        }

        .exec-stats-row {
          display: flex;
          justify-content: space-between;
          gap: 6px;
          margin-bottom: 6px;
        }

        .exec-stat {
          text-align: center;
          flex: 1;
        }

        .exec-stat-value {
          display: block;
          font-size: 15px;
          font-weight: 700;
          font-family: 'SF Mono', 'Courier New', monospace;
          color: #4ade80;
          font-variant-numeric: tabular-nums;
          text-shadow: 0 0 8px rgba(74, 222, 128, 0.4);
        }

        .exec-stat-label {
          font-size: 9px;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .exec-stats-progress {
          height: 4px;
          background: rgba(255,255,255,0.1);
          border-radius: 2px;
          overflow: hidden;
          margin-bottom: 2px;
        }

        .exec-stats-fill {
          height: 100%;
          background: linear-gradient(90deg, #4ade80, #22c55e);
          border-radius: 2px;
          transition: width 0.3s ease;
          box-shadow: 0 0 6px rgba(74, 222, 128, 0.5);
        }

        /* Bottom status strip */
        .bottom-strip {
          padding: 6px 14px;
          font-size: 11px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid ${Config.theme.border};
          background: ${Config.theme.bgSecondary};
          transition: all 0.3s;
        }

        .bottom-strip.recording {
          background: linear-gradient(90deg, rgba(220,53,69,0.08), rgba(220,53,69,0.15), rgba(220,53,69,0.08));
          background-size: 200% 100%;
          animation: ai-progress-sweep 2s linear infinite;
          border-top-color: rgba(220,53,69,0.3);
          color: ${Config.theme.error};
        }

        .bottom-strip.playing {
          background: linear-gradient(90deg, rgba(0,135,78,0.08), rgba(0,135,78,0.15), rgba(0,135,78,0.08));
          background-size: 200% 100%;
          animation: ai-progress-sweep 2s linear infinite;
          border-top-color: rgba(0,135,78,0.3);
          color: ${Config.theme.primary};
        }

        .bottom-strip .status-icon {
          font-size: 14px;
        }

        .tabs {
          display: flex;
          background: ${Config.theme.bgSecondary};
          border-bottom: 1px solid ${Config.theme.border};
          overflow-x: auto;
          scrollbar-width: thin;
          scrollbar-color: rgba(0,0,0,0.12) transparent;
          -webkit-overflow-scrolling: touch;
        }
        .tabs::-webkit-scrollbar {
          height: 3px;
        }
        .tabs::-webkit-scrollbar-thumb {
          background: rgba(0,0,0,0.12);
          border-radius: 2px;
        }

        .tab {
          flex: 1 1 0;
          min-width: 0;
          padding: 11px 4px;
          text-align: center;
          cursor: pointer;
          border: none;
          background: transparent;
          color: ${Config.theme.textSecondary};
          font-size: 11px;
          font-weight: 500;
          transition: all 0.2s;
          position: relative;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
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
          background: linear-gradient(90deg, ${Config.theme.primary}, ${Config.theme.primaryLight}, ${Config.theme.primary});
          background-size: 200% 100%;
          animation: ai-shimmer 2s linear infinite;
        }

        .content {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
          scrollbar-width: thin;
          scrollbar-color: rgba(0,0,0,0.15) transparent;
        }

        .content::-webkit-scrollbar {
          width: 4px;
        }

        .content::-webkit-scrollbar-thumb {
          background: rgba(0,0,0,0.15);
          border-radius: 2px;
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
          position: relative;
          overflow: hidden;
        }

        .btn-primary::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transition: left 0.5s;
        }

        .btn-primary:hover::after {
          left: 100%;
        }

        .btn-primary:hover {
          box-shadow: 0 4px 16px rgba(0, 135, 78, 0.4), 0 0 8px rgba(0, 166, 90, 0.2);
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
          border-radius: 10px;
          padding: 16px;
          margin-bottom: 16px;
          transition: all 0.25s ease;
        }

        .card:hover {
          border-color: rgba(0, 135, 78, 0.3);
          box-shadow: 0 2px 12px rgba(0, 135, 78, 0.08);
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
          background: linear-gradient(135deg, rgba(0, 135, 78, 0.05), rgba(0, 166, 90, 0.08));
          border-color: ${Config.theme.primary};
          box-shadow: 0 0 0 1px rgba(0, 135, 78, 0.1), 0 2px 8px rgba(0, 135, 78, 0.1);
          animation: ai-float 2s ease-in-out infinite;
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
          background: linear-gradient(90deg, ${Config.theme.primary}, ${Config.theme.primaryLight}, #4ade80, ${Config.theme.primaryLight}, ${Config.theme.primary});
          background-size: 400% 100%;
          animation: ai-progress-sweep 2s linear infinite;
          transition: width 0.3s;
          border-radius: 3px;
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

        .stat-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .stat-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 135, 78, 0.1);
        }

        .stat-value {
          font-size: 28px;
          font-weight: 700;
          color: ${Config.theme.primary};
          margin-bottom: 4px;
          text-shadow: 0 0 20px rgba(0, 135, 78, 0.15);
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

        /* Tooltip system */
        .tooltip-wrap {
          position: relative;
          display: inline-block;
        }
        .tooltip-wrap::after {
          content: attr(data-tip);
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          padding: 6px 10px;
          background: ${Config.theme.text};
          color: white;
          font-size: 11px;
          border-radius: 4px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s;
          z-index: 10;
          margin-bottom: 4px;
        }
        .tooltip-wrap:hover::after {
          opacity: 1;
        }

        /* Inline forms */
        .inline-form {
          padding: 16px;
          background: ${Config.theme.bgSecondary};
          border-radius: 8px;
          border: 1px solid ${Config.theme.border};
          margin-bottom: 16px;
        }
        .inline-form .form-row {
          display: flex;
          gap: 10px;
          margin-bottom: 12px;
          align-items: flex-end;
        }
        .inline-form .form-field {
          flex: 1;
        }
        .inline-form .form-field label {
          display: block;
          font-size: 12px;
          font-weight: 500;
          color: ${Config.theme.textSecondary};
          margin-bottom: 4px;
        }
        .inline-form .form-field input,
        .inline-form .form-field select {
          width: 100%;
          padding: 8px;
          border: 1px solid ${Config.theme.border};
          border-radius: 6px;
          font-size: 13px;
          font-family: inherit;
          background: white;
        }
        .inline-form .form-field input:focus,
        .inline-form .form-field select:focus {
          outline: none;
          border-color: ${Config.theme.primary};
          box-shadow: 0 0 0 2px rgba(0, 135, 78, 0.1);
        }
        .form-actions {
          display: flex;
          gap: 8px;
          justify-content: flex-end;
        }

        /* Action row buttons */
        .action-btns {
          display: flex;
          gap: 2px;
          flex-shrink: 0;
        }
        .action-btn-mini {
          width: 28px;
          height: 28px;
          border: none;
          background: transparent;
          cursor: pointer;
          border-radius: 4px;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s;
          color: ${Config.theme.textSecondary};
        }
        .action-btn-mini:hover {
          background: ${Config.theme.bgSecondary};
          color: ${Config.theme.text};
        }
        .action-btn-mini.danger:hover {
          background: rgba(220, 53, 69, 0.1);
          color: ${Config.theme.error};
        }

        /* Inline edit input */
        .inline-edit {
          padding: 4px 8px;
          border: 1px solid ${Config.theme.primary};
          border-radius: 4px;
          font-size: 12px;
          width: 120px;
          font-family: inherit;
        }
        .inline-edit:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(0, 135, 78, 0.2);
        }

        /* Settings */
        .shortcut-key {
          display: inline-block;
          padding: 4px 10px;
          background: ${Config.theme.bgSecondary};
          border: 1px solid ${Config.theme.border};
          border-radius: 6px;
          font-family: 'Courier New', monospace;
          font-size: 13px;
          font-weight: 600;
          min-width: 50px;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .shortcut-key:hover {
          border-color: ${Config.theme.primary};
          background: rgba(0, 135, 78, 0.05);
        }
        .shortcut-key.capturing {
          border-color: ${Config.theme.primary};
          background: rgba(0, 135, 78, 0.1);
          animation: ai-pulse 1s ease-in-out infinite;
        }
        .setting-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid ${Config.theme.border};
        }
        .setting-row:last-child {
          border-bottom: none;
        }
        .setting-label {
          font-size: 13px;
          color: ${Config.theme.text};
        }
        .setting-desc {
          font-size: 11px;
          color: ${Config.theme.textSecondary};
          margin-top: 2px;
        }

        /* Help */
        .help-section {
          margin-bottom: 20px;
        }
        .help-title {
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 10px;
          color: ${Config.theme.primary};
        }
        .help-step {
          display: flex;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid ${Config.theme.border};
        }
        .help-step:last-child {
          border-bottom: none;
        }
        .help-step-num {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: ${Config.theme.primary};
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 600;
          flex-shrink: 0;
        }
        .help-step-text {
          font-size: 13px;
          color: ${Config.theme.text};
          line-height: 1.5;
        }
        .help-kbd {
          display: inline-block;
          padding: 2px 6px;
          background: ${Config.theme.bgSecondary};
          border: 1px solid ${Config.theme.border};
          border-radius: 3px;
          font-family: 'Courier New', monospace;
          font-size: 11px;
          font-weight: 600;
        }

        /* Element picker */
        .picker-bar {
          padding: 10px 16px;
          background: linear-gradient(135deg, ${Config.theme.primary}, ${Config.theme.primaryLight});
          color: white;
          font-size: 13px;
          text-align: center;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .picker-bar:hover {
          filter: brightness(1.1);
        }
        .picker-result {
          padding: 8px 12px;
          background: ${Config.theme.bgSecondary};
          border: 1px solid ${Config.theme.border};
          border-radius: 6px;
          font-family: 'Courier New', monospace;
          font-size: 12px;
          margin-top: 8px;
          word-break: break-all;
        }

        /* Toggle switch */
        .toggle {
          position: relative;
          width: 44px;
          height: 24px;
          cursor: pointer;
        }
        .toggle input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .toggle-slider {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: ${Config.theme.border};
          border-radius: 24px;
          transition: 0.3s;
        }
        .toggle-slider::before {
          content: '';
          position: absolute;
          height: 18px;
          width: 18px;
          left: 3px;
          bottom: 3px;
          background: white;
          border-radius: 50%;
          transition: 0.3s;
        }
        .toggle input:checked + .toggle-slider {
          background: ${Config.theme.primary};
        }
        .toggle input:checked + .toggle-slider::before {
          transform: translateX(20px);
        }

        /* Wait action badge */
        .wait-badge {
          display: inline-block;
          padding: 2px 8px;
          background: rgba(255, 193, 7, 0.15);
          color: #b8860b;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
        }
      `;
    },

    render() {
      const ui = State.shadowRoot.querySelector('#autoclicus-ui');
      if (!ui) return;

      // Apply state classes for border glow
      ui.classList.toggle('state-recording', State.isRecording);
      ui.classList.toggle('state-playing', State.isPlaying);

      safeHTML(ui, `
        ${this.renderHeader()}
        ${this.renderRateBar()}
        ${this.renderTabs()}
        ${this.renderContent()}
        ${this.renderBottomStrip()}
        <div class="resize-handle" id="resize-handle">⇔</div>
      `);

      this.attachEventListeners();
      this.attachResizeHandle();
    },

    // P1: Lightweight update during playback — skip full re-render + re-attach
    updatePlaybackDisplay() {
      const root = State.shadowRoot;
      if (!root) return;

      // Update bottom strip (step/loop counter)
      const strip = root.querySelector('.bottom-strip');
      if (strip && State.isPlaying) {
        const step = State.currentStep + 1;
        const total = State.recordedActions.length;
        strip.innerHTML = `<span class="status-icon">🟢</span> Lecture ${step}/${total} · Boucle ${State.currentLoop}/${State.loopCount}`;
      }

      // Update exec stats panel
      const existingStats = root.querySelector('.exec-stats');
      if (State.isPlaying) {
        const statsHTML = this.renderExecStats();
        if (existingStats) {
          safeHTML(existingStats, existingStats.innerHTML); // clear
          existingStats.outerHTML = statsHTML;
        } else {
          // Insert after rate-bar if not present
          const rateBar = root.querySelector('.rate-bar');
          if (rateBar) {
            rateBar.insertAdjacentHTML('afterend', statsHTML);
          }
        }
      }

      // Update progress bar if on record tab
      const progressBar = root.querySelector('.progress-bar-geek');
      if (progressBar) {
        const pct = State.recordedActions.length > 0
          ? Math.round(((State.currentStep + 1) / State.recordedActions.length) * 100)
          : 0;
        progressBar.style.width = `${pct}%`;
        progressBar.textContent = `${pct}%`;
      }
    },

    renderHeader() {
      const now = new Date();
      const time = String(now.getHours()).padStart(2,'0') + ':' + String(now.getMinutes()).padStart(2,'0') + ':' + String(now.getSeconds()).padStart(2,'0');

      let countdownHTML = '';
      if (State.countdownEnd) {
        const remaining = State.countdownEnd - now.getTime();
        if (remaining > 0) {
          const hrs = Math.floor(remaining / 3600000);
          const mins = Math.floor((remaining % 3600000) / 60000);
          const secs = Math.floor((remaining % 60000) / 1000);
          const display = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
          countdownHTML = `<div class="header-countdown">⏱ ${display}</div>`;
        } else {
          countdownHTML = `<div class="header-countdown expired">⏱ 00:00:00 TERMINÉ</div>`;
        }
      }

      return `
        <div class="header">
          <div class="header-avatar">
            <img src="${Config.emmaAvatar}" alt="Emma" width="40" height="40"
                 style="border-radius: 50%; border: 2px solid rgba(255,255,255,0.6); object-fit: cover;">
          </div>
          <div class="header-info">
            <div class="header-title">Emma <span class="header-ai-badge">AI</span></div>
            <div class="header-subtitle">Assistante · Taux de change</div>
          </div>
          <div class="header-right">
            <div class="header-clock">${time}</div>
            ${countdownHTML}
            <div class="header-ai-status"><span class="ai-dot"></span> En ligne</div>
          </div>
        </div>
      `;
    },

    renderRateBar() {
      return `
        <div class="rate-bar">
          <div class="rate-field">
            <label>Taux acheteur</label>
            <input type="text" id="rate-buyer" placeholder="1.0000" value="${State.tauxAcheteur}">
          </div>
          <div class="rate-field">
            <label>Taux vendeur</label>
            <input type="text" id="rate-seller" placeholder="1.0000" value="${State.tauxVendeur}">
          </div>
          <div class="rate-field" style="flex: 0 0 auto;">
            <label>Boucles</label>
            <input type="number" id="loops" min="1" max="${Config.limits.maxLoops}" value="${State.loopCount}" style="width: 70px; font-family: 'SF Mono', monospace; font-size: 13px;">
          </div>
          <div class="rate-field" style="flex: 0 0 auto;">
            <label>Fin à</label>
            <input type="time" id="countdown-time" value="${State.countdownEnd ? new Date(State.countdownEnd).toTimeString().substring(0,5) : '16:00'}" style="font-family: 'SF Mono', monospace; font-size: 13px;">
          </div>
        </div>
        ${State.isPlaying ? this.renderExecStats() : ''}
      `;
    },

    renderExecStats() {
      const done = State.currentLoop;
      const total = State.loopCount;
      const remaining = total - done;
      const pct = total > 0 ? Math.round((done / total) * 100) : 0;

      // Calculate avg loop time from completed loops
      const avgMs = State.loopTimestamps.length > 0
        ? State.loopTimestamps.reduce((a, b) => a + b, 0) / State.loopTimestamps.length
        : 0;

      const etaMs = avgMs * remaining;
      const etaFinish = avgMs > 0 ? new Date(Date.now() + etaMs) : null;

      // Check if we'll finish before countdown
      let deadlineStatus = '';
      if (State.countdownEnd && etaFinish) {
        if (etaFinish.getTime() <= State.countdownEnd) {
          const margin = State.countdownEnd - etaFinish.getTime();
          const marginMins = Math.floor(margin / 60000);
          deadlineStatus = `<span style="color: ${Config.theme.success};">✅ Finira avec ~${marginMins} min d'avance</span>`;
        } else {
          const over = etaFinish.getTime() - State.countdownEnd;
          const overMins = Math.ceil(over / 60000);
          deadlineStatus = `<span style="color: ${Config.theme.error};">⚠️ Dépassera de ~${overMins} min</span>`;
        }
      }

      const formatDuration = (ms) => {
        if (ms <= 0) return '--';
        const s = Math.floor(ms / 1000);
        if (s < 60) return `${s}s`;
        const m = Math.floor(s / 60);
        const rs = s % 60;
        if (m < 60) return `${m}m${String(rs).padStart(2, '0')}s`;
        const h = Math.floor(m / 60);
        const rm = m % 60;
        return `${h}h${String(rm).padStart(2, '0')}m`;
      };

      return `
        <div class="exec-stats">
          <div class="exec-stats-row">
            <div class="exec-stat">
              <span class="exec-stat-value">${remaining}</span>
              <span class="exec-stat-label">/ ${total} restant${remaining !== 1 ? 's' : ''}</span>
            </div>
            <div class="exec-stat">
              <span class="exec-stat-value">${avgMs > 0 ? formatDuration(avgMs) : '--'}</span>
              <span class="exec-stat-label">/ boucle</span>
            </div>
            <div class="exec-stat">
              <span class="exec-stat-value">${etaMs > 0 ? formatDuration(etaMs) : '--'}</span>
              <span class="exec-stat-label">restant</span>
            </div>
            <div class="exec-stat">
              <span class="exec-stat-value">${etaFinish ? etaFinish.toLocaleTimeString('fr-CA', { hour: '2-digit', minute: '2-digit' }) : '--'}</span>
              <span class="exec-stat-label">fin est.</span>
            </div>
          </div>
          <div class="exec-stats-progress">
            <div class="exec-stats-fill" style="width: ${pct}%"></div>
          </div>
          ${deadlineStatus ? `<div style="text-align: center; font-size: 11px; padding: 2px 0;">${deadlineStatus}</div>` : ''}
        </div>
      `;
    },

    renderBottomStrip() {
      let stripClass = 'bottom-strip';
      let statusText = 'Prêt';
      let statusIcon = '⚪';

      if (State.isRecording) {
        stripClass += ' recording';
        statusText = 'Enregistrement en cours';
        statusIcon = '🔴';
      } else if (State.isPlaying) {
        stripClass += ' playing';
        const step = State.currentStep + 1;
        const total = State.recordedActions.length;
        statusText = `Lecture ${step}/${total} · Boucle ${State.currentLoop}/${State.loopCount}`;
        statusIcon = '🟢';
      }

      return `
        <div class="${stripClass}">
          <span class="status-icon">${statusIcon}</span> ${statusText}
        </div>
      `;
    },

    renderTabs() {
      const tabs = [
        { id: 'record', label: 'Enreg.' },
        { id: 'edit', label: 'Éditer' },
        { id: 'conditions', label: 'Cond.' },
        { id: 'audit', label: 'Audit' },
        { id: 'stats', label: 'Stats' },
        { id: 'save', label: 'Sauv.' },
        { id: 'settings', label: 'Régl.' },
        { id: 'help', label: 'Aide' }
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
        case 'edit': return this.renderEditTab();
        case 'conditions': return this.renderConditionsTab();
        case 'audit': return this.renderAuditTab();
        case 'stats': return this.renderStatsTab();
        case 'save': return this.renderSaveTab();
        case 'settings': return this.renderSettingsTab();
        case 'help': return this.renderHelpTab();
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
              <button class="btn btn-primary tooltip-wrap" data-tip="Démarre l'enregistrement de vos clics" id="btn-record" ${State.isRecording ? 'disabled' : ''}
                style="${State.isRecording ? 'animation: ai-recording-pulse 1.5s ease-in-out infinite; background: linear-gradient(135deg, #dc3545, #ff6b6b);' : ''}">
                ${State.isRecording ? '🔴 Enregistrement...' : `⚫ Enregistrer (${State.settings.shortcuts.record})`}
              </button>
              <button class="btn btn-secondary tooltip-wrap" data-tip="Arrête l'enregistrement" id="btn-stop-record" ${!State.isRecording ? 'disabled' : ''}>
                ⏹️ Arrêter
              </button>
            </div>

            <div class="btn-group">
              <button class="btn btn-primary tooltip-wrap" data-tip="Lance la lecture des actions" id="btn-play" ${State.isPlaying || State.recordedActions.length === 0 ? 'disabled' : ''}>
                ▶️ Lire (${State.settings.shortcuts.play})
              </button>
              <button class="btn btn-secondary tooltip-wrap" data-tip="Met en pause la lecture" id="btn-pause" ${!State.isPlaying || State.isPaused ? 'disabled' : ''}>
                ⏸️ Pause (${State.settings.shortcuts.pause})
              </button>
              <button class="btn btn-secondary tooltip-wrap" data-tip="Arrête la lecture" id="btn-stop" ${!State.isPlaying ? 'disabled' : ''}>
                ⏹️ Stop (${State.settings.shortcuts.stop})
              </button>
            </div>

            ${State.isPlaying || State.isRecording ? `
              <div class="progress-bar-geek">
                <div class="progress-fill-geek ${State.isPlaying ? 'playing' : 'recording'}" style="width: ${State.isPlaying ? progress : 100}%"></div>
              </div>
              ${State.isPlaying ? `<div style="text-align: center; font-size: 13px; color: ${Config.theme.textSecondary};">
                Étape ${State.currentStep + 1} / ${State.recordedActions.length} · Boucle ${State.currentLoop} / ${State.loopCount}
              </div>` : `<div style="text-align: center; font-size: 13px; color: #ff6b6b;">
                Enregistrement... ${State.recordedActions.length} action${State.recordedActions.length !== 1 ? 's' : ''}
              </div>`}
            ` : ''}
          </div>

          <div class="card">
            <div class="card-header">Paramètres</div>

            <div class="input-group">
              <label>Vitesse (${State.speed}x)</label>
              <input type="range" id="speed" min="0.25" max="8" step="0.25" value="${State.speed}">
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
      const typeLabels = {
        visible: 'Élément visible',
        hidden: 'Élément caché',
        hasText: 'Contient le texte',
        notHasText: 'Ne contient pas le texte',
        hasColor: 'A la couleur',
        hasClass: 'A la classe CSS',
        exists: 'Élément existe',
        urlContains: 'URL contient',
        count: 'Nombre d\'éléments',
        value: 'Valeur du champ',
        checked: 'Case cochée',
        enabled: 'Élément activé'
      };

      return `
        <div class="content">
          <div class="card">
            <div class="card-header">Conditions</div>
            <div style="font-size: 12px; color: ${Config.theme.textSecondary}; margin-bottom: 12px;">
              Les conditions vérifient l'état de la page avant ou pendant l'exécution.
            </div>
            <div class="btn-group">
              <button class="btn btn-primary btn-small tooltip-wrap" data-tip="Ajouter une nouvelle condition" id="add-condition">+ Ajouter</button>
              <button class="btn btn-secondary btn-small tooltip-wrap" data-tip="Vérifie toutes les conditions maintenant" id="test-conditions">🧪 Tester toutes</button>
            </div>
          </div>

          ${State.showConditionForm ? `
            <div class="inline-form">
              <div style="font-weight: 600; margin-bottom: 12px;">Nouvelle condition</div>
              <div class="form-row">
                <div class="form-field">
                  <label>Nom (description)</label>
                  <input type="text" id="form-cond-name" placeholder="Ex: Bouton Appliquer visible">
                </div>
              </div>
              <div class="form-row">
                <div class="form-field">
                  <label>Type de vérification</label>
                  <select id="form-cond-type">
                    ${Conditions.types.map(t => `<option value="${t}">${typeLabels[t] || t}</option>`).join('')}
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-field" style="flex: 2;">
                  <label>Sélecteur CSS</label>
                  <div style="display: flex; gap: 6px;">
                    <input type="text" id="form-cond-selector" placeholder="Ex: #btn-appliquer, .rate-input" style="flex: 1;">
                    <button class="btn btn-secondary btn-small" id="pick-element-cond" title="Cliquer sur un élément de la page">🎯 Cibler</button>
                  </div>
                  ${State.pickedElement ? `<div class="picker-result">${State.pickedElement}</div>` : ''}
                </div>
              </div>
              <div class="form-row">
                <div class="form-field">
                  <label>Valeur (optionnel)</label>
                  <input type="text" id="form-cond-value" placeholder="Dépend du type choisi">
                </div>
              </div>
              <div class="form-row">
                <div class="form-field">
                  <label class="checkbox-group" style="margin: 0;">
                    <input type="checkbox" id="form-cond-preflight">
                    <span>Vérification préalable (avant exécution)</span>
                  </label>
                </div>
              </div>
              <div class="form-actions">
                <button class="btn btn-secondary btn-small" id="cancel-condition-form">Annuler</button>
                <button class="btn btn-primary btn-small" id="submit-condition-form">Ajouter</button>
              </div>
            </div>
          ` : ''}

          ${State.conditions.length === 0 && !State.showConditionForm ? `
            <div class="empty-state">
              <div class="empty-state-icon">🎯</div>
              <div>Aucune condition configurée</div>
              <div style="font-size: 12px; margin-top: 8px; color: ${Config.theme.textSecondary};">
                Les conditions permettent de vérifier que la page est prête avant d'exécuter les actions
              </div>
            </div>
          ` : `
            <div class="condition-list">
              ${State.conditions.map((condition, index) => {
                const live = Conditions.check(condition);
                return `
                  <div class="condition-item ${condition.preflight ? 'preflight' : ''}">
                    <div class="condition-header">
                      <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 16px;">${live ? '✅' : '❌'}</span>
                        <div class="condition-name">
                          ${condition.preflight ? '🔒 ' : ''}${condition.name}
                        </div>
                      </div>
                      <button class="action-btn-mini danger" data-condition-index="${index}">×</button>
                    </div>
                    <div class="condition-details">
                      ${typeLabels[condition.type] || condition.type} · <code>${condition.selector}</code>
                      ${condition.value ? ` · "${condition.value}"` : ''}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          `}
        </div>
      `;
    },

    renderEditTab() {
      const actionLabel = (action) => {
        if (action.type === 'prompt') return `📝 ${action.title || 'Saisie utilisateur'}`;
        if (action.type === 'confirm') return `❓ ${action.title || 'Confirmation'}`;
        if (action.type === 'wait') return `⏳ Attendre ${action.delay || 1000}ms`;
        if (action.type === 'navigate') return `🌐 ${action.url || ''}`;
        if (action.type === 'paste_buyer_rate') return `💵 Coller taux acheteur`;
        if (action.type === 'paste_seller_rate') return `💰 Coller taux vendeur`;
        const sel = action.fingerprint?.selector || '';
        const val = action.value ? ` = "${action.value.substring(0, 20)}"` : '';
        return `${action.eventType} → ${sel.substring(0, 30)}${val}`;
      };

      const actionTypeIcon = (action) => {
        const icons = { click: '👆', input: '⌨️', change: '🔄', keydown: '⌨️', prompt: '📝', confirm: '❓', wait: '⏳', navigate: '🌐', paste_buyer_rate: '💵', paste_seller_rate: '💰' };
        return icons[action.type] || icons[action.eventType] || '▶️';
      };

      return `
        <div class="content">
          <div class="card">
            <div class="card-header">Actions (${State.recordedActions.length})</div>
            <div class="btn-group" style="flex-wrap: wrap;">
              <button class="btn btn-primary btn-small tooltip-wrap" data-tip="Ajouter une saisie utilisateur" id="add-prompt">+ Saisie</button>
              <button class="btn btn-primary btn-small tooltip-wrap" data-tip="Ajouter une confirmation Oui/Non" id="add-confirm">+ Confirmation</button>
              <button class="btn btn-secondary btn-small tooltip-wrap" data-tip="Ajouter une pause/attente" id="add-wait">+ Attente</button>
              <button class="btn btn-secondary btn-small tooltip-wrap" data-tip="Ajouter une navigation URL" id="add-navigate">+ Navigation</button>
              <button class="btn btn-secondary btn-small tooltip-wrap" data-tip="Coller le taux acheteur dans le champ actif" id="add-paste-buyer">💵 Taux acheteur</button>
              <button class="btn btn-secondary btn-small tooltip-wrap" data-tip="Coller le taux vendeur dans le champ actif" id="add-paste-seller">💰 Taux vendeur</button>
              <button class="btn btn-danger btn-small tooltip-wrap" data-tip="Supprime toutes les actions" id="clear-actions">🗑️ Tout effacer</button>
            </div>
          </div>

          ${State.showPromptForm ? `
            <div class="inline-form">
              <div style="font-weight: 600; margin-bottom: 12px;">Nouvelle saisie utilisateur</div>
              <div class="form-row">
                <div class="form-field">
                  <label>Titre</label>
                  <input type="text" id="form-prompt-title" placeholder="Ex: Entrez le taux USD" value="Entrée requise">
                </div>
              </div>
              <div class="form-row">
                <div class="form-field">
                  <label>Message affiché</label>
                  <input type="text" id="form-prompt-msg" placeholder="Ex: Veuillez entrer le taux de change">
                </div>
              </div>
              <div class="form-row">
                <div class="form-field">
                  <label>Placeholder</label>
                  <input type="text" id="form-prompt-ph" placeholder="Ex: 1.4250">
                </div>
                <div class="form-field">
                  <label>Sélecteur cible (optionnel)</label>
                  <input type="text" id="form-prompt-sel" placeholder="Champ où injecter la valeur">
                </div>
              </div>
              <div class="form-actions">
                <button class="btn btn-secondary btn-small" id="cancel-prompt-form">Annuler</button>
                <button class="btn btn-primary btn-small" id="submit-prompt-form">Ajouter</button>
              </div>
            </div>
          ` : ''}

          ${State.showConfirmForm ? `
            <div class="inline-form">
              <div style="font-weight: 600; margin-bottom: 12px;">Nouvelle confirmation</div>
              <div class="form-row">
                <div class="form-field">
                  <label>Titre</label>
                  <input type="text" id="form-confirm-title" placeholder="Ex: Confirmer l'application" value="Confirmation">
                </div>
              </div>
              <div class="form-row">
                <div class="form-field">
                  <label>Message</label>
                  <input type="text" id="form-confirm-msg" placeholder="Ex: Voulez-vous appliquer ce taux?">
                </div>
              </div>
              <div class="form-row">
                <div class="form-field">
                  <label>Détails (optionnel)</label>
                  <input type="text" id="form-confirm-details" placeholder="Informations supplémentaires">
                </div>
              </div>
              <div class="form-actions">
                <button class="btn btn-secondary btn-small" id="cancel-confirm-form">Annuler</button>
                <button class="btn btn-primary btn-small" id="submit-confirm-form">Ajouter</button>
              </div>
            </div>
          ` : ''}

          ${State.recordedActions.length === 0 ? `
            <div class="empty-state">
              <div class="empty-state-icon">📝</div>
              <div>Aucune action enregistrée</div>
              <div style="font-size: 12px; margin-top: 8px; color: ${Config.theme.textSecondary};">
                Allez dans l'onglet "Enregistrer" et cliquez sur le bouton Enregistrer pour capturer vos actions
              </div>
            </div>
          ` : `
            <div class="action-list">
              ${State.recordedActions.map((action, index) => `
                <div class="action-item ${State.currentStep === index && State.isPlaying ? 'active' : ''} ${action.type === 'prompt' ? 'prompt' : ''} ${action.type === 'confirm' ? 'confirm' : ''}">
                  <div class="action-index">${index + 1}</div>
                  <div style="font-size: 16px;">${actionTypeIcon(action)}</div>
                  <div class="action-details" style="flex: 1; min-width: 0;">
                    <div style="font-size: 12px; color: ${Config.theme.textSecondary}; text-transform: uppercase; letter-spacing: 0.5px;">${action.type === 'action' ? action.eventType : action.type}</div>
                    <div style="font-size: 13px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                      ${State.editingActionIndex === index ? `
                        <input class="inline-edit" type="text" data-edit-index="${index}" value="${(action.value || action.title || '').replace(/"/g, '&quot;')}">
                      ` : actionLabel(action)}
                    </div>
                  </div>
                  <div class="action-btns">
                    ${index > 0 ? `<button class="action-btn-mini tooltip-wrap" data-tip="Monter" data-move-up="${index}">↑</button>` : ''}
                    ${index < State.recordedActions.length - 1 ? `<button class="action-btn-mini tooltip-wrap" data-tip="Descendre" data-move-down="${index}">↓</button>` : ''}
                    <button class="action-btn-mini tooltip-wrap" data-tip="Dupliquer" data-duplicate="${index}">⧉</button>
                    <button class="action-btn-mini tooltip-wrap" data-tip="Modifier" data-edit-action="${index}">✎</button>
                    <button class="action-btn-mini danger tooltip-wrap" data-tip="Supprimer" data-action-index="${index}">×</button>
                  </div>
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
      const estimatedTime = totalActions * (State.settings.delayBetweenActions / State.speed) / 1000;
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

    renderSettingsTab() {
      const shortcutNames = {
        record: 'Enregistrer / Arrêter',
        play: 'Lancer la lecture',
        stop: 'Arrêter tout',
        pause: 'Pause / Reprendre'
      };

      return `
        <div class="content">
          <div class="card">
            <div class="card-header">Raccourcis clavier</div>
            <div style="font-size: 12px; color: ${Config.theme.textSecondary}; margin-bottom: 12px;">
              Cliquez sur une touche pour la modifier, puis appuyez sur la nouvelle touche souhaitée.
            </div>
            ${Object.entries(State.settings.shortcuts).map(([key, value]) => `
              <div class="setting-row">
                <div>
                  <div class="setting-label">${shortcutNames[key]}</div>
                </div>
                <span class="shortcut-key ${State.capturingShortcut === key ? 'capturing' : ''}" data-capture-shortcut="${key}">
                  ${State.capturingShortcut === key ? '...' : value}
                </span>
              </div>
            `).join('')}
          </div>

          <div class="card">
            <div class="card-header">Délais</div>
            <div class="input-group">
              <label>Délai entre actions (ms)</label>
              <input type="number" id="setting-delay-actions" min="100" max="10000" step="100" value="${State.settings.delayBetweenActions}">
            </div>
            <div class="input-group">
              <label>Délai entre boucles (ms)</label>
              <input type="number" id="setting-delay-loops" min="500" max="30000" step="500" value="${State.settings.delayBetweenLoops}">
            </div>
          </div>

          <div class="card">
            <div class="card-header">Préférences</div>

            <div class="setting-row">
              <div>
                <div class="setting-label">Sauvegarde automatique</div>
                <div class="setting-desc">Sauvegarde les actions après chaque modification</div>
              </div>
              <label class="toggle">
                <input type="checkbox" id="setting-autosave" ${State.settings.autoSave ? 'checked' : ''}>
                <span class="toggle-slider"></span>
              </label>
            </div>

            <div class="setting-row">
              <div>
                <div class="setting-label">Infobulles</div>
                <div class="setting-desc">Affiche des descriptions au survol des boutons</div>
              </div>
              <label class="toggle">
                <input type="checkbox" id="setting-tooltips" ${State.settings.showTooltips ? 'checked' : ''}>
                <span class="toggle-slider"></span>
              </label>
            </div>

            <div class="setting-row">
              <div>
                <div class="setting-label">Confirmer avant suppression</div>
                <div class="setting-desc">Demande confirmation avant de supprimer des actions</div>
              </div>
              <label class="toggle">
                <input type="checkbox" id="setting-confirm-delete" ${State.settings.confirmBeforeDelete ? 'checked' : ''}>
                <span class="toggle-slider"></span>
              </label>
            </div>
          </div>

          <div class="card">
            <div class="card-header">Réinitialiser</div>
            <button class="btn btn-secondary btn-small" id="reset-settings">Restaurer les valeurs par défaut</button>
          </div>
        </div>
      `;
    },

    renderHelpTab() {
      return `
        <div class="content">
          <div class="help-section">
            <div class="help-title">Guide rapide</div>
            <div class="help-step">
              <div class="help-step-num">1</div>
              <div class="help-step-text">
                <strong>Enregistrez</strong> vos actions en cliquant sur <strong>Enregistrer</strong> ou avec <span class="help-kbd">${State.settings.shortcuts.record}</span>.
                Effectuez vos clics et saisies sur la page, puis arrêtez l'enregistrement.
              </div>
            </div>
            <div class="help-step">
              <div class="help-step-num">2</div>
              <div class="help-step-text">
                <strong>Éditez</strong> vos actions dans l'onglet "Éditer": réorganisez (↑↓), dupliquez (⧉),
                modifiez (✎), supprimez (×), ou ajoutez des pauses et confirmations.
              </div>
            </div>
            <div class="help-step">
              <div class="help-step-num">3</div>
              <div class="help-step-text">
                <strong>Testez</strong> en mode simulation (case à cocher "Mode simulation") pour voir le déroulement
                sans modifier la page.
              </div>
            </div>
            <div class="help-step">
              <div class="help-step-num">4</div>
              <div class="help-step-text">
                <strong>Lancez</strong> la lecture avec <span class="help-kbd">${State.settings.shortcuts.play}</span>.
                Ajustez la vitesse et le nombre de boucles selon vos besoins.
              </div>
            </div>
            <div class="help-step">
              <div class="help-step-num">5</div>
              <div class="help-step-text">
                <strong>Sauvegardez</strong> dans l'onglet "Sauvegarder" pour réutiliser vos automatisations.
                Exportez en JSON pour les partager.
              </div>
            </div>
          </div>

          <div class="help-section">
            <div class="help-title">Raccourcis clavier actuels</div>
            <div class="card" style="margin-bottom: 0;">
              <div class="setting-row">
                <span>Enregistrer / Arrêter</span>
                <span class="help-kbd">${State.settings.shortcuts.record}</span>
              </div>
              <div class="setting-row">
                <span>Lancer la lecture</span>
                <span class="help-kbd">${State.settings.shortcuts.play}</span>
              </div>
              <div class="setting-row">
                <span>Arrêter</span>
                <span class="help-kbd">${State.settings.shortcuts.stop}</span>
              </div>
              <div class="setting-row">
                <span>Pause / Reprendre</span>
                <span class="help-kbd">${State.settings.shortcuts.pause}</span>
              </div>
            </div>
            <div style="font-size: 12px; color: ${Config.theme.textSecondary}; margin-top: 8px;">
              Modifiables dans l'onglet "Réglages"
            </div>
          </div>

          <div class="help-section">
            <div class="help-title">Types d'actions</div>
            <div class="card" style="margin-bottom: 0;">
              <div class="setting-row">
                <span>👆 Clic</span>
                <span style="font-size: 12px; color: ${Config.theme.textSecondary};">Clic sur un élément de la page</span>
              </div>
              <div class="setting-row">
                <span>⌨️ Saisie</span>
                <span style="font-size: 12px; color: ${Config.theme.textSecondary};">Entrer du texte dans un champ</span>
              </div>
              <div class="setting-row">
                <span>📝 Prompt</span>
                <span style="font-size: 12px; color: ${Config.theme.textSecondary};">Demande une saisie à l'utilisateur</span>
              </div>
              <div class="setting-row">
                <span>❓ Confirmation</span>
                <span style="font-size: 12px; color: ${Config.theme.textSecondary};">Question Oui/Non</span>
              </div>
              <div class="setting-row">
                <span>⏳ Attente</span>
                <span style="font-size: 12px; color: ${Config.theme.textSecondary};">Pause avant l'action suivante</span>
              </div>
              <div class="setting-row">
                <span>🌐 Navigation</span>
                <span style="font-size: 12px; color: ${Config.theme.textSecondary};">Aller à une URL</span>
              </div>
            </div>
          </div>

          <div style="text-align: center; padding: 16px; font-size: 12px; color: ${Config.theme.textSecondary};">
            AutoClicUS v${Config.version} · Propulsé par JSLAI
          </div>
        </div>
      `;
    },

    attachEventListeners() {
      const root = State.shadowRoot;

      // P2: Delegated click handler for tabs, action rows, condition rows
      root.addEventListener('click', (e) => {
        const t = e.target;

        // Tab clicks
        const tab = t.closest('.tab');
        if (tab && tab.dataset.tab) {
          State.currentTab = tab.dataset.tab;
          this.render();
          return;
        }

        // Action delete
        const delBtn = t.closest('[data-action-index]');
        if (delBtn) {
          const i = parseInt(delBtn.dataset.actionIndex);
          if (State.settings.confirmBeforeDelete && !confirm('Supprimer cette action?')) return;
          State.recordedActions.splice(i, 1);
          State.editingActionIndex = null;
          this.render();
          return;
        }

        // Action move up
        const upBtn = t.closest('[data-move-up]');
        if (upBtn) {
          const i = parseInt(upBtn.dataset.moveUp);
          if (i > 0) {
            [State.recordedActions[i - 1], State.recordedActions[i]] = [State.recordedActions[i], State.recordedActions[i - 1]];
            this.render();
          }
          return;
        }

        // Action move down
        const downBtn = t.closest('[data-move-down]');
        if (downBtn) {
          const i = parseInt(downBtn.dataset.moveDown);
          if (i < State.recordedActions.length - 1) {
            [State.recordedActions[i], State.recordedActions[i + 1]] = [State.recordedActions[i + 1], State.recordedActions[i]];
            this.render();
          }
          return;
        }

        // Action duplicate
        const dupBtn = t.closest('[data-duplicate]');
        if (dupBtn) {
          const i = parseInt(dupBtn.dataset.duplicate);
          const clone = JSON.parse(JSON.stringify(State.recordedActions[i]));
          clone.id = Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
          State.recordedActions.splice(i + 1, 0, clone);
          this.render();
          this.flash('success', 'Action dupliquée');
          return;
        }

        // Action edit toggle
        const editBtn = t.closest('[data-edit-action]');
        if (editBtn) {
          const i = parseInt(editBtn.dataset.editAction);
          State.editingActionIndex = State.editingActionIndex === i ? null : i;
          this.render();
          return;
        }

        // Condition delete
        const condBtn = t.closest('[data-condition-index]');
        if (condBtn) {
          const i = parseInt(condBtn.dataset.conditionIndex);
          if (State.settings.confirmBeforeDelete && !confirm('Supprimer cette condition?')) return;
          State.conditions.splice(i, 1);
          this.render();
          return;
        }

        // Shortcut capture
        const shortcutBtn = t.closest('[data-capture-shortcut]');
        if (shortcutBtn) {
          const key = shortcutBtn.dataset.captureShortcut;
          State.capturingShortcut = State.capturingShortcut === key ? null : key;
          this.render();
          return;
        }
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

      // Rate bar inputs
      const rateBuyerInput = root.querySelector('#rate-buyer');
      const rateSellerInput = root.querySelector('#rate-seller');
      const countdownTimeInput = root.querySelector('#countdown-time');

      if (rateBuyerInput) rateBuyerInput.addEventListener('input', (e) => { State.tauxAcheteur = e.target.value; });
      if (rateSellerInput) rateSellerInput.addEventListener('input', (e) => { State.tauxVendeur = e.target.value; });
      if (countdownTimeInput) {
        countdownTimeInput.addEventListener('change', (e) => {
          const val = e.target.value;
          if (!val) {
            State.countdownEnd = null;
            this.render();
            return;
          }
          const [h, m] = val.split(':').map(Number);
          const target = new Date();
          target.setHours(h, m, 0, 0);
          if (target.getTime() <= Date.now()) target.setDate(target.getDate() + 1);
          State.countdownEnd = target.getTime();
          this.render();
        });
      }
      if (dryRunCheckbox) dryRunCheckbox.addEventListener('change', (e) => { State.dryRun = e.target.checked; });

      // Conditions tab — inline form
      const btnAddCondition = root.querySelector('#add-condition');
      const btnTestConditions = root.querySelector('#test-conditions');

      if (btnAddCondition) {
        btnAddCondition.addEventListener('click', () => {
          State.showConditionForm = !State.showConditionForm;
          State.pickedElement = null;
          this.render();
        });
      }

      if (btnTestConditions) {
        btnTestConditions.addEventListener('click', () => {
          this.render(); // Re-render shows live ✅/❌ status on each condition
          this.flash('info', 'Conditions testées — résultats affichés');
        });
      }

      // Condition form actions
      const btnSubmitCond = root.querySelector('#submit-condition-form');
      const btnCancelCond = root.querySelector('#cancel-condition-form');
      const btnPickElement = root.querySelector('#pick-element-cond');

      if (btnSubmitCond) {
        btnSubmitCond.addEventListener('click', () => {
          const name = root.querySelector('#form-cond-name')?.value;
          const type = root.querySelector('#form-cond-type')?.value;
          const selector = root.querySelector('#form-cond-selector')?.value || State.pickedElement;
          const value = root.querySelector('#form-cond-value')?.value || '';
          const preflight = root.querySelector('#form-cond-preflight')?.checked || false;

          if (!name || !selector) {
            this.flash('error', 'Nom et sélecteur requis');
            return;
          }

          State.conditions.push({ name, type, selector, value, preflight });
          State.showConditionForm = false;
          State.pickedElement = null;
          this.render();
          this.flash('success', 'Condition ajoutée');
        });
      }

      if (btnCancelCond) {
        btnCancelCond.addEventListener('click', () => {
          State.showConditionForm = false;
          State.pickedElement = null;
          this.render();
        });
      }

      if (btnPickElement) {
        btnPickElement.addEventListener('click', () => {
          this.startElementPicker((selector) => {
            State.pickedElement = selector;
            const input = root.querySelector('#form-cond-selector');
            if (input) input.value = selector;
            this.render();
          });
        });
      }

      // P2: Condition delete handled by delegated handler above

      // Edit tab — inline forms
      const btnAddPrompt = root.querySelector('#add-prompt');
      const btnAddConfirm = root.querySelector('#add-confirm');
      const btnAddWait = root.querySelector('#add-wait');
      const btnAddNavigate = root.querySelector('#add-navigate');
      const btnClearActions = root.querySelector('#clear-actions');

      if (btnAddPrompt) {
        btnAddPrompt.addEventListener('click', () => {
          State.showPromptForm = !State.showPromptForm;
          State.showConfirmForm = false;
          this.render();
        });
      }

      if (btnAddConfirm) {
        btnAddConfirm.addEventListener('click', () => {
          State.showConfirmForm = !State.showConfirmForm;
          State.showPromptForm = false;
          this.render();
        });
      }

      if (btnAddWait) {
        btnAddWait.addEventListener('click', () => {
          State.recordedActions.push({
            id: Date.now().toString(36),
            type: 'wait',
            delay: State.settings.delayBetweenActions
          });
          this.render();
          this.flash('success', 'Attente ajoutée');
        });
      }

      if (btnAddNavigate) {
        btnAddNavigate.addEventListener('click', () => {
          const url = prompt('URL de destination:');
          if (!url) return;
          State.recordedActions.push({
            id: Date.now().toString(36),
            type: 'navigate',
            url: url
          });
          this.render();
          this.flash('success', 'Navigation ajoutée');
        });
      }

      const btnPasteBuyer = root.querySelector('#add-paste-buyer');
      const btnPasteSeller = root.querySelector('#add-paste-seller');

      if (btnPasteBuyer) {
        btnPasteBuyer.addEventListener('click', () => {
          State.recordedActions.push({ id: Date.now().toString(36), type: 'paste_buyer_rate' });
          this.render();
          this.flash('success', 'Coller taux acheteur ajouté');
        });
      }

      if (btnPasteSeller) {
        btnPasteSeller.addEventListener('click', () => {
          State.recordedActions.push({ id: Date.now().toString(36), type: 'paste_seller_rate' });
          this.render();
          this.flash('success', 'Coller taux vendeur ajouté');
        });
      }

      // Prompt form actions
      const btnSubmitPrompt = root.querySelector('#submit-prompt-form');
      const btnCancelPrompt = root.querySelector('#cancel-prompt-form');

      if (btnSubmitPrompt) {
        btnSubmitPrompt.addEventListener('click', () => {
          State.recordedActions.push({
            id: Date.now().toString(36),
            type: 'prompt',
            title: root.querySelector('#form-prompt-title')?.value || 'Entrée requise',
            message: root.querySelector('#form-prompt-msg')?.value || '',
            placeholder: root.querySelector('#form-prompt-ph')?.value || '',
            targetSelector: root.querySelector('#form-prompt-sel')?.value || '',
            required: true
          });
          State.showPromptForm = false;
          this.render();
          this.flash('success', 'Saisie ajoutée');
        });
      }

      if (btnCancelPrompt) {
        btnCancelPrompt.addEventListener('click', () => {
          State.showPromptForm = false;
          this.render();
        });
      }

      // Confirm form actions
      const btnSubmitConfirm = root.querySelector('#submit-confirm-form');
      const btnCancelConfirm = root.querySelector('#cancel-confirm-form');

      if (btnSubmitConfirm) {
        btnSubmitConfirm.addEventListener('click', () => {
          State.recordedActions.push({
            id: Date.now().toString(36),
            type: 'confirm',
            title: root.querySelector('#form-confirm-title')?.value || 'Confirmation',
            message: root.querySelector('#form-confirm-msg')?.value || '',
            details: root.querySelector('#form-confirm-details')?.value || '',
            okLabel: 'Oui',
            cancelLabel: 'Non'
          });
          State.showConfirmForm = false;
          this.render();
          this.flash('success', 'Confirmation ajoutée');
        });
      }

      if (btnCancelConfirm) {
        btnCancelConfirm.addEventListener('click', () => {
          State.showConfirmForm = false;
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

      // P2: Action row buttons (delete, move, duplicate, edit) handled by delegated handler above

      root.querySelectorAll('[data-edit-index]').forEach(input => {
        input.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            const i = parseInt(input.dataset.editIndex);
            const action = State.recordedActions[i];
            if (action.type === 'prompt' || action.type === 'confirm') {
              action.title = input.value;
            } else if (action.type === 'wait') {
              action.delay = parseInt(input.value) || 1000;
            } else {
              action.value = input.value;
            }
            State.editingActionIndex = null;
            this.render();
          }
          if (e.key === 'Escape') {
            State.editingActionIndex = null;
            this.render();
          }
        });
        input.focus();
      });

      // Settings tab
      // P2: Shortcut capture handled by delegated handler above

      const delayActions = root.querySelector('#setting-delay-actions');
      const delayLoops = root.querySelector('#setting-delay-loops');
      const autoSave = root.querySelector('#setting-autosave');
      const tooltips = root.querySelector('#setting-tooltips');
      const confirmDelete = root.querySelector('#setting-confirm-delete');
      const resetSettings = root.querySelector('#reset-settings');

      if (delayActions) delayActions.addEventListener('input', (e) => { State.settings.delayBetweenActions = parseInt(e.target.value); });
      if (delayLoops) delayLoops.addEventListener('input', (e) => { State.settings.delayBetweenLoops = parseInt(e.target.value); });
      if (autoSave) autoSave.addEventListener('change', (e) => { State.settings.autoSave = e.target.checked; });
      if (tooltips) tooltips.addEventListener('change', (e) => { State.settings.showTooltips = e.target.checked; });
      if (confirmDelete) confirmDelete.addEventListener('change', (e) => { State.settings.confirmBeforeDelete = e.target.checked; });
      if (resetSettings) {
        resetSettings.addEventListener('click', () => {
          State.settings = {
            shortcuts: { record: 'F6', play: 'F7', stop: 'F8', pause: 'F9' },
            delayBetweenActions: 1000,
            delayBetweenLoops: 2000,
            autoSave: true,
            showTooltips: true,
            confirmBeforeDelete: true
          };
          this.render();
          this.flash('success', 'Réglages réinitialisés');
        });
      }

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
            Storage.setItem(Config.storage.actions, JSON.stringify(State.recordedActions));
            Storage.setItem(Config.storage.conditions, JSON.stringify(State.conditions));
            Storage.setItem(Config.storage.config, JSON.stringify({
              speed: State.speed,
              loopCount: State.loopCount,
              timeLimit: State.timeLimit,
              settings: State.settings
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
            const actions = Storage.getItem(Config.storage.actions);
            const conditions = Storage.getItem(Config.storage.conditions);
            const config = Storage.getItem(Config.storage.config);

            if (actions) State.recordedActions = JSON.parse(actions);
            if (conditions) State.conditions = JSON.parse(conditions);
            if (config) {
              const cfg = JSON.parse(config);
              State.speed = cfg.speed || 1;
              State.loopCount = cfg.loopCount || 1;
              State.timeLimit = cfg.timeLimit || null;
              if (cfg.settings) Object.assign(State.settings, cfg.settings);
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
              timeLimit: State.timeLimit,
              settings: State.settings
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
                if (data.config.settings) Object.assign(State.settings, data.config.settings);
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
            Storage.removeItem(Config.storage.actions);
            Storage.removeItem(Config.storage.conditions);
            Storage.removeItem(Config.storage.config);
            this.flash('success', 'Réinitialisé');
            this.render();
          }
        });
      }
    },

    attachResizeHandle() {
      const root = State.shadowRoot;
      const handle = root.querySelector('#resize-handle');
      const ui = root.querySelector('#autoclicus-ui');
      if (!handle || !ui) return;

      handle.addEventListener('mousedown', (e) => {
        e.preventDefault();
        const startX = e.clientX;
        const startW = ui.offsetWidth;

        const onMove = (ev) => {
          const delta = startX - ev.clientX; // drag left = wider (panel is right-aligned)
          const newW = Math.max(380, Math.min(window.innerWidth * 0.9, startW + delta));
          ui.style.width = newW + 'px';
        };

        const onUp = () => {
          document.removeEventListener('mousemove', onMove);
          document.removeEventListener('mouseup', onUp);
        };

        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
      });
    },

    attachKeyboardShortcuts() {
      document.addEventListener('keydown', (e) => {
        // Shortcut capture mode for settings
        if (State.capturingShortcut) {
          e.preventDefault();
          State.settings.shortcuts[State.capturingShortcut] = e.key;
          State.capturingShortcut = null;
          this.render();
          this.flash('success', `Raccourci mis à jour: ${e.key}`);
          return;
        }

        // Ignore if typing in input
        if (e.target.matches('input, textarea, select')) return;

        const key = e.key;
        const shortcuts = State.settings.shortcuts;

        if (key === shortcuts.record) {
          e.preventDefault();
          State.isRecording ? Recorder.stop() : Recorder.start();
        }

        if (key === shortcuts.play) {
          e.preventDefault();
          if (!State.isPlaying && State.recordedActions.length > 0) Player.start();
        }

        if (key === shortcuts.stop) {
          e.preventDefault();
          if (State.isPlaying) Player.stop();
          if (State.isRecording) Recorder.stop();
        }

        if (key === shortcuts.pause) {
          e.preventDefault();
          if (State.isPlaying) {
            State.isPaused ? Player.resume() : Player.pause();
          }
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
        padding: 12px 24px; border-radius: 10px; z-index: 1000000;
        font-weight: 500; font-size: 14px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        box-shadow: 0 4px 20px ${Config.theme.shadow}, 0 0 15px ${c.bg}40;
        background: ${c.bg}; color: ${c.fg};
        animation: autoclicus-flash 0.3s ease-out;
        backdrop-filter: blur(8px);
        border: 1px solid ${c.bg}60;
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

    startElementPicker(callback) {
      this.flash('info', 'Cliquez sur un élément de la page pour le sélectionner');

      let highlight = null;
      const overlay = document.createElement('div');
      overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:999990;cursor:crosshair;';

      const onMove = (e) => {
        if (highlight) highlight.remove();
        const el = document.elementFromPoint(e.clientX, e.clientY);
        if (el && el !== overlay && !el.closest('#autoclicus-container')) {
          const rect = el.getBoundingClientRect();
          highlight = document.createElement('div');
          highlight.style.cssText = `position:fixed;top:${rect.top}px;left:${rect.left}px;width:${rect.width}px;height:${rect.height}px;border:2px solid ${Config.theme.primary};background:rgba(0,135,78,0.1);pointer-events:none;z-index:999991;border-radius:4px;`;
          document.body.appendChild(highlight);
        }
      };

      const onClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const el = document.elementFromPoint(e.clientX, e.clientY);
        if (highlight) highlight.remove();
        overlay.remove();
        document.removeEventListener('mousemove', onMove, true);

        if (el && el !== overlay) {
          const selector = Fingerprint.getSelector(el);
          callback(selector);
          this.flash('success', `Élément sélectionné: ${selector.substring(0, 50)}`);
        }
      };

      overlay.addEventListener('click', onClick, { once: true });
      document.addEventListener('mousemove', onMove, true);
      document.body.appendChild(overlay);

      // Cancel on Escape
      const onEsc = (e) => {
        if (e.key === 'Escape') {
          if (highlight) highlight.remove();
          overlay.remove();
          document.removeEventListener('mousemove', onMove, true);
          document.removeEventListener('keydown', onEsc);
          this.flash('info', 'Sélection annulée');
        }
      };
      document.addEventListener('keydown', onEsc);
    },

    highlightElement(element, dryRun = false) {
      const rect = element.getBoundingClientRect();

      const highlight = document.createElement('div');
      highlight.style.cssText = `
        position: fixed;
        top: ${rect.top - 2}px;
        left: ${rect.left - 2}px;
        width: ${rect.width + 4}px;
        height: ${rect.height + 4}px;
        border: 2px solid ${dryRun ? Config.theme.warning : Config.theme.primary};
        background: ${dryRun ? 'rgba(255, 193, 7, 0.08)' : 'rgba(0, 135, 78, 0.08)'};
        box-shadow: 0 0 12px ${dryRun ? 'rgba(255, 193, 7, 0.4)' : 'rgba(0, 135, 78, 0.4)'}, inset 0 0 8px ${dryRun ? 'rgba(255, 193, 7, 0.1)' : 'rgba(0, 135, 78, 0.1)'};
        pointer-events: none;
        z-index: 999998;
        border-radius: 6px;
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

  // P0: Duplicate-instance guard — safe to paste snippet multiple times
  const existingInstance = document.getElementById('autoclicus-container');
  if (existingInstance) {
    existingInstance.remove();
    console.log('%c♻️ AutoClicUS: Instance précédente supprimée', 'color: #ffc107;');
  }

  try {
    // Load saved data
    try {
      const savedActions = Storage.getItem(Config.storage.actions);
      const savedConditions = Storage.getItem(Config.storage.conditions);
      const savedConfig = Storage.getItem(Config.storage.config);

      if (savedActions) State.recordedActions = JSON.parse(savedActions);
      if (savedConditions) State.conditions = JSON.parse(savedConditions);
      if (savedConfig) {
        const cfg = JSON.parse(savedConfig);
        State.speed = cfg.speed || 1;
        State.loopCount = cfg.loopCount || 1;
        State.timeLimit = cfg.timeLimit || null;
        if (cfg.settings) Object.assign(State.settings, cfg.settings);
      }
    } catch (e) {
      console.warn('Failed to load saved data:', e);
    }

    // Initialize UI
    UI.init();

    // Update clock + countdown every second
    setInterval(() => {
      const clock = State.shadowRoot?.querySelector('.header-clock');
      if (clock) {
        const now = new Date();
        const time = String(now.getHours()).padStart(2,'0') + ':' + String(now.getMinutes()).padStart(2,'0') + ':' + String(now.getSeconds()).padStart(2,'0');
        clock.textContent = time;
      }
      // Update countdown in header
      if (State.countdownEnd) {
        const cd = State.shadowRoot?.querySelector('.header-countdown');
        if (cd) {
          const remaining = State.countdownEnd - Date.now();
          if (remaining > 0) {
            const hrs = Math.floor(remaining / 3600000);
            const mins = Math.floor((remaining % 3600000) / 60000);
            const secs = Math.floor((remaining % 60000) / 1000);
            const display = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
            cd.textContent = `⏱ ${display}`;
            cd.classList.remove('expired');
          } else {
            cd.textContent = '⏱ 00:00:00 TERMINÉ';
            cd.classList.add('expired');
          }
        }
      }
    }, 1000);

    console.log(`%c✨ AutoClicUS v${Config.version} - Propulsé par JSLAI`, 'color: #00874e; font-size: 14px; font-weight: bold;');
    console.log(`%c${State.settings.shortcuts.record}=Enregistrer | ${State.settings.shortcuts.play}=Lire | ${State.settings.shortcuts.stop}=Stop | ${State.settings.shortcuts.pause}=Pause`, 'color: #6c757d; font-size: 12px;');
    if (Storage.isMemoryMode) {
      console.log('%c⚠️ localStorage indisponible — stockage en mémoire uniquement', 'color: #ffc107; font-size: 12px;');
    }

  } catch (e) {
    console.error('AutoClicUS initialization error:', e);
    alert('Erreur d\'initialisation AutoClicUS. Consultez la console pour plus de détails.');
  }

})();
