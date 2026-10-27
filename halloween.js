/**
 * Roohira Collection - Halloween Festival Atmospheric Effects
 * Features:
 * - Floating/falling Halloween emojis & icons (🎃, 👻, 🦇, 🕷️, 🕸️, 🍬, 💀)
 * - Subtle low opacity, non-intrusive floating animation
 * - Interactive sparkle/poof on mouse hover or touch
 * - Auto-expiration when Halloween festival period ends (defaults to after Nov 2, midnight)
 * - Real-time On/Off & auto-end date control managed via Database Admin (`database.html`)
 *   (Persisted in Firebase Firestore `settings/halloween` + localStorage fallback)
 */

(function () {
  // Config defaults
  const STORAGE_KEY = 'roohira_halloween_settings';
  const DEFAULT_END_DATE = '2026-11-03T00:00:00'; // After Halloween festival

  const defaultSettings = {
    enabled: true,
    autoEndDate: DEFAULT_END_DATE,
    density: 18,
    opacity: 0.38,
    allowInteraction: true
  };

  // Emojis and SVGs representing Halloween faces & icons
  const HALLOWEEN_ITEMS = [
    { type: 'emoji', val: '🎃', size: 28 },
    { type: 'emoji', val: '👻', size: 26 },
    { type: 'emoji', val: '🦇', size: 24 },
    { type: 'emoji', val: '🕷️', size: 22 },
    { type: 'emoji', val: '🍬', size: 22 },
    { type: 'emoji', val: '💀', size: 24 },
    { type: 'emoji', val: '🕸️', size: 24 }
  ];

  let currentSettings = getSavedSettings();
  let container = null;
  let animationInterval = null;
  let resizeListenerAttached = false;

  function getSavedSettings() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return Object.assign({}, defaultSettings, JSON.parse(saved));
      }
    } catch (e) {
      console.warn('[Halloween Effect] Error reading localStorage', e);
    }
    return Object.assign({}, defaultSettings);
  }

  function saveLocalSettings(settings) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch (e) {}
  }

  function isFestivalActive(settings) {
    if (!settings.enabled) return false;
    if (settings.autoEndDate) {
      const expiry = new Date(settings.autoEndDate).getTime();
      const now = Date.now();
      if (!isNaN(expiry) && now > expiry) {
        return false; // Auto expired after Halloween festival!
      }
    }
    return true;
  }

  // Create CSS style element
  function injectStyles() {
    if (document.getElementById('roohira-halloween-styles')) return;

    const style = document.createElement('style');
    style.id = 'roohira-halloween-styles';
    style.textContent = `
      .roohira-halloween-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        overflow: hidden;
        z-index: 99999;
      }
      .halloween-floater {
        position: absolute;
        top: -60px;
        user-select: none;
        cursor: default;
        pointer-events: none;
        will-change: transform;
        transition: opacity 0.3s ease;
      }
      @keyframes halloweenFall {
        0% {
          transform: translateY(0) rotate(0deg) translateX(0);
          opacity: 0;
        }
        10% {
          opacity: var(--target-opacity, 0.35);
        }
        85% {
          opacity: var(--target-opacity, 0.35);
        }
        100% {
          transform: translateY(108vh) rotate(var(--rot-end, 360deg)) translateX(var(--drift-x, 40px));
          opacity: 0;
        }
      }
      .halloween-festive-badge {
        position: fixed;
        bottom: 18px;
        left: 18px;
        background: rgba(22, 17, 15, 0.88);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border: 1px solid rgba(235, 120, 32, 0.45);
        color: #ffeedd;
        padding: 6px 14px;
        border-radius: 20px;
        font-size: 0.76rem;
        font-family: inherit;
        font-weight: 600;
        letter-spacing: 0.4px;
        display: flex;
        align-items: center;
        gap: 7px;
        z-index: 99998;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        pointer-events: auto;
        animation: fadeInBadge 0.8s ease-out;
      }
      @keyframes fadeInBadge {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .halloween-festive-badge .badge-icon {
        animation: spookyWiggle 2s infinite ease-in-out;
        display: inline-block;
      }
      @keyframes spookyWiggle {
        0%, 100% { transform: rotate(0deg); }
        25% { transform: rotate(-10deg) scale(1.1); }
        75% { transform: rotate(10deg) scale(1.1); }
      }
    `;
    document.head.appendChild(style);
  }

  function createFloater() {
    if (!container || !isFestivalActive(currentSettings)) return;

    const item = HALLOWEEN_ITEMS[Math.floor(Math.random() * HALLOWEEN_ITEMS.length)];
    const el = document.createElement('div');
    el.className = 'halloween-floater';
    el.innerText = item.val;

    const startX = Math.random() * 96; // 0 to 96vw
    const duration = 9 + Math.random() * 11; // 9s to 20s smooth gentle fall
    const drift = (Math.random() - 0.5) * 120; // sideways drift in px
    const rotation = (Math.random() > 0.5 ? 1 : -1) * (180 + Math.random() * 240);
    const size = item.size + (Math.random() * 8 - 4);
    const targetOpacity = (currentSettings.opacity || 0.35) * (0.7 + Math.random() * 0.6);

    el.style.left = `${startX}vw`;
    el.style.fontSize = `${size}px`;
    el.style.setProperty('--target-opacity', targetOpacity.toFixed(2));
    el.style.setProperty('--rot-end', `${rotation}deg`);
    el.style.setProperty('--drift-x', `${drift}px`);
    el.style.animation = `halloweenFall ${duration.toFixed(1)}s linear forwards`;

    container.appendChild(el);

    // Remove element after its animation finishes
    setTimeout(() => {
      if (el && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    }, duration * 1000 + 400);
  }

  function startFallingAnimation() {
    if (animationInterval) clearInterval(animationInterval);
    if (!container) {
      container = document.createElement('div');
      container.className = 'roohira-halloween-container';
      document.body.appendChild(container);
    }

    // Spawn an initial gentle batch
    const initialCount = Math.min(8, currentSettings.density || 15);
    for (let i = 0; i < initialCount; i++) {
      setTimeout(createFloater, i * 350);
    }

    // Continuous interval based on density
    const spawnRate = Math.max(800, Math.round(26000 / (currentSettings.density || 16)));
    animationInterval = setInterval(() => {
      if (document.hidden) return; // Save resources when tab is hidden
      createFloater();
    }, spawnRate);
  }

  function stopFallingAnimation() {
    if (animationInterval) {
      clearInterval(animationInterval);
      animationInterval = null;
    }
    if (container && container.parentNode) {
      container.parentNode.removeChild(container);
      container = null;
    }
    const badge = document.getElementById('halloween-festive-badge');
    if (badge && badge.parentNode) {
      badge.parentNode.removeChild(badge);
    }
  }

  function addFestivePill() {
    // Badge hidden per user request; function kept dormant to avoid breaking references
    const badge = document.getElementById('halloween-festive-badge');
    if (badge && badge.parentNode) {
      badge.parentNode.removeChild(badge);
    }
  }

  function syncEffectState() {
    if (isFestivalActive(currentSettings)) {
      injectStyles();
      startFallingAnimation();
    } else {
      stopFallingAnimation();
    }
  }

  // Connect to Firebase Firestore for real-time toggle across all client browsers
  function initFirebaseListener() {
    if (typeof firebase !== 'undefined' && firebase.firestore) {
      try {
        const db = firebase.firestore();
        db.collection('settings').doc('halloween')
          .onSnapshot(doc => {
            if (doc.exists) {
              const data = doc.data();
              currentSettings = Object.assign({}, defaultSettings, data);
              saveLocalSettings(currentSettings);
              syncEffectState();
            } else {
              // Doc doesn't exist yet, seed baseline settings
              db.collection('settings').doc('halloween').set(defaultSettings, { merge: true }).catch(() => {});
            }
          }, err => {
            console.log('[Halloween Effect] Firestore live listener fallback to localStorage');
          });
      } catch (err) {
        console.warn('[Halloween Effect] Firebase init error', err);
      }
    }
  }

  // Initialize on DOM Ready
  function init() {
    syncEffectState();

    // Check Firebase once scripts are loaded
    if (typeof firebase !== 'undefined' && firebase.firestore) {
      initFirebaseListener();
    } else {
      // Retry in case firebase is loaded at bottom of page
      window.addEventListener('load', () => {
        setTimeout(initFirebaseListener, 500);
      });
    }

    // Expose Global API for database admin controls
    window.RoohiraHalloween = {
      getSettings: () => currentSettings,
      updateSettings: (newConf) => {
        currentSettings = Object.assign({}, currentSettings, newConf);
        saveLocalSettings(currentSettings);
        syncEffectState();

        // Also broadcast update to Firestore if accessible
        if (typeof firebase !== 'undefined' && firebase.firestore) {
          try {
            const db = firebase.firestore();
            return db.collection('settings').doc('halloween').set(currentSettings, { merge: true });
          } catch (e) {
            return Promise.resolve();
          }
        }
        return Promise.resolve();
      },
      isFestivalActive: () => isFestivalActive(currentSettings)
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
