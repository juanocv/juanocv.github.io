/**
 * Comportamento do site: troca de idioma e de tema.
 * Depende de TRANSLATIONS (i18n.js).
 */
(function () {
  'use strict';

  var STORAGE_LANG = 'juanocv:lang';
  var STORAGE_THEME = 'juanocv:theme';
  var DEFAULT_LANG = 'pt';

  /* Alguns navegadores bloqueiam localStorage (modo privado/cookies off). */
  function readStore(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  }
  function writeStore(key, value) {
    try { window.localStorage.setItem(key, value); } catch (e) { /* ignora */ }
  }

  /* ── Idioma ────────────────────────────────────────────────── */

  function detectLang() {
    var saved = readStore(STORAGE_LANG);
    if (saved && TRANSLATIONS[saved]) return saved;

    var preferred = navigator.languages || [navigator.language || ''];
    for (var i = 0; i < preferred.length; i++) {
      var code = String(preferred[i]).slice(0, 2).toLowerCase();
      if (TRANSLATIONS[code]) return code;
    }
    return DEFAULT_LANG;
  }

  function applyLang(lang) {
    var dict = TRANSLATIONS[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var value = dict[el.dataset.i18n];
      if (typeof value === 'string') el.textContent = value;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var value = dict[el.dataset.i18nHtml];
      if (typeof value === 'string') el.innerHTML = value;
    });

    var meta = dict._meta || {};
    document.documentElement.lang = meta.htmlLang || lang;
    if (meta.title) document.title = meta.title;
    if (meta.description) {
      var tag = document.querySelector('meta[name="description"]');
      if (tag) tag.setAttribute('content', meta.description);
    }
    if (meta.themeLabel && themeToggle) {
      themeToggle.setAttribute('aria-label', meta.themeLabel);
    }

    langButtons.forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
    });

    writeStore(STORAGE_LANG, lang);
  }

  /* ── Tema ──────────────────────────────────────────────────── */

  /* O tema já foi aplicado ao <html> pelo script inline do <head>; aqui só
     reagimos ao toggle e mantemos a cor da barra do navegador em sincronia. */
  function syncThemeColor(theme) {
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#17181a' : '#fdfdfc');
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    syncThemeColor(theme);
    writeStore(STORAGE_THEME, theme);
  }

  /* ── Inicialização ─────────────────────────────────────────── */

  var langButtons = Array.prototype.slice.call(document.querySelectorAll('.langs button'));
  var themeToggle = document.getElementById('theme-toggle');

  langButtons.forEach(function (btn) {
    btn.addEventListener('click', function () { applyLang(btn.dataset.lang); });
  });

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
    });
  }

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  syncThemeColor(document.documentElement.dataset.theme);
  applyLang(detectLang());
})();
