(function () {
  'use strict';

  const UI = {
    zh: {
      cpNamePlaceholder: 'cp名称',
      home: '主页',
      search: '搜索',
      settings: '设置',
      settingsTitle: '设置',
      language: '语言',
      languageZh: '中文',
      languageEn: 'English',
      editorDone: '完成',
      editorModeImageText: '图文',
      addImage: '添加',
      quotePlaceholder: '在这里输入台词',
      quoteFrom: '这句话来自——',
      charA: '角色A',
      charB: '角色B',
      writePlaceholder: '开始自由书写...使用 #标签# 来标记关键词',
    },
    en: {
      cpNamePlaceholder: 'CP name',
      home: 'Home',
      search: 'Search',
      settings: 'Settings',
      settingsTitle: 'Settings',
      language: 'Language',
      languageZh: '中文',
      languageEn: 'English',
      editorDone: 'Done',
      editorModeImageText: 'Image + text',
      addImage: 'Add',
      quotePlaceholder: 'Enter quote here',
      quoteFrom: 'This line is from —',
      charA: 'Character A',
      charB: 'Character B',
      writePlaceholder: 'Write freely… use #tag# for keywords',
    },
  };

  const SAMPLE_CARDS = [
    {
      id: '1',
      quote: '我忘记不了他忧郁的眼神',
      tags: ['那双眼神', '好嗑', '暧昧期', '恋爱'],
      imageVariant: 0,
    },
    {
      id: '2',
      quote: '在人群里他只看向她，那一秒像全世界都静音了。',
      tags: ['名场面', '眼神', '双向', '心动', '宿命感'],
      imageVariant: 1,
    },
    {
      id: '3',
      quote: '“等我。”他低声说。她没有回答，却把指尖扣得更紧。',
      tags: ['等待', '克制', '刀里带糖'],
      imageVariant: 2,
    },
  ];

  let locale = 'zh';
  let cpName = UI.zh.cpNamePlaceholder;
  /** @type {typeof SAMPLE_CARDS} */
  let cards = SAMPLE_CARDS.map((c) => ({ ...c }));
  let editorImageSlots = 0;
  /** @type {'A' | 'B' | null} */
  let editorChar = null;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  function t(key) {
    return UI[locale][key] ?? key;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function extractTags(text) {
    const regex = /#([^#\s]+)#/g;
    const tags = new Set();
    let m;
    while ((m = regex.exec(text)) !== null) {
      tags.add(m[1]);
    }
    return [...tags];
  }

  function buildHighlightHtml(text) {
    if (!text) return '';
    const parts = [];
    let last = 0;
    const regex = /#([^#\s]+)#/g;
    let m;
    while ((m = regex.exec(text)) !== null) {
      if (m.index > last) {
        parts.push(escapeHtml(text.slice(last, m.index)));
      }
      parts.push(
        `<span class="hl-tag">#${escapeHtml(m[1])}#</span>`
      );
      last = m.index + m[0].length;
    }
    if (last < text.length) {
      parts.push(escapeHtml(text.slice(last)));
    }
    return parts.join('');
  }

  function applyI18n() {
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
    $$('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (key) el.textContent = t(key);
    });
    $$('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key && 'placeholder' in el) el.placeholder = t(key);
    });
    $$('.lang-toggle__btn').forEach((btn) => {
      btn.classList.toggle('is-active', btn.getAttribute('data-locale') === locale);
    });
    updateCpTitleDisplay();
  }

  function updateCpTitleDisplay() {
    const btn = $('#cp-title-btn');
    if (!btn) return;
    btn.textContent = cpName.trim() || t('cpNamePlaceholder');
  }

  function renderFeed() {
    const feed = $('#feed');
    if (!feed) return;
    feed.innerHTML = '';
    cards.forEach((card) => {
      const v = card.imageVariant ?? 0;
      const article = document.createElement('article');
      article.className = 'card';
      article.innerHTML = `
        <div class="card__image card__image--${v % 3}" role="img" aria-label="配图占位"></div>
        <div class="card__body">
          <p class="card__quote"><span class="q" aria-hidden="true">“</span>${escapeHtml(card.quote)}<span class="q" aria-hidden="true">”</span></p>
          <div class="card__tags">
            ${card.tags.map((tag) => `<span class="card__tag">#${escapeHtml(tag)}</span>`).join('')}
          </div>
        </div>
      `;
      feed.appendChild(article);
    });
  }

  function setOverlayOpen(overlayEl, open) {
    if (!overlayEl) return;
    overlayEl.classList.toggle('is-open', open);
    overlayEl.setAttribute('aria-hidden', open ? 'false' : 'true');
  }

  function resetEditor() {
    editorImageSlots = 0;
    editorChar = null;
    const quote = $('#editor-quote');
    const body = $('#editor-body');
    const slots = $('#editor-image-slots');
    const hi = $('#editor-highlight');
    const preview = $('#editor-tag-preview');
    if (quote) quote.value = '';
    if (body) {
      body.value = '';
      body.classList.remove('has-text');
      body.style.height = '';
    }
    if (hi) {
      hi.innerHTML = '';
      hi.style.minHeight = '';
      hi.style.transform = '';
    }
    if (slots) {
      slots.innerHTML = '';
      slots.hidden = true;
    }
    if (preview) {
      preview.innerHTML = '';
      preview.hidden = true;
    }
    $$('.char-btn').forEach((b) => b.classList.remove('is-selected'));
  }

  function openEditor() {
    resetEditor();
    setOverlayOpen($('#editor-overlay'), true);
    $('#editor-quote')?.focus();
  }

  function closeEditor() {
    setOverlayOpen($('#editor-overlay'), false);
  }

  function openSettings() {
    setOverlayOpen($('#settings-overlay'), true);
  }

  function closeSettings() {
    setOverlayOpen($('#settings-overlay'), false);
  }

  function syncHighlightGeometry() {
    const ta = $('#editor-body');
    const hi = $('#editor-highlight');
    if (!ta || !hi) return;
    hi.innerHTML = buildHighlightHtml(ta.value);
    ta.classList.toggle('has-text', Boolean(ta.value));
    hi.style.minHeight = `${ta.scrollHeight}px`;
    hi.style.transform = `translateY(-${ta.scrollTop}px)`;
  }

  function autosizeTextarea(ta) {
    ta.style.height = 'auto';
    ta.style.height = `${ta.scrollHeight}px`;
    syncHighlightGeometry();
  }

  function updateTagPreview() {
    const body = $('#editor-body');
    const preview = $('#editor-tag-preview');
    if (!body || !preview) return;
    const tags = extractTags(body.value);
    if (tags.length === 0) {
      preview.innerHTML = '';
      preview.hidden = true;
      return;
    }
    preview.hidden = false;
    preview.innerHTML = tags
      .map((tag) => `<span class="tag-preview__pill">#${escapeHtml(tag)}</span>`)
      .join('');
  }

  function saveEditorCard() {
    const quoteEl = $('#editor-quote');
    const bodyEl = $('#editor-body');
    const quote = quoteEl?.value.trim() ?? '';
    const body = bodyEl?.value.trim() ?? '';
    if (!quote && !body) return;

    const quoteText = quote || body.slice(0, 80);
    const tags = extractTags(bodyEl?.value ?? '');
    const variant = (editorImageSlots + quoteText.length) % 3;
    const id =
      typeof crypto !== 'undefined' && crypto.randomUUID
        ? crypto.randomUUID()
        : String(Date.now());

    cards.unshift({
      id,
      quote: quoteText,
      tags,
      imageVariant: /** @type {0|1|2} */ (variant),
    });
    renderFeed();
    closeEditor();
  }

  function bindCpName() {
    const btn = $('#cp-title-btn');
    const input = $('#cp-title-input');
    if (!btn || !input) return;

    btn.addEventListener('click', () => {
      btn.hidden = true;
      input.hidden = false;
      input.value = cpName;
      input.focus();
      input.select();
    });

    const finish = () => {
      cpName = input.value.trim() || t('cpNamePlaceholder');
      input.hidden = true;
      btn.hidden = false;
      updateCpTitleDisplay();
    };

    input.addEventListener('blur', finish);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        input.blur();
      }
    });
  }

  function bindEditor() {
    $('#fab-open-editor')?.addEventListener('click', openEditor);
    $('#editor-backdrop')?.addEventListener('click', closeEditor);
    $('#editor-done')?.addEventListener('click', saveEditorCard);

    $('#editor-add-image')?.addEventListener('click', () => {
      if (editorImageSlots >= 3) return;
      editorImageSlots += 1;
      const slots = $('#editor-image-slots');
      if (!slots) return;
      slots.hidden = false;
      const div = document.createElement('div');
      div.className = 'editor-image-slot';
      slots.appendChild(div);
    });

    $$('.char-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const c = /** @type {'A' | 'B'} */ (btn.getAttribute('data-char'));
        editorChar = editorChar === c ? null : c;
        $$('.char-btn').forEach((b) => b.classList.remove('is-selected'));
        if (editorChar) {
          $$(`.char-btn[data-char="${editorChar}"]`).forEach((b) =>
            b.classList.add('is-selected')
          );
        }
      });
    });

    const ta = $('#editor-body');
    ta?.addEventListener('input', () => {
      autosizeTextarea(ta);
      updateTagPreview();
    });
    ta?.addEventListener('scroll', () => {
      const hi = $('#editor-highlight');
      if (hi) hi.style.transform = `translateY(-${ta.scrollTop}px)`;
    });
  }

  function bindSettings() {
    $('#btn-settings')?.addEventListener('click', openSettings);
    $('#settings-backdrop')?.addEventListener('click', closeSettings);
    $$('.lang-toggle__btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const loc = btn.getAttribute('data-locale');
        if (loc !== 'zh' && loc !== 'en') return;
        locale = loc;
        applyI18n();
      });
    });
  }

  function init() {
    applyI18n();
    renderFeed();
    bindCpName();
    bindEditor();
    bindSettings();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
