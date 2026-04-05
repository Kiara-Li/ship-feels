(function () {
  'use strict';

  var STORAGE_KEY = 'kedain-data-v1';

  var TEXT = {
    zh: {
      home: '主页',
      search: '搜索',
      settings: '设置',
      fabAria: '新建',
      searchTitle: '搜索嗑点',
      searchPlaceholder: '可以同时搜索多个tag，例如 ##同事####劲敌##',
      allTags: '所有标签',
      searchResults: '搜索结果',
      listTitle: '清单',
      cancel: '取消',
      newFolderBtn: '新建清单',
      folderDone: '完成',
      annotationPh: '在这里添加备注…',
      editorHidden: '编辑嗑点',
      editorDone: '完成',
      addImage: '添加',
      addLink: '参考链接',
      addLinkPh: '粘贴含 ?t= / start= 的视频链接，可自动填时间点',
      quotePh: '在这里输入台词',
      quoteFrom: '这句话来自——',
      charA: '角色A',
      charB: '角色B',
      writePh: '开始自由书写…使用 #标签# 来标记关键词',
      settingsTitle: '设置',
      language: '语言',
      langZh: '中文',
      langEn: 'English',
      templateTitle: '模版样式',
      tpl1n: '图文',
      tpl1m: '推荐原著为动漫 / 影视作品',
      tpl2n: '文',
      tpl2m: '推荐原著为小说',
      tpl3n: '图',
      tpl3m: '推荐原著为漫画',
      tagDone: '完成',
      pickFolder: '添加到清单',
      momentsCount: '{n} 个嗑点',
      newFolderName: '新清单',
      cpDefault: '我的 CP',
      appTitle: '嗑点',
      menuAria: '打开清单',
      moreAria: '更多与排序',
      navMainAria: '主导航',
      feedAria: '嗑点列表',
      searchCloseAria: '关闭搜索',
      langGroupAria: '界面语言',
      folderNoteLabel: '🌸 我还有想说的：',
      folderNotePlaceholder: '随手记一句给未来的自己…',
      folderEmojiPickAria: '选择背景图案',
      imageTypeFull: '全屏',
      imageTypeSubtitle: '字幕',
      demoCardHint: '示范 · 可删',
      exportReadyTitle: '导出完成',
      exportShareBtn: '分享到…',
      exportDownloadBtn: '下载文件',
      exportLongPressHint: '也可长按上方图片保存到相册。',
      exportPdfHint: '点「下载文件」保存 PDF；支持的话可用「分享到…」发到微信等。',
      exportClose: '关闭',
      rosterSecFriends: '朋友',
      rosterSecOthers: '其他',
      delete: '删除',
      folderExport: '导出',
      folderShare: '分享',
      storyEpisodePh: '第1季 第1集 or S1E1',
      storyTimePh: '12:34',
      novelVolPh: '卷 e.g. 上册 / Vol.1',
      novelChapterPh: '章 / 节编号 e.g. 12',
      routePh: '路线名',
      endingPh: '结局名',
      quoteParagraphPh: '输入段落正文（将作为主页卡片首图展示）',
      sortModalTitle: '排序方式',
      sortRealTime: '现实编辑时间',
      sortStory: '原著时间线',
      sortCustom: '自定义',
      closeOverlay: '关闭',
      folderEmojiBg: '背景图案',
      deleteConfirmMsg: '确定要删除这个嗑点吗？',
      deleteConfirmOk: '删除',
      deleteConfirmCancel: '取消',
      savedTitle: '嗑点已记录',
      textCoverEmpty: '（暂无正文）',
      cpTitleAria: '点按管理角色，长按编辑 CP 名称',
      cpRosterTitle: 'CP / 角色',
      rosterAddItem: '添加',
      rosterEmojiPh: '表情',
      rosterNamePh: '名称',
      rosterColor: '颜色',
      quoteFromEmpty: '点按顶部 CP 名管理角色与分组',
      rosterGroupCpPh: '栏目标题，如填写 CP 名称',
      rosterGroupFriendsPh: '栏目标题，如：朋友',
      rosterGroupOthersPh: '栏目标题，如：其他',
      onboardCta: '知道了',
    },
    en: {
      home: 'Home',
      search: 'Search',
      settings: 'Settings',
      fabAria: 'New',
      searchTitle: 'Search moments',
      searchPlaceholder: 'Use ##tag## for multiple tags, e.g. ##work####rival##',
      allTags: 'All tags',
      searchResults: 'Results',
      listTitle: 'Lists',
      cancel: 'Cancel',
      newFolderBtn: 'New list',
      folderDone: 'Done',
      annotationPh: 'Notes…',
      editorHidden: 'Edit moment',
      editorDone: 'Done',
      addImage: 'Add photos',
      addLink: 'Link',
      addLinkPh: 'Paste a URL with ?t= or start= to fill the time field',
      quotePh: 'Quote…',
      quoteFrom: 'This line is from —',
      charA: 'Role A',
      charB: 'Role B',
      writePh: 'Write freely… use #tag# for keywords',
      settingsTitle: 'Settings',
      language: 'Language',
      langZh: '中文',
      langEn: 'English',
      templateTitle: 'Template',
      tpl1n: 'Image + text',
      tpl1m: 'Anime, TV, or film canon',
      tpl2n: 'Text',
      tpl2m: 'Novels & long fic',
      tpl3n: 'Image',
      tpl3m: 'Comics & panels',
      tagDone: 'Done',
      pickFolder: 'Add to list',
      momentsCount: '{n} moments',
      newFolderName: 'List',
      cpDefault: 'My ship',
      appTitle: 'Kēdiǎn',
      menuAria: 'Open lists',
      moreAria: 'More and sort',
      navMainAria: 'Main navigation',
      feedAria: 'Moments feed',
      searchCloseAria: 'Close search',
      langGroupAria: 'Interface language',
      folderNoteLabel: '🌸 Anything else to add:',
      folderNotePlaceholder: 'Leave a note for future you…',
      folderEmojiPickAria: 'Pick a background pattern',
      imageTypeFull: 'Full bleed',
      imageTypeSubtitle: 'Subtitles',
      demoCardHint: 'Demo · delete anytime',
      exportReadyTitle: 'Ready to save',
      exportShareBtn: 'Share…',
      exportDownloadBtn: 'Download',
      exportLongPressHint: 'Or long-press the image above to save to Photos.',
      exportPdfHint: 'Use Download to save the PDF, or Share to send it (e.g. to another app).',
      exportClose: 'Close',
      rosterSecFriends: 'Friends',
      rosterSecOthers: 'Others',
      delete: 'Delete',
      folderExport: 'Export',
      folderShare: 'Share',
      storyEpisodePh: 'S1E1 or season / episode',
      storyTimePh: '12:34',
      novelVolPh: 'Volume e.g. Vol.1',
      novelChapterPh: 'Chapter no. e.g. 12',
      routePh: 'Route',
      endingPh: 'Ending name',
      quoteParagraphPh: 'Paragraph (shown as the card cover on home)',
      folderEmojiBg: 'Background pattern',
      deleteConfirmMsg: 'Delete this moment?',
      deleteConfirmOk: 'Delete',
      deleteConfirmCancel: 'Cancel',
      savedTitle: 'Ship moment saved',
      textCoverEmpty: '(No text yet)',
      cpTitleAria: 'Tap to manage characters, long-press to edit CP name',
      cpRosterTitle: 'CP / characters',
      rosterAddItem: 'Add',
      rosterEmojiPh: 'Emoji',
      rosterNamePh: 'Name',
      rosterColor: 'Color',
      quoteFromEmpty: 'Tap the CP name at the top to manage characters',
      rosterGroupCpPh: 'Section title, e.g. CP name',
      rosterGroupFriendsPh: 'Section title, e.g. Friends',
      rosterGroupOthersPh: 'Section title, e.g. Others',
      onboardCta: 'OK',
    },
  };

  var DEMO_CARD_IMAGES = [
    'https://images.unsplash.com/photo-1681757265572-020257b75511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    'https://images.unsplash.com/photo-1696697812492-7f93a1ad4d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    'https://images.unsplash.com/photo-1612180134806-ff3cfd50cc45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    'https://images.unsplash.com/photo-1732644144489-b1974816d3c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    'https://images.unsplash.com/photo-1763866517746-d78f1609c723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  ];

  var DEMO_CARD_LANG = {
    zh: [
      {
        quote: '这是什么神仙镜头。',
        tags: ['眼神戏', '名场面', '嗑到了'],
      },
      {
        quote: '这默契没谁了，我产品是真的。',
        tags: ['默契', '双向奔赴', '稳稳的幸福'],
      },
      {
        quote: '这个拥抱我能盘一百遍，胰岛素预警。',
        tags: ['拥抱', '高糖', '反复观看'],
      },
      {
        quote: '也太甜了吧好开心。',
        tags: ['告白', '心动', '刀子糖'],
      },
      {
        quote: '这一段我可以单曲循环到地老天荒。',
        tags: ['名台词', '后劲大', '上头'],
      },
    ],
    en: [
      {
        quote: 'That look melted me. Who allowed this cinematography.',
        tags: ['eye contact', 'iconic', 'feral'],
      },
      {
        quote: 'The sync between them? Canon. My ship is so real.',
        tags: ['found family', 'slow burn', 'fluff'],
      },
      {
        quote: 'This hug belongs in a museum. Loop #100 and counting.',
        tags: ['hug', 'tooth-rotting', 'rewatch'],
      },
      {
        quote: 'From that second I knew—I was gone.',
        tags: ['confession', 'hurt/comfort', 'angst'],
      },
      {
        quote: 'That line lives in my head rent-free forever.',
        tags: ['quote', 'brainrot', 'obsessed'],
      },
    ],
  };

  var DEMO_FOLDER_NAMES = {
    zh: {
      a: '新文·素材',
      b: 'paro口嗨和一些脑洞',
      c: '点击可以修改清单名称',
    },
    en: {
      a: 'Hurt/comfort WIP',
      b: 'HP AU scrapbook',
      c: 'Quick-transmigration AU',
    },
  };

  var LEGACY_FOLDER_TO_SLOT = {
    '新文-生长痛用到的': 'a',
    '新文·生长痛素材': 'a',
    'Hurt/comfort WIP': 'a',
    'HP Paro': 'b',
    'HP paro 口嗨': 'b',
    'HP AU scrapbook': 'b',
    '快穿 Paro': 'c',
    '快穿 paro 脑洞': 'c',
    'Quick-transmigration AU': 'c',
  };

  var PLACEHOLDER_IMAGES = [
    'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400',
    'https://images.unsplash.com/photo-1557683316-973673baf926?w=400',
    'https://images.unsplash.com/photo-1556139943-4bdca53adf1e?w=400',
  ];

  function defaultCpRoster() {
    return {
      groups: [
        {
          key: 'pair',
          title: '主角',
          items: [
            { id: 1, name: '角色A', emoji: '', color: '#BFDBFE' },
            { id: 2, name: '角色B', emoji: '', color: '#FBCFE8' },
          ],
        },
        { key: 'friends', title: '朋友', items: [] },
        { key: 'others', title: '其他', items: [] },
      ],
    };
  }

  var state = {
    currentLang: 'zh',
    cpName: '我的 CP',
    cpRoster: defaultCpRoster(),
    editingName: false,
    cards: [],
    folders: [],
    searchQuery: '',
    selectedTagForDetail: null,
    selectedFolderId: null,
    draggedCardId: null,
    selectedTemplate: '图文',
    editorImages: [],
    pendingImageType: 'full',
    editorQuoteFromIds: [],
    pendingCardIdForPicker: null,
    editingCardId: null,
    isExportMode: false,
    selectedEmoji: '💗',
    feedSortStory: false,
    storySortAsc: true,
  };

  function $(id) {
    return document.getElementById(id);
  }

  var dom = {};
  var cpTitlePressTimer = null;
  var cpTitleLongPress = false;
  var cpRosterBodyBound = false;
  var exportOfferBound = false;
  var exportOfferState = {
    revokePreview: null,
    blob: null,
    filename: null,
    file: null,
    kind: null,
  };

  function t(k) {
    var L = TEXT[state.currentLang] || TEXT.zh;
    return (L[k] != null ? L[k] : TEXT.zh[k]) || k;
  }

  function applyUiStrings() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (k && t(k)) el.textContent = t(k);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-placeholder');
      if (k && t(k)) el.placeholder = t(k);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-aria');
      if (k && t(k)) el.setAttribute('aria-label', t(k));
    });
    var map = {
      'search-page-title': 'searchTitle',
      'search-all-tags-title': 'allTags',
      'folder-list-page-title': 'listTitle',
      'folder-picker-heading': 'pickFolder',
      'template-heading': 'templateTitle',
      'editor-heading': 'editorHidden',
    };
    Object.keys(map).forEach(function (id) {
      var el = $(id);
      if (el) el.textContent = t(map[id]);
    });
    var si = $('search-input');
    if (si) si.placeholder = t('searchPlaceholder');
    var fa = $('folder-annotation');
    if (fa) fa.placeholder = t('folderNotePlaceholder');
    var tpls = [
      ['tpl1n', 'tpl1m'],
      ['tpl2n', 'tpl2m'],
      ['tpl3n', 'tpl3m'],
    ];
    document.querySelectorAll('.template-pick').forEach(function (btn, i) {
      var pair = tpls[i];
      if (!pair) return;
      var n = btn.querySelector('.folder-item-btn__name');
      var m = btn.querySelector('.folder-item-btn__meta');
      if (n) n.textContent = t(pair[0]);
      if (m) m.textContent = t(pair[1]);
    });
    var fc = $('folder-picker-cancel');
    if (fc) fc.textContent = t('cancel');
    var bl = $('btn-close-folderList');
    if (bl) bl.textContent = t('cancel');
    var fd = $('folder-detail-done');
    if (fd) fd.textContent = t('folderDone');
    var td = $('tag-detail-done');
    if (td) td.textContent = t('tagDone');
    document.title = t('appTitle');
    var fab = $('fab-open-editor');
    if (fab) fab.setAttribute('aria-label', t('fabAria'));
    var sb = $('sort-backdrop');
    if (sb) sb.setAttribute('aria-label', t('closeOverlay'));
    var feb = $('folder-export-emoji-fab');
    if (feb) feb.setAttribute('aria-label', t('folderEmojiBg'));
    var febd = $('folder-emoji-sheet-backdrop');
    if (febd) febd.setAttribute('aria-label', t('closeOverlay'));
    var fex = $('folder-export-exit');
    if (fex) fex.setAttribute('aria-label', t('closeOverlay'));
    var bmenu = $('btn-menu');
    if (bmenu) bmenu.setAttribute('aria-label', t('menuAria'));
    var bmore = $('btn-more');
    if (bmore) bmore.setAttribute('aria-label', t('moreAria'));
    var feedEl = $('feed');
    if (feedEl) feedEl.setAttribute('aria-label', t('feedAria'));
    var bnav = document.querySelector('.bottom-nav');
    if (bnav) bnav.setAttribute('aria-label', t('navMainAria'));
    var bsearchClose = $('btn-close-search');
    if (bsearchClose) bsearchClose.setAttribute('aria-label', t('searchCloseAria'));
    var eoo = $('export-offer-overlay');
    if (eoo && !eoo.hidden && exportOfferState.kind) applyExportOfferStrings(exportOfferState.kind);
    applyEditorTemplateStrings();
  }

  function getCardTemplate(card) {
    var tpl = card && card.template;
    if (tpl === '文' || tpl === '图' || tpl === '图文') return tpl;
    return '图文';
  }

  function syncEditorTemplateUI() {
    var tpl = state.selectedTemplate;
    if (dom.editorPanel) {
      dom.editorPanel.classList.remove('tpl-图文', 'tpl-文', 'tpl-图');
      if (tpl === '文') dom.editorPanel.classList.add('tpl-文');
      else if (tpl === '图') dom.editorPanel.classList.add('tpl-图');
      else dom.editorPanel.classList.add('tpl-图文');
    }
    if (dom.editorQuote) {
      if (tpl === '文') {
        dom.editorQuote.rows = 10;
        dom.editorQuote.classList.add('editor-quote-input--paragraph');
      } else {
        dom.editorQuote.rows = 2;
        dom.editorQuote.classList.remove('editor-quote-input--paragraph');
      }
    }
    applyEditorTemplateStrings();
  }

  function applyEditorTemplateStrings() {
    var tpl = state.selectedTemplate;
    if (dom.editorEpisode && dom.editorTimecode) {
      if (tpl === '文') {
        dom.editorEpisode.placeholder = t('novelVolPh');
        dom.editorTimecode.placeholder = t('novelChapterPh');
      } else if (tpl === '图') {
        dom.editorEpisode.placeholder = t('routePh');
        dom.editorTimecode.placeholder = t('endingPh');
      } else {
        dom.editorEpisode.placeholder = t('storyEpisodePh');
        dom.editorTimecode.placeholder = t('storyTimePh');
      }
    }
    if (dom.editorQuote) {
      dom.editorQuote.placeholder = tpl === '文' ? t('quoteParagraphPh') : t('quotePh');
    }
  }

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var d = JSON.parse(raw);
      if (d.cards && d.cards.length) state.cards = d.cards;
      if (d.folders && d.folders.length) state.folders = d.folders;
      if (d.cpName) state.cpName = d.cpName;
      if (d.cpRoster && d.cpRoster.groups && d.cpRoster.groups.length) state.cpRoster = d.cpRoster;
      if (d.currentLang === 'zh' || d.currentLang === 'en') state.currentLang = d.currentLang;
    } catch (e) {}
  }

  function saveState() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          cards: state.cards,
          folders: state.folders,
          cpName: state.cpName,
          cpRoster: state.cpRoster,
          currentLang: state.currentLang,
        })
      );
    } catch (e) {}
  }

  function hasStoredState() {
    try {
      return !!localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return false;
    }
  }

  function buildDemoCardsList() {
    var lang = state.currentLang === 'en' ? 'en' : 'zh';
    var rows = DEMO_CARD_LANG[lang] || DEMO_CARD_LANG.zh;
    var cards = [];
    for (var i = 0; i < 5; i++) {
      var row = rows[i] || rows[rows.length - 1];
      if (!row) break;
      cards.push({
        id: i + 1,
        image: DEMO_CARD_IMAGES[i],
        quote: row.quote,
        tags: row.tags.slice(),
        template: '图文',
        isDemo: true,
        quoteFromIds: [],
      });
    }
    return cards;
  }

  function buildDemoFoldersList() {
    var lang = state.currentLang === 'en' ? 'en' : 'zh';
    var fn = DEMO_FOLDER_NAMES[lang] || DEMO_FOLDER_NAMES.zh;
    return [
      { id: 1, name: fn.a, cardIds: [1, 2], annotation: '', isDemo: true, demoSlot: 'a' },
      { id: 2, name: fn.b, cardIds: [3, 4, 5], annotation: '', isDemo: true, demoSlot: 'b' },
      { id: 3, name: fn.c, cardIds: [1, 3, 4], annotation: '', isDemo: true, demoSlot: 'c' },
    ];
  }

  function buildDemoCpRoster() {
    var name = t('cpDefault');
    return {
      groups: [
        {
          key: 'pair',
          title: name,
          items: [
            { id: 1, name: t('charA'), emoji: '', color: '#BFDBFE' },
            { id: 2, name: t('charB'), emoji: '', color: '#FBCFE8' },
          ],
        },
        { key: 'friends', title: t('rosterSecFriends'), items: [] },
        { key: 'others', title: t('rosterSecOthers'), items: [] },
      ],
    };
  }

  function seedFirstVisitState() {
    state.cards = buildDemoCardsList();
    state.folders = buildDemoFoldersList();
    state.cpName = t('cpDefault');
    state.cpRoster = buildDemoCpRoster();
  }

  function migrateLegacyDemoMarkers() {
    state.cards.forEach(function (c) {
      if (c.isDemo) return;
      if (DEMO_CARD_IMAGES.indexOf(c.image) !== -1) c.isDemo = true;
    });
    state.folders.forEach(function (f) {
      if (f.isDemo) return;
      var slot = LEGACY_FOLDER_TO_SLOT[f.name];
      if (slot) {
        f.isDemo = true;
        f.demoSlot = slot;
      }
    });
  }

  function syncDemoContentToCurrentLang() {
    var lang = state.currentLang === 'en' ? 'en' : 'zh';
    var rows = DEMO_CARD_LANG[lang] || DEMO_CARD_LANG.zh;
    state.cards.forEach(function (c) {
      if (!c.isDemo || c.id < 1 || c.id > 5) return;
      var row = rows[c.id - 1];
      if (!row) return;
      c.quote = row.quote;
      c.tags = row.tags.slice();
    });
    var fn = DEMO_FOLDER_NAMES[lang] || DEMO_FOLDER_NAMES.zh;
    state.folders.forEach(function (f) {
      if (!f.isDemo || !f.demoSlot) return;
      var nm = fn[f.demoSlot];
      if (nm) f.name = nm;
    });
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function setClass(el, token, on) {
    if (!el || !el.classList) return;
    if (on) el.classList.add(token);
    else el.classList.remove(token);
  }

  function eventTargetElement(ev) {
    var t = ev && ev.target;
    if (!t) return null;
    return t.nodeType === 1 ? t : t.parentElement;
  }

  function closestFromEvent(ev, selector) {
    var el = eventTargetElement(ev);
    return el && typeof el.closest === 'function' ? el.closest(selector) : null;
  }

  function escapeRegExp(s) {
    return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function normalizeUrlForParse(raw) {
    var s = String(raw || '').trim();
    if (!s) return '';
    if (/^https?:\/\//i.test(s)) return s;
    return 'https://' + s;
  }

  function parseSecondsFromTimeParam(val) {
    if (val == null || val === '') return null;
    var v = String(val).trim();
    if (!v) return null;
    if (/^\d+$/.test(v)) return parseInt(v, 10);
    var h = v.match(/(\d+)\s*h/i);
    var m = v.match(/(\d+)\s*m/i);
    var sPart = v.match(/(\d+)\s*s/i);
    if (h || m || sPart) {
      var out = 0;
      if (h) out += parseInt(h[1], 10) * 3600;
      if (m) out += parseInt(m[1], 10) * 60;
      if (sPart) out += parseInt(sPart[1], 10);
      return out;
    }
    if (/^\d+:\d+$/.test(v)) {
      var p2 = v.split(':');
      return parseInt(p2[0], 10) * 60 + parseInt(p2[1], 10);
    }
    if (/^\d+:\d+:\d+$/.test(v)) {
      var p3 = v.split(':');
      return parseInt(p3[0], 10) * 3600 + parseInt(p3[1], 10) * 60 + parseInt(p3[2], 10);
    }
    return null;
  }

  function secondsToMmSs(sec) {
    if (sec == null || isNaN(sec) || sec < 0) return null;
    sec = Math.floor(sec);
    var mm = Math.floor(sec / 60);
    var ss = sec % 60;
    return mm + ':' + (ss < 10 ? '0' + ss : ss);
  }

  function applyTimeFromSourceUrlInput() {
    if (!dom.editorSourceUrl || !dom.editorTimecode) return;
    var href = normalizeUrlForParse(dom.editorSourceUrl.value);
    if (!href) return;
    try {
      var u = new URL(href);
      var raw = u.searchParams.get('t');
      if (raw == null || raw === '') raw = u.searchParams.get('start');
      if (raw == null || raw === '') return;
      var secs = parseSecondsFromTimeParam(raw);
      if (secs == null) return;
      var tc = secondsToMmSs(secs);
      if (tc) dom.editorTimecode.value = tc;
    } catch (err) {}
  }

  function extractTags(text) {
    var regex = /#([^#\s]+)#/g;
    var tags = [];
    var seen = Object.create(null);
    var m;
    while ((m = regex.exec(text)) !== null) {
      var tag = m[1];
      if (tag && !seen[tag]) {
        seen[tag] = true;
        tags.push(tag);
      }
    }
    return tags;
  }

  function extractSearchTags(query) {
    var regex = /##([^#]+)##/g;
    var tags = [];
    var m;
    while ((m = regex.exec(query)) !== null) tags.push(m[1]);
    return tags;
  }

  function getAllTags() {
    var tagSet = Object.create(null);
    state.cards.forEach(function (card) {
      (card.tags || []).forEach(function (t) {
        tagSet[t] = true;
      });
    });
    var loc = state.currentLang === 'zh' ? 'zh-CN' : 'en';
    return Object.keys(tagSet).sort(function (a, b) {
      return a.localeCompare(b, loc);
    });
  }

  function getCardsByTag(tag) {
    return state.cards.filter(function (c) {
      return (c.tags || []).indexOf(tag) !== -1;
    });
  }

  function getFilteredCards() {
    var q = (state.searchQuery || '').trim();
    if (!q) return state.cards.slice();

    var searchTags = extractSearchTags(q);
    if (searchTags.length > 0) {
      return state.cards.filter(function (card) {
        return searchTags.every(function (tg) {
          return (card.tags || []).indexOf(tg) !== -1;
        });
      });
    }

    var lower = q.toLowerCase();
    return state.cards.filter(function (card) {
      if (String(card.quote).toLowerCase().indexOf(lower) !== -1) return true;
      return (card.tags || []).some(function (tg) {
        return String(tg).toLowerCase().indexOf(lower) !== -1;
      });
    });
  }

  function getCardById(id) {
    for (var i = 0; i < state.cards.length; i++) {
      if (state.cards[i].id === id) return state.cards[i];
    }
    return null;
  }

  function getCardsByIds(ids) {
    return ids
      .map(function (id) {
        return getCardById(id);
      })
      .filter(Boolean);
  }

  function getSelectedFolder() {
    if (state.selectedFolderId == null) return null;
    for (var i = 0; i < state.folders.length; i++) {
      if (state.folders[i].id === state.selectedFolderId) return state.folders[i];
    }
    return null;
  }

  function ensureCpRosterShape() {
    var def = defaultCpRoster();
    if (!state.cpRoster || !Array.isArray(state.cpRoster.groups)) {
      state.cpRoster = def;
      return;
    }
    for (var g = 0; g < 3; g++) {
      if (!state.cpRoster.groups[g]) {
        state.cpRoster.groups[g] = def.groups[g];
        continue;
      }
      if (!state.cpRoster.groups[g].items) state.cpRoster.groups[g].items = [];
      if (typeof state.cpRoster.groups[g].title !== 'string') {
        state.cpRoster.groups[g].title = def.groups[g].title;
      }
    }
  }

  function migrateCardsQuoteFrom() {
    state.cards = state.cards.map(function (c) {
      if (Array.isArray(c.quoteFromIds)) {
        var o = Object.assign({}, c);
        delete o.selectedChar;
        return o;
      }
      var ids = [];
      if (c.selectedChar === 'A') ids = [1];
      else if (c.selectedChar === 'B') ids = [2];
      else if (c.selectedChar === 'AB' || c.selectedChar === 'both') ids = [1, 2];
      var out = Object.assign({}, c);
      delete out.selectedChar;
      out.quoteFromIds = ids;
      return out;
    });
  }

  function nextCpRosterId() {
    var max = 0;
    state.cpRoster.groups.forEach(function (gr) {
      (gr.items || []).forEach(function (it) {
        var n = typeof it.id === 'number' ? it.id : parseInt(it.id, 10);
        if (!isNaN(n) && n > max) max = n;
      });
    });
    return max + 1;
  }

  function findRosterItemById(id) {
    for (var gi = 0; gi < state.cpRoster.groups.length; gi++) {
      var items = state.cpRoster.groups[gi].items || [];
      for (var i = 0; i < items.length; i++) {
        if (items[i].id == id) return items[i];
      }
    }
    return null;
  }

  function sanitizeQuoteFromIds(ids) {
    return (ids || []).filter(function (id, j, a) {
      return findRosterItemById(id) && a.indexOf(id) === j;
    });
  }

  function quoteFromTagTextColor(bgHex) {
    var h = String(bgHex || '').replace('#', '');
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    if (h.length !== 6) return '#3f3f46';
    var r = parseInt(h.slice(0, 2), 16);
    var g = parseInt(h.slice(2, 4), 16);
    var b = parseInt(h.slice(4, 6), 16);
    function c(x) {
      x = Math.max(0, Math.min(255, Math.round(x)));
      var s = x.toString(16);
      return s.length < 2 ? '0' + s : s;
    }
    return '#' + c(r * 0.42) + c(g * 0.42) + c(b * 0.42);
  }

  function quoteFromTagsHtml(card) {
    var ids = card.quoteFromIds || [];
    if (!ids.length) return '';
    var parts = [];
    for (var i = 0; i < ids.length; i++) {
      var it = findRosterItemById(ids[i]);
      if (!it) continue;
      var bg = it.color || '#e4e4e7';
      var fg = quoteFromTagTextColor(bg);
      var label = (it.emoji ? it.emoji + ' ' : '') + (it.name || '');
      parts.push(
        '<span class="card__quote-from-tag" style="background-color:' +
          escapeHtml(bg) +
          ';color:' +
          escapeHtml(fg) +
          '">' +
          escapeHtml(label) +
          '</span>'
      );
    }
    return parts.join('');
  }

  function tagsHtml(tags) {
    return (tags || [])
      .map(function (tag) {
        return '<span class="card__tag">#' + escapeHtml(tag) + '</span>';
      })
      .join('');
  }

  var ARROW_SVG =
    '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';
  var CLOSE_SVG =
    '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 7l10 10M17 7 7 17"/></svg>';
  var GRIP_SVG =
    '<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="9" cy="6" r="1.25"/><circle cx="15" cy="6" r="1.25"/><circle cx="9" cy="12" r="1.25"/><circle cx="15" cy="12" r="1.25"/><circle cx="9" cy="18" r="1.25"/><circle cx="15" cy="18" r="1.25"/></svg>';

  function cardShellTall(card, innerTopRight, extraClass, folderBodySnippet) {
    var tpl = getCardTemplate(card);
    var ec = (extraClass ? ' ' + extraClass : '') + (tpl === '文' ? ' card--text-tpl' : '');
    var ariaDel = escapeHtml(t('delete'));
    var snippet = '';
    if (folderBodySnippet) {
      var bt = (card.text || '').trim();
      if (bt) {
        snippet = '<p class="card__body-snippet">' + escapeHtml(bt) + '</p>';
      }
    }
    var mediaHtml;
    if (tpl === '文') {
      var qt = (card.quote || '').trim();
      mediaHtml =
        '<div class="card__image card__image--text-cover">' +
        '<p class="card__text-cover-text">' +
        (qt ? escapeHtml(qt) : '<span class="card__text-cover-empty">' + escapeHtml(t('textCoverEmpty')) + '</span>') +
        '</p></div>';
    } else {
      var imgSrc = card.image || PLACEHOLDER_IMAGES[0];
      mediaHtml =
        '<div class="card__image card__image--photo"><img src="' +
        escapeHtml(imgSrc) +
        '" alt="" loading="lazy" draggable="false"/></div>';
    }
    var quoteHtml = '';
    if (tpl !== '文') {
      quoteHtml =
        '<p class="card__quote"><span class="q" aria-hidden="true">“</span>' +
        escapeHtml(card.quote || '') +
        '<span class="q" aria-hidden="true">”</span></p>';
    }
    var qfHtml = quoteFromTagsHtml(card);
    var qfRow = qfHtml ? '<div class="card__quote-from-row">' + qfHtml + '</div>' : '';
    return (
      '<article class="card card--tall' +
      ec +
      '" data-card-id="' +
      card.id +
      '">' +
      innerTopRight +
      '<button type="button" class="card-delete-btn" data-delete-card-id="' +
      escapeHtml(card.id) +
      '" aria-label="' +
      ariaDel +
      '">' +
      CLOSE_SVG +
      '</button>' +
      mediaHtml +
      '<div class="card__body">' +
      quoteHtml +
      snippet +
      qfRow +
      '<div class="card__tags">' +
      tagsHtml(card.tags) +
      '</div></div></article>'
    );
  }

  function getFeedCardsOrdered() {
    var cards = state.cards;
    if (!state.feedSortStory) return cards.slice();
    var withIdx = cards.map(function (c, i) {
      return { c: c, i: i };
    });
    function hasStory(c) {
      var e = (c.episode || '').trim();
      var t = (c.timecode || '').trim();
      return e !== '' || t !== '';
    }
    function storyKey(c) {
      return [(c.episode || '').trim(), (c.timecode || '').trim()].join('\0');
    }
    var sortable = withIdx.filter(function (x) {
      return hasStory(x.c);
    });
    var unsort = withIdx.filter(function (x) {
      return !hasStory(x.c);
    });
    sortable.sort(function (a, b) {
      var cmp = storyKey(a.c).localeCompare(storyKey(b.c), undefined, { numeric: true });
      if (cmp !== 0) return state.storySortAsc ? cmp : -cmp;
      return a.i - b.i;
    });
    unsort.sort(function (a, b) {
      return a.i - b.i;
    });
    return sortable.concat(unsort).map(function (x) {
      return x.c;
    });
  }

  function wrapFeedCardHtml(card, arrowBtn) {
    var inner = cardShellTall(card, arrowBtn, '');
    var demoBadge = '';
    if (card.isDemo) {
      demoBadge =
        '<div class="feed-card-demo-badge"><span class="feed-card-demo-badge__text">' +
        escapeHtml(t('demoCardHint')) +
        '</span></div>';
    }
    var story = '';
    if (state.feedSortStory) {
      var ep = (card.episode || '').trim();
      var tc = (card.timecode || '').trim();
      if (ep || tc) {
        story =
          '<div class="editor-story-row editor-story-row--feed">' +
          '<span class="editor-story-feed-cell">' +
          (ep ? escapeHtml(ep) : '&nbsp;') +
          '</span>' +
          '<span class="editor-story-feed-cell editor-story-feed-cell--time">' +
          (tc ? escapeHtml(tc) : '&nbsp;') +
          '</span>' +
          '</div>';
      }
    }
    return '<div class="feed-card-wrap">' + demoBadge + inner + story + '</div>';
  }

  function setSortModalOpen(open) {
    if (!dom.sortOverlay) return;
    setClass(dom.sortOverlay, 'is-open', open);
    dom.sortOverlay.setAttribute('aria-hidden', open ? 'false' : 'true');
    if (open) syncSortModalActive();
  }

  function syncSortModalActive() {
    document.querySelectorAll('[data-sort-opt]').forEach(function (btn) {
      var k = btn.getAttribute('data-sort-opt');
      setClass(btn, 'is-active', k === 'story' && state.feedSortStory);
    });
  }

  function handleSortOption(kind) {
    if (kind === 'real' || kind === 'custom') {
      state.feedSortStory = false;
      setSortModalOpen(false);
      renderFeed();
      return;
    }
    if (kind === 'story') {
      if (!state.feedSortStory) {
        state.feedSortStory = true;
        state.storySortAsc = true;
      } else {
        state.storySortAsc = !state.storySortAsc;
      }
      setSortModalOpen(false);
      renderFeed();
    }
  }

  function renderFeed() {
    if (!dom.feed) return;
    var ariaPick = escapeHtml(t('pickFolder'));
    var cards = getFeedCardsOrdered();
    dom.feed.innerHTML = cards
      .map(function (card) {
        var btn =
          '<button type="button" class="card-arrow-btn" aria-label="' +
          ariaPick +
          '">' +
          ARROW_SVG +
          '</button>';
        return wrapFeedCardHtml(card, btn);
      })
      .join('');
  }

  function renderTagIndex() {
    if (!dom.tagIndexList) return;
    var tags = getAllTags();
    dom.tagIndexList.innerHTML = tags
      .map(function (tag) {
        return (
          '<button type="button" class="pill-btn" data-tag="' +
          escapeHtml(tag) +
          '">#' +
          escapeHtml(tag) +
          '</button>'
        );
      })
      .join('');
  }

  function renderSearchResults() {
    if (!dom.searchResultsWrap || !dom.searchResultsTitle || !dom.searchResultsList) return;
    var q = (state.searchQuery || '').trim();
    if (!q) {
      dom.searchResultsWrap.hidden = true;
      return;
    }
    var list = getFilteredCards();
    dom.searchResultsWrap.hidden = false;
    dom.searchResultsTitle.textContent = t('searchResults') + ' (' + list.length + ')';
    var ariaPick = escapeHtml(t('pickFolder'));
    dom.searchResultsList.innerHTML = list
      .map(function (card) {
        var btn =
          '<button type="button" class="card-arrow-btn" aria-label="' +
          ariaPick +
          '">' +
          ARROW_SVG +
          '</button>';
        return cardShellTall(card, btn, '');
      })
      .join('');
  }

  function renderTagDetail() {
    if (!dom.tagDetailList || !dom.tagDetailTitle) return;
    var tag = state.selectedTagForDetail;
    if (!tag) return;
    dom.tagDetailTitle.textContent = '#' + tag;
    var list = getCardsByTag(tag);
    var ariaPick = escapeHtml(t('pickFolder'));
    dom.tagDetailList.innerHTML = list
      .map(function (card) {
        var btn =
          '<button type="button" class="card-arrow-btn" aria-label="' +
          ariaPick +
          '">' +
          ARROW_SVG +
          '</button>';
        return cardShellTall(card, btn, '');
      })
      .join('');
  }

  function renderFolderList() {
    if (!dom.foldersList) return;
    dom.foldersList.innerHTML = state.folders
      .map(function (f) {
        return (
          '<button type="button" class="folder-item-btn" data-folder-id="' +
          f.id +
          '">' +
          '<div class="folder-item-btn__name">' +
          escapeHtml(f.name) +
          '</div>' +
          '<div class="folder-item-btn__meta">' +
          t('momentsCount').replace('{n}', f.cardIds.length) +
          '</div>' +
          '<span class="folder-delete-btn" role="button" tabindex="0" aria-label="' +
          escapeHtml(t('delete')) +
          '">×</span>' +
          '</button>'
        );
      })
      .join('');
  }

  function syncExportEmojiBg() {
    var el = $('folder-export-emoji-bg');
    if (!el) return;
    var ch = state.selectedEmoji || '💗';
    el.innerHTML = '';
    var n = 56;
    for (var i = 0; i < n; i++) {
      var span = document.createElement('span');
      span.className = 'folder-export-emoji-sprinkle';
      span.textContent = ch;
      span.style.left = 2 + Math.random() * 96 + '%';
      span.style.top = 1 + Math.random() * 98 + '%';
      span.style.fontSize = 0.72 + Math.random() * 1.5 + 'rem';
      span.style.opacity = String(0.04 + Math.random() * 0.08);
      span.style.transform =
        'translate(-50%, -50%) rotate(' + ((Math.random() - 0.5) * 72 | 0) + 'deg)';
      el.appendChild(span);
    }
  }

  function setFolderEmojiSheetOpen(open) {
    var sh = $('folder-emoji-sheet');
    if (!sh) return;
    sh.hidden = !open;
    sh.setAttribute('aria-hidden', open ? 'false' : 'true');
  }

  function syncFolderExportStatic() {
    var folder = getSelectedFolder();
    var h = $('folder-export-heading');
    var p = $('folder-export-annotation');
    if (!folder || !h || !p) return;
    h.textContent = folder.name;
    h.hidden = false;
    var txt = (dom.folderAnnotation && dom.folderAnnotation.value) || '';
    p.textContent = txt;
    p.hidden = !txt.trim();
  }

  function setFolderExportMode(on) {
    state.isExportMode = !!on;
    setClass(document.body, 'export-mode', state.isExportMode);
    var hex = $('folder-header-export');
    if (hex) hex.setAttribute('aria-hidden', state.isExportMode ? 'false' : 'true');
    if (!state.isExportMode) {
      setFolderEmojiSheetOpen(false);
      var h = $('folder-export-heading');
      var p = $('folder-export-annotation');
      if (h) h.hidden = true;
      if (p) p.hidden = true;
      makeFolderCardsDraggable();
      return;
    }
    syncExportEmojiBg();
    syncFolderExportStatic();
    if (dom.folderDetailCards) {
      dom.folderDetailCards.querySelectorAll('.folder-draggable-card').forEach(function (el) {
        el.setAttribute('draggable', 'false');
      });
    }
  }

  function sanitizePngBasename(raw, fallback) {
    var s = String(raw == null ? '' : raw)
      .replace(/[\\/:*?"<>|]+/g, '_')
      .trim()
      .slice(0, 48);
    return s || fallback || 'export';
  }

  function getExportHtml2CanvasScale() {
    try {
      if (window.matchMedia('(max-width: 480px)').matches) return 1.5;
    } catch (e) {}
    return 2;
  }

  function canShareFile(file) {
    try {
      return typeof navigator.canShare === 'function' && navigator.canShare({ files: [file] });
    } catch (e) {
      return false;
    }
  }

  function preferExportOfferModal(file) {
    if (file && canShareFile(file)) return true;
    try {
      if (window.matchMedia('(max-width: 768px)').matches) return true;
    } catch (e) {}
    return (navigator.maxTouchPoints || 0) > 0;
  }

  function triggerBlobDownload(blob, filename) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.style.position = 'fixed';
    a.style.left = '-9999px';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 4000);
  }

  function applyExportOfferStrings(kind) {
    var title = $('export-offer-title');
    var hint = $('export-offer-hint');
    var shareBtn = $('export-offer-share');
    var dlBtn = $('export-offer-download');
    var closeBtn = $('export-offer-close');
    if (title) title.textContent = t('exportReadyTitle');
    if (hint) hint.textContent = kind === 'pdf' ? t('exportPdfHint') : t('exportLongPressHint');
    if (shareBtn) shareBtn.textContent = t('exportShareBtn');
    if (dlBtn) dlBtn.textContent = t('exportDownloadBtn');
    if (closeBtn) closeBtn.textContent = t('exportClose');
  }

  function closeExportOffer() {
    if (exportOfferState.revokePreview) {
      exportOfferState.revokePreview();
      exportOfferState.revokePreview = null;
    }
    exportOfferState.blob = null;
    exportOfferState.filename = null;
    exportOfferState.file = null;
    exportOfferState.kind = null;
    var img = $('export-offer-img');
    if (img) img.removeAttribute('src');
    var pdfBadge = $('export-offer-pdf-badge');
    if (pdfBadge) pdfBadge.hidden = true;
    var wrap = $('export-offer-preview-wrap');
    if (wrap) wrap.hidden = false;
    var ov = $('export-offer-overlay');
    if (ov) {
      ov.hidden = true;
      ov.setAttribute('aria-hidden', 'true');
    }
  }

  function openExportOffer(blob, filename, mime, kind) {
    closeExportOffer();
    var file = new File([blob], filename, { type: mime || 'application/octet-stream' });
    exportOfferState.blob = blob;
    exportOfferState.filename = filename;
    exportOfferState.file = file;
    exportOfferState.kind = kind;

    var ov = $('export-offer-overlay');
    var img = $('export-offer-img');
    var wrap = $('export-offer-preview-wrap');
    var pdfBadge = $('export-offer-pdf-badge');
    applyExportOfferStrings(kind);

    if (kind === 'pdf') {
      if (wrap) wrap.hidden = true;
      if (pdfBadge) pdfBadge.hidden = false;
    } else {
      if (wrap) wrap.hidden = false;
      if (pdfBadge) pdfBadge.hidden = true;
      if (blob && img) {
        var previewUrl = URL.createObjectURL(blob);
        exportOfferState.revokePreview = function () {
          URL.revokeObjectURL(previewUrl);
        };
        img.src = previewUrl;
      }
    }

    var shareBtn = $('export-offer-share');
    if (shareBtn) shareBtn.hidden = !canShareFile(file);

    if (ov) {
      ov.hidden = false;
      ov.setAttribute('aria-hidden', 'false');
    }
  }

  function finishImageExportFromCanvas(canvas, safeBase) {
    var filename = safeBase + '.png';
    canvas.toBlob(
      function (blob) {
        if (!blob) return;
        var file = new File([blob], filename, { type: 'image/png' });
        if (preferExportOfferModal(file)) {
          openExportOffer(blob, filename, 'image/png', 'image');
        } else {
          triggerBlobDownload(blob, filename);
        }
      },
      'image/png',
      0.95
    );
  }

  function bindExportOffer() {
    if (exportOfferBound) return;
    exportOfferBound = true;
    var bd = $('export-offer-backdrop');
    var closeBtn = $('export-offer-close');
    var dl = $('export-offer-download');
    var sh = $('export-offer-share');
    function onShare() {
      var f = exportOfferState.file;
      if (!f || typeof navigator.share !== 'function') return;
      navigator.share({ files: [f] }).catch(function () {});
    }
    function onDownload() {
      if (exportOfferState.blob && exportOfferState.filename) {
        triggerBlobDownload(exportOfferState.blob, exportOfferState.filename);
      }
    }
    if (bd) bd.addEventListener('click', closeExportOffer);
    if (closeBtn) closeBtn.addEventListener('click', closeExportOffer);
    if (dl) dl.addEventListener('click', onDownload);
    if (sh) sh.addEventListener('click', onShare);
  }

  // html2canvas: folder capture is lifted from its parent; single-card wrap is body-only and removed after.
  function captureAndDownloadPng(el, downloadBaseName) {
    if (!el || typeof html2canvas !== 'function') return;

    var parent = el.parentNode;
    var wasLifted = !!(parent && parent !== document.body);
    var placeholder = null;

    if (wasLifted) {
      var nextSib = el.nextSibling;
      placeholder = document.createElement('div');
      placeholder.style.display = 'none';
      parent.insertBefore(placeholder, nextSib);
      var w = el.offsetWidth;
      el.style.position = 'absolute';
      el.style.top = '-99999px';
      el.style.left = '0';
      el.style.width = w + 'px';
      el.style.maxWidth = 'none';
      el.style.height = 'auto';
      el.style.overflow = 'visible';
      document.body.appendChild(el);
    } else {
      el.style.position = 'absolute';
      el.style.top = '-99999px';
      el.style.left = '0';
      if (!el.style.width) el.style.width = '360px';
      el.style.maxWidth = 'none';
      el.style.height = 'auto';
      el.style.overflow = 'visible';
    }

    var safeBase = sanitizePngBasename(downloadBaseName, 'export');

    function cleanup() {
      el.style.position = '';
      el.style.top = '';
      el.style.left = '';
      el.style.width = '';
      el.style.maxWidth = '';
      el.style.height = '';
      el.style.overflow = '';
      if (wasLifted && parent && placeholder) {
        parent.insertBefore(el, placeholder);
        placeholder.remove();
      } else if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    }

    html2canvas(el, {
      scale: getExportHtml2CanvasScale(),
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
    })
      .then(function (canvas) {
        cleanup();
        finishImageExportFromCanvas(canvas, safeBase);
      })
      .catch(function () {
        cleanup();
      });
  }

  function runFolderExportImage() {
    var el = $('folder-export-capture');
    if (!el || typeof html2canvas !== 'function') return;
    syncFolderExportStatic();
    syncExportEmojiBg();
    var folder = getSelectedFolder();
    var base =
      folder && folder.name
        ? sanitizePngBasename(folder.name, 'folder')
        : 'folder';
    captureAndDownloadPng(el, base);
  }

  function downloadCapturedPdfFromElement(el, downloadBaseName) {
    if (!el || typeof html2canvas !== 'function') return;
    var JsPdf = (window.jspdf && window.jspdf.jsPDF) || window.jsPDF;
    if (!JsPdf) return;

    el.style.position = 'absolute';
    el.style.top = '-99999px';
    el.style.left = '0';
    el.style.maxWidth = 'none';
    el.style.height = 'auto';
    el.style.overflow = 'visible';

    var safeBase = sanitizePngBasename(downloadBaseName, 'export');

    function cleanup() {
      el.style.position = '';
      el.style.top = '';
      el.style.left = '';
      el.style.maxWidth = '';
      el.style.height = '';
      el.style.overflow = '';
      if (el.parentNode) el.parentNode.removeChild(el);
    }

    html2canvas(el, {
      scale: getExportHtml2CanvasScale(),
      useCORS: true,
      logging: false,
      backgroundColor: null,
    })
      .then(function (canvas) {
        cleanup();
        var imgData = canvas.toDataURL('image/png', 0.95);
        var cw = canvas.width;
        var ch = canvas.height;
        var pdf = new JsPdf({
          unit: 'pt',
          format: 'a4',
          orientation: ch >= cw ? 'portrait' : 'landscape',
          compress: true,
        });
        var pageW = pdf.internal.pageSize.getWidth();
        var pageH = pdf.internal.pageSize.getHeight();
        var margin = 44;
        var maxW = pageW - 2 * margin;
        var maxH = pageH - 2 * margin;
        var ratio = cw / ch;
        var imgW = maxW;
        var imgH = imgW / ratio;
        if (imgH > maxH) {
          imgH = maxH;
          imgW = imgH * ratio;
        }
        var x = margin + (maxW - imgW) / 2;
        var y = margin + (maxH - imgH) / 2;
        pdf.addImage(imgData, 'PNG', x, y, imgW, imgH);
        var filename = safeBase + '.pdf';
        var pdfBlob = null;
        try {
          pdfBlob = pdf.output('blob');
        } catch (err) {
          pdfBlob = null;
        }
        if (!pdfBlob) {
          pdf.save(filename);
          return;
        }
        var file = new File([pdfBlob], filename, { type: 'application/pdf' });
        if (preferExportOfferModal(file)) {
          openExportOffer(pdfBlob, filename, 'application/pdf', 'pdf');
        } else {
          triggerBlobDownload(pdfBlob, filename);
        }
      })
      .catch(function () {
        cleanup();
      });
  }

  function exportCardAsPdf(card) {
    if (!card) return;
    var text = card.quote || '';
    if (typeof html2canvas !== 'function') {
      if (navigator.share) {
        navigator.share({ text: text }).catch(function () {});
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(text).catch(function () {});
      }
      return;
    }
    var wrap = document.createElement('div');
    wrap.className = 'single-card-export-wrap';
    var pairItems = (state.cpRoster.groups[0] && state.cpRoster.groups[0].items) || [];
    var ec0 = pairItems[0] && pairItems[0].color;
    var ec1 = pairItems[1] && pairItems[1].color;
    var c0 = ec0 && /^#[0-9A-Fa-f]{6}$/.test(ec0) ? ec0 : '#BFDBFE';
    var c1 = ec1 && /^#[0-9A-Fa-f]{6}$/.test(ec1) ? ec1 : '#FBCFE8';
    wrap.style.background = 'linear-gradient(160deg, ' + c0 + ' 0%, ' + c1 + ' 100%)';
    wrap.innerHTML =
      '<div class="single-card-export-frame">' + cardShellTall(card, '', '', true) + '</div>';
    document.body.appendChild(wrap);
    var base = sanitizePngBasename(card.quote, 'moment-' + card.id);
    var JsPdf = (window.jspdf && window.jspdf.jsPDF) || window.jsPDF;
    if (!JsPdf) {
      captureAndDownloadPng(wrap, base);
      return;
    }
    downloadCapturedPdfFromElement(wrap, base);
  }

  function renderFolderDetail() {
    var folder = getSelectedFolder();
    if (!folder) return;
    if (dom.folderDetailTitle) dom.folderDetailTitle.textContent = folder.name;
    if (dom.folderAnnotation) dom.folderAnnotation.value = folder.annotation || '';
    if (!dom.folderDetailCards) return;
    var ariaPick = escapeHtml(t('pickFolder'));
    var arrowBtn =
      '<button type="button" class="card-arrow-btn" aria-label="' +
      ariaPick +
      '">' +
      ARROW_SVG +
      '</button>';
    var cards = getCardsByIds(folder.cardIds);
    dom.folderDetailCards.innerHTML = cards
      .map(function (card) {
        var grip = '<div class="folder-card-grip" aria-hidden="true">' + GRIP_SVG + '</div>';
        return cardShellTall(card, grip + arrowBtn, ' folder-draggable-card', true);
      })
      .join('');
    makeFolderCardsDraggable();
    if (state.isExportMode && dom.folderDetailCards) {
      dom.folderDetailCards.querySelectorAll('.folder-draggable-card').forEach(function (el) {
        el.setAttribute('draggable', 'false');
      });
      syncFolderExportStatic();
    }
  }

  function renderFolderPicker() {
    if (!dom.folderPickerList) return;
    dom.folderPickerList.innerHTML = state.folders
      .map(function (f) {
        return (
          '<button type="button" class="folder-item-btn folder-picker-item" data-pick-folder-id="' +
          f.id +
          '">' +
          '<div class="folder-item-btn__name">' +
          escapeHtml(f.name) +
          '</div>' +
          '<div class="folder-item-btn__meta">' +
          t('momentsCount').replace('{n}', f.cardIds.length) +
          '</div></button>'
        );
      })
      .join('');
  }

  function openFolderPicker(cardId) {
    state.pendingCardIdForPicker = cardId;
    if (dom.folderPickerOverlay) {
      dom.folderPickerOverlay.classList.add('is-open');
      dom.folderPickerOverlay.setAttribute('aria-hidden', 'false');
    }
    if ($('folder-picker-heading')) $('folder-picker-heading').textContent = t('pickFolder');
    renderFolderPicker();
  }

  function closeFolderPicker() {
    state.pendingCardIdForPicker = null;
    if (dom.folderPickerOverlay) {
      dom.folderPickerOverlay.classList.remove('is-open');
      dom.folderPickerOverlay.setAttribute('aria-hidden', 'true');
    }
  }

  function addCardToFolderChoice(folderId) {
    var cid = state.pendingCardIdForPicker;
    if (cid == null) return;
    state.folders = state.folders.map(function (f) {
      if (f.id !== folderId) return f;
      var ids = f.cardIds.slice();
      if (ids.indexOf(cid) === -1) ids.push(cid);
      return Object.assign({}, f, { cardIds: ids });
    });
    saveState();
    closeFolderPicker();
    if (state.selectedFolderId === folderId) renderFolderDetail();
  }

  function onCardArrowClick(e) {
    var btn = closestFromEvent(e, '.card-arrow-btn');
    if (!btn) return;
    var cardEl = closestFromEvent(e, '.card--tall');
    if (!cardEl) return;
    var id = parseInt(cardEl.getAttribute('data-card-id'), 10);
    if (isNaN(id)) return;
    e.preventDefault();
    e.stopPropagation();
    openFolderPicker(id);
  }

  function deleteCard(cardId) {
    state.cards = state.cards.filter(function (c) {
      return c.id !== cardId;
    });
    state.folders = state.folders.map(function (f) {
      return Object.assign({}, f, {
        cardIds: (f.cardIds || []).filter(function (id) {
          return id !== cardId;
        }),
      });
    });
    if (state.pendingCardIdForPicker === cardId) closeFolderPicker();
    renderFeed();
    renderTagIndex();
    renderSearchResults();
    if (state.selectedTagForDetail) renderTagDetail();
    if (state.selectedFolderId != null) renderFolderDetail();
    renderFolderList();
    if (dom.folderPickerOverlay && !dom.folderPickerOverlay.hidden) renderFolderPicker();
    saveState();
  }

  function deleteFolder(folderId) {
    state.folders = state.folders.filter(function (f) {
      return f.id !== folderId;
    });
    if (state.selectedFolderId === folderId) closeFolderDetail();
    saveState();
    renderFolderList();
    if (dom.folderPickerOverlay && !dom.folderPickerOverlay.hidden) renderFolderPicker();
    if (state.selectedFolderId != null) renderFolderDetail();
  }

  function startFolderRename(folderId, nameEl) {
    if (!nameEl) return;
    var old = nameEl.textContent;
    nameEl.innerHTML = '';
    var input = document.createElement('input');
    input.type = 'text';
    input.className = 'folder-rename-input';
    input.value = old;
    input.addEventListener('keydown', function (ev) {
      if (ev.key === 'Enter') input.blur();
      if (ev.key === 'Escape') renderFolderList();
    });
    input.addEventListener('blur', function () {
      var v = (input.value || '').trim();
      if (!v) v = old;
      state.folders = state.folders.map(function (f) {
        if (f.id !== folderId) return f;
        return Object.assign({}, f, { name: v });
      });
      saveState();
      renderFolderList();
      if (state.selectedFolderId === folderId) renderFolderDetail();
    });
    nameEl.appendChild(input);
    input.focus();
    input.select();
  }

  function showDeleteConfirm(cardId) {
    var overlay = $('delete-confirm-overlay');
    if (!overlay) return;
    overlay.querySelector('.delete-confirm-msg').textContent = t('deleteConfirmMsg');
    overlay.querySelector('.delete-confirm-ok').textContent = t('deleteConfirmOk');
    overlay.querySelector('.delete-confirm-cancel').textContent = t('deleteConfirmCancel');
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');

    function cleanup() {
      overlay.classList.remove('is-open');
      overlay.setAttribute('aria-hidden', 'true');
      overlay.querySelector('.delete-confirm-ok').removeEventListener('click', onOk);
      overlay.querySelector('.delete-confirm-cancel').removeEventListener('click', onCancel);
      overlay.querySelector('.delete-confirm-backdrop').removeEventListener('click', onCancel);
    }
    function onOk() { cleanup(); deleteCard(cardId); }
    function onCancel() { cleanup(); }

    overlay.querySelector('.delete-confirm-ok').addEventListener('click', onOk);
    overlay.querySelector('.delete-confirm-cancel').addEventListener('click', onCancel);
    overlay.querySelector('.delete-confirm-backdrop').addEventListener('click', onCancel);
  }

  function showSavedOverlay(cardId) {
    var card = getCardById(cardId);
    if (!card) return;

    var overlay = document.createElement('div');
    overlay.className = 'saved-overlay';

    var backdrop = document.createElement('div');
    backdrop.className = 'saved-overlay__backdrop';
    overlay.appendChild(backdrop);

    var modal = document.createElement('div');
    modal.className = 'saved-overlay__card';

    var check = document.createElement('div');
    check.className = 'saved-overlay__check';
    check.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" ' +
      'stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>';
    modal.appendChild(check);

    var title = document.createElement('p');
    title.className = 'saved-overlay__title';
    title.textContent = t('savedTitle');
    modal.appendChild(title);

    var actions = document.createElement('div');
    actions.className = 'saved-overlay__actions';

    var btnShare = document.createElement('button');
    btnShare.type = 'button';
    btnShare.className = 'saved-overlay__btn saved-overlay__btn--share';
    btnShare.textContent = t('folderShare');
    actions.appendChild(btnShare);

    var row = document.createElement('div');
    row.className = 'saved-overlay__row';

    var btnList = document.createElement('button');
    btnList.type = 'button';
    btnList.className = 'saved-overlay__btn saved-overlay__btn--list';
    btnList.textContent = t('pickFolder');
    row.appendChild(btnList);

    var btnDone = document.createElement('button');
    btnDone.type = 'button';
    btnDone.className = 'saved-overlay__btn saved-overlay__btn--done';
    btnDone.textContent = t('folderDone');
    row.appendChild(btnDone);

    actions.appendChild(row);
    modal.appendChild(actions);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    function dismiss() {
      modal.classList.add('is-dismissing');
      setTimeout(function () {
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      }, 180);
    }

    backdrop.addEventListener('click', dismiss);
    btnDone.addEventListener('click', dismiss);

    btnShare.addEventListener('click', function () {
      dismiss();
      setTimeout(function () {
        exportCardAsPdf(card);
      }, 200);
    });

    btnList.addEventListener('click', function () {
      dismiss();
      setTimeout(function () { openFolderPicker(cardId); }, 200);
    });
  }

  function onCardDeleteClick(e) {
    var del = closestFromEvent(e, '.card-delete-btn');
    if (!del) return;
    var cardEl = closestFromEvent(e, '.card--tall');
    var id = parseInt(
      del.getAttribute('data-delete-card-id') ||
        (cardEl && cardEl.getAttribute('data-card-id')),
      10
    );
    if (isNaN(id)) return;
    e.preventDefault();
    e.stopPropagation();
    showDeleteConfirm(id);
  }

  function onCardOpenEditorClick(e) {
    if (closestFromEvent(e, '.card-arrow-btn')) return;
    if (closestFromEvent(e, '.card-delete-btn')) return;
    if (closestFromEvent(e, '.folder-card-grip')) return;
    var cardEl = closestFromEvent(e, '.card--tall');
    if (!cardEl) return;
    var id = parseInt(cardEl.getAttribute('data-card-id'), 10);
    if (isNaN(id)) return;
    openEditorForCard(id);
  }

  function bindCardDelete() {
    if (dom.feed) dom.feed.addEventListener('click', onCardDeleteClick);
    if (dom.searchResultsList) dom.searchResultsList.addEventListener('click', onCardDeleteClick);
    if (dom.tagDetailList) dom.tagDetailList.addEventListener('click', onCardDeleteClick);
    if (dom.folderDetailCards) dom.folderDetailCards.addEventListener('click', onCardDeleteClick);
  }

  function bindCardEditorOpen() {
    if (dom.feed) dom.feed.addEventListener('click', onCardOpenEditorClick);
    if (dom.searchResultsList) dom.searchResultsList.addEventListener('click', onCardOpenEditorClick);
    if (dom.tagDetailList) dom.tagDetailList.addEventListener('click', onCardOpenEditorClick);
    if (dom.folderDetailCards) dom.folderDetailCards.addEventListener('click', onCardOpenEditorClick);
  }

  function openSearch(opts) {
    opts = opts || {};
    if (dom.searchOverlay) {
      dom.searchOverlay.hidden = false;
      dom.searchOverlay.setAttribute('aria-hidden', 'false');
    }
    setNavTab('search');
    renderTagIndex();
    renderSearchResults();
    if (dom.searchInput && opts.focus !== false) dom.searchInput.focus();
  }

  function closeSearch() {
    if (dom.searchOverlay) {
      dom.searchOverlay.hidden = true;
      dom.searchOverlay.setAttribute('aria-hidden', 'true');
    }
    state.searchQuery = '';
    if (dom.searchInput) dom.searchInput.value = '';
    closeTagDetail(false);
    renderSearchResults();
    setNavTab('home');
  }

  function openTagDetail(tag) {
    state.selectedTagForDetail = tag;
    if (!dom.tagDetailOverlay) return;
    dom.tagDetailOverlay.hidden = false;
    dom.tagDetailOverlay.setAttribute('aria-hidden', 'false');
    renderTagDetail();
    requestAnimationFrame(function () {
      dom.tagDetailOverlay.classList.add('is-open');
    });
  }

  function closeTagDetail(animate) {
    if (!dom.tagDetailOverlay) return;
    state.selectedTagForDetail = null;
    dom.tagDetailOverlay.classList.remove('is-open');
    if (animate === false) {
      dom.tagDetailOverlay.hidden = true;
      dom.tagDetailOverlay.setAttribute('aria-hidden', 'true');
      return;
    }
    setTimeout(function () {
      dom.tagDetailOverlay.hidden = true;
      dom.tagDetailOverlay.setAttribute('aria-hidden', 'true');
    }, 280);
  }

  function openFolderList() {
    if (dom.folderListOverlay) {
      dom.folderListOverlay.hidden = false;
      dom.folderListOverlay.setAttribute('aria-hidden', 'false');
    }
    renderFolderList();
  }

  function closeFolderList() {
    if (dom.folderListOverlay) {
      dom.folderListOverlay.hidden = true;
      dom.folderListOverlay.setAttribute('aria-hidden', 'true');
    }
  }

  function openFolderDetail(folderId) {
    setFolderExportMode(false);
    state.selectedFolderId = folderId;
    if (dom.folderDetailOverlay) {
      dom.folderDetailOverlay.hidden = false;
      dom.folderDetailOverlay.setAttribute('aria-hidden', 'false');
    }
    renderFolderDetail();
  }

  function closeFolderDetail() {
    setFolderExportMode(false);
    state.selectedFolderId = null;
    if (dom.folderDetailOverlay) {
      dom.folderDetailOverlay.hidden = true;
      dom.folderDetailOverlay.setAttribute('aria-hidden', 'true');
    }
  }

  function setNavTab(tab) {
    var home = $('btn-home');
    var search = $('btn-search');
    var settings = $('btn-settings');
    if (home) setClass(home, 'bottom-nav__item--active', tab === 'home');
    if (search) setClass(search, 'bottom-nav__item--active', tab === 'search');
    if (settings) setClass(settings, 'bottom-nav__item--active', tab === 'settings');
  }

  function setSettingsOpen(open) {
    if (!dom.settingsOverlay) return;
    setClass(dom.settingsOverlay, 'is-open', open);
    dom.settingsOverlay.setAttribute('aria-hidden', open ? 'false' : 'true');
  }

  function setEditorOpen(open) {
    if (!dom.editorOverlay) return;
    setClass(dom.editorOverlay, 'is-open', open);
    dom.editorOverlay.setAttribute('aria-hidden', open ? 'false' : 'true');
    if (!open && dom.imageTypePanel) dom.imageTypePanel.hidden = true;
    if (open) {
      syncEditorTemplateUI();
      renderEditorQuoteFromChips();
      if (dom.editorQuote) dom.editorQuote.focus();
    }
  }

  function setCpRosterOpen(open) {
    if (!dom.cpRosterOverlay) return;
    setClass(dom.cpRosterOverlay, 'is-open', open);
    dom.cpRosterOverlay.setAttribute('aria-hidden', open ? 'false' : 'true');
    if (open) {
      if (state.cpRoster.groups[0]) state.cpRoster.groups[0].title = state.cpName;
      renderCpRosterEditor();
    }
  }

  function renderCpRosterEditor() {
    if (!dom.cpRosterBody) return;
    var groupTitlePh = [t('rosterGroupCpPh'), t('rosterGroupFriendsPh'), t('rosterGroupOthersPh')];
    dom.cpRosterBody.innerHTML = state.cpRoster.groups
      .map(function (gr, gi) {
        var titlePh = groupTitlePh[gi] != null ? groupTitlePh[gi] : groupTitlePh[2];
        var items = (gr.items || [])
          .map(function (it) {
            var col = it.color && /^#[0-9A-Fa-f]{6}$/.test(it.color) ? it.color : '#DDD6FE';
            return (
              '<div class="cp-roster-item" data-item-id="' +
              it.id +
              '">' +
              '<input type="text" class="cp-roster-emoji" maxlength="12" placeholder="' +
              escapeHtml(t('rosterEmojiPh')) +
              '" value="' +
              escapeHtml(it.emoji || '') +
              '" aria-label="' +
              escapeHtml(t('rosterEmojiPh')) +
              '"/>' +
              '<input type="text" class="cp-roster-name" placeholder="' +
              escapeHtml(t('rosterNamePh')) +
              '" value="' +
              escapeHtml(it.name || '') +
              '"/>' +
              '<input type="color" class="cp-roster-color" value="' +
              escapeHtml(col) +
              '" aria-label="' +
              escapeHtml(t('rosterColor')) +
              '"/>' +
              '<button type="button" class="cp-roster-del" data-del-item="' +
              it.id +
              '" aria-label="' +
              escapeHtml(t('delete')) +
              '">×</button></div>'
            );
          })
          .join('');
        return (
          '<section class="cp-roster-group" data-group-idx="' +
          gi +
          '">' +
          '<input type="text" class="cp-roster-group-title" placeholder="' +
          escapeHtml(titlePh) +
          '" value="' +
          escapeHtml(gr.title || '') +
          '" />' +
          '<div class="cp-roster-items">' +
          items +
          '</div>' +
          '<button type="button" class="cp-roster-add" data-add-group="' +
          gi +
          '">+ ' +
          escapeHtml(t('rosterAddItem')) +
          '</button></section>'
        );
      })
      .join('');
  }

  function removeCpRosterItem(id) {
    state.cpRoster.groups.forEach(function (gr) {
      gr.items = (gr.items || []).filter(function (it) {
        return it.id !== id;
      });
    });
    state.cards = state.cards.map(function (c) {
      var q = (c.quoteFromIds || []).filter(function (x) {
        return x !== id;
      });
      return Object.assign({}, c, { quoteFromIds: q });
    });
    state.editorQuoteFromIds = state.editorQuoteFromIds.filter(function (x) {
      return x !== id;
    });
  }

  function bindCpRosterBody() {
    if (!dom.cpRosterBody || cpRosterBodyBound) return;
    cpRosterBodyBound = true;
    dom.cpRosterBody.addEventListener('input', function (e) {
      var el = e.target;
      var itemRow = el.closest('.cp-roster-item');
      if (itemRow) {
        var id = parseInt(itemRow.getAttribute('data-item-id'), 10);
        if (isNaN(id)) return;
        var it = findRosterItemById(id);
        if (!it) return;
        if (el.classList.contains('cp-roster-emoji')) it.emoji = el.value;
        else if (el.classList.contains('cp-roster-name')) it.name = el.value;
        else if (el.classList.contains('cp-roster-color')) it.color = el.value;
        return;
      }
      var gEl = el.closest('.cp-roster-group');
      if (gEl && el.classList.contains('cp-roster-group-title')) {
        var gi = parseInt(gEl.getAttribute('data-group-idx'), 10);
        if (!isNaN(gi) && state.cpRoster.groups[gi]) {
          state.cpRoster.groups[gi].title = el.value;
          if (gi === 0) {
            state.cpName = (el.value || '').trim() || t('cpDefault');
            if (dom.cpTitleBtn) dom.cpTitleBtn.textContent = state.cpName;
            if (dom.cpTitleInput && !dom.cpTitleInput.hidden) dom.cpTitleInput.value = state.cpName;
            saveState();
          }
        }
      }
    });
    dom.cpRosterBody.addEventListener('click', function (e) {
      var addBtn = closestFromEvent(e, '[data-add-group]');
      if (addBtn && dom.cpRosterBody.contains(addBtn)) {
        var gi = parseInt(addBtn.getAttribute('data-add-group'), 10);
        if (isNaN(gi) || !state.cpRoster.groups[gi]) return;
        state.cpRoster.groups[gi].items = state.cpRoster.groups[gi].items || [];
        state.cpRoster.groups[gi].items.push({
          id: nextCpRosterId(),
          name: '',
          emoji: '',
          color: '#DDD6FE',
        });
        renderCpRosterEditor();
        saveState();
        return;
      }
      var delBtn = closestFromEvent(e, '[data-del-item]');
      if (delBtn && dom.cpRosterBody.contains(delBtn)) {
        var did = parseInt(delBtn.getAttribute('data-del-item'), 10);
        if (isNaN(did)) return;
        removeCpRosterItem(did);
        renderCpRosterEditor();
        saveState();
        renderEditorQuoteFromChips();
        renderFeed();
        renderSearchResults();
        if (state.selectedTagForDetail) renderTagDetail();
        if (state.selectedFolderId != null) renderFolderDetail();
      }
    });
  }

  function renderEditorQuoteFromChips() {
    if (!dom.editorQuoteFromWrap) return;
    state.editorQuoteFromIds = sanitizeQuoteFromIds(state.editorQuoteFromIds);
    var html = state.cpRoster.groups
      .map(function (gr) {
        var chips = (gr.items || [])
          .map(function (it) {
            var sel = state.editorQuoteFromIds.indexOf(it.id) !== -1;
            var bg = (it.color && /^#[0-9A-Fa-f]{6}$/.test(it.color) ? it.color : '#e4e4e7');
            var fg = quoteFromTagTextColor(bg);
            var lab = (it.emoji ? it.emoji + ' ' : '') + (it.name || '…');
            return (
              '<button type="button" class="char-btn char-btn--quote-from' +
              (sel ? ' is-selected' : '') +
              '" data-quote-from-id="' +
              it.id +
              '" aria-pressed="' +
              (sel ? 'true' : 'false') +
              '" style="--qf-bg:' +
              escapeHtml(bg) +
              ';--qf-fg:' +
              escapeHtml(fg) +
              '">' +
              escapeHtml(lab) +
              '</button>'
            );
          })
          .join('');
        if (!chips) return '';
        return (
          '<div class="editor-qf-block">' +
          '<span class="editor-qf-block__label">' +
          escapeHtml(gr.title || '') +
          '</span><div class="char-row char-row--wrap">' +
          chips +
          '</div></div>'
        );
      })
      .join('');
    dom.editorQuoteFromWrap.innerHTML =
      html || '<p class="editor-qf-empty">' + escapeHtml(t('quoteFromEmpty')) + '</p>';
  }

  function resetEditorDraft() {
    state.editingCardId = null;
    state.editorImages = [];
    state.pendingImageType = 'full';
    if (dom.editorQuote) dom.editorQuote.value = '';
    if (dom.editorBody) dom.editorBody.value = '';
    if (dom.editorEpisode) dom.editorEpisode.value = '';
    if (dom.editorTimecode) dom.editorTimecode.value = '';
    if (dom.editorSourceUrl) dom.editorSourceUrl.value = '';
    state.editorQuoteFromIds = [];
    renderEditorImages();
    closeTagSuggest();
    syncEditor();
    resizeEditorTextarea();
    renderEditorQuoteFromChips();
  }

  function openEditorForCard(cardId) {
    var card = getCardById(cardId);
    if (!card || !dom.editorQuote || !dom.editorBody) return;
    var tplOpen = getCardTemplate(card);
    state.editingCardId = card.id;
    state.selectedTemplate = tplOpen;
    syncTemplateLabel();
    if (tplOpen === '文') {
      state.editorImages = [];
    } else {
      state.editorImages = (card.images && card.images.length
        ? card.images
        : card.image
        ? [{ src: card.image, type: card.imageRatio === 'subtitle' ? 'subtitle' : 'full' }]
        : []
      ).map(function (img) {
        if (typeof img === 'string') return { src: img, type: 'full' };
        return { src: img.src, type: img.type === 'subtitle' ? 'subtitle' : 'full' };
      });
    }
    dom.editorQuote.value = card.quote || '';
    dom.editorBody.value =
      card.text || ((card.tags || []).map(function (tg) { return '#' + tg + '#'; }).join(' '));
    if (dom.editorEpisode) dom.editorEpisode.value = card.episode || '';
    if (dom.editorTimecode) dom.editorTimecode.value = card.timecode || '';
    if (dom.editorSourceUrl) dom.editorSourceUrl.value = tplOpen === '图文' ? card.sourceUrl || '' : '';
    state.editorQuoteFromIds = sanitizeQuoteFromIds(card.quoteFromIds || []);
    renderEditorImages();
    syncEditor();
    resizeEditorTextarea();
    closeTagSuggest();
    setEditorOpen(true);
  }

  function setTemplateOpen(open) {
    if (!dom.templateOverlay) return;
    setClass(dom.templateOverlay, 'is-open', open);
    dom.templateOverlay.setAttribute('aria-hidden', open ? 'false' : 'true');
  }

  function syncTemplateLabel() {
    var span = dom.editorModeBtn && dom.editorModeBtn.querySelector('span');
    if (span) span.textContent = state.selectedTemplate;
  }

  function buildHighlightHtml(text) {
    if (!text) return '';
    var regex = /#([^#\s]+)#/g;
    var parts = [];
    var last = 0;
    var m;
    while ((m = regex.exec(text)) !== null) {
      if (m.index > last) parts.push(escapeHtml(text.slice(last, m.index)));
      parts.push('<span class="hl-tag">#' + escapeHtml(m[1]) + '#</span>');
      last = m.index + m[0].length;
    }
    if (last < text.length) parts.push(escapeHtml(text.slice(last)));
    return parts.join('');
  }

  function syncEditor() {
    if (!dom.editorBody || !dom.editorHighlight) return;
    var value = dom.editorBody.value || '';
    dom.editorHighlight.innerHTML = buildHighlightHtml(value);
    if (value) dom.editorBody.classList.add('has-text');
    else dom.editorBody.classList.remove('has-text');
    dom.editorHighlight.style.minHeight = dom.editorBody.scrollHeight + 'px';
    dom.editorHighlight.style.transform = 'translateY(-' + dom.editorBody.scrollTop + 'px)';

    var tags = extractTags(value);
    if (!dom.editorTagPreview) return;
    if (!tags.length) {
      dom.editorTagPreview.hidden = true;
      dom.editorTagPreview.innerHTML = '';
    } else {
      dom.editorTagPreview.hidden = false;
      dom.editorTagPreview.innerHTML = tags
        .map(function (tag) {
          return (
            '<span class="tag-preview__pill">#' +
            escapeHtml(tag) +
            '#<button type="button" class="tag-delete-btn" data-tag="' +
            escapeHtml(tag) +
            '" aria-label="' +
            escapeHtml(t('delete')) +
            '">×</button></span>'
          );
        })
        .join('');
    }
  }

  function resizeEditorTextarea() {
    if (!dom.editorBody) return;
    dom.editorBody.style.height = 'auto';
    dom.editorBody.style.height = dom.editorBody.scrollHeight + 'px';
    syncEditor();
  }

  var tagSuggestEl = null;

  function isClosingHash(val, hashIdx) {
    var j = hashIdx - 1;
    while (j >= 0) {
      var c = val.charAt(j);
      if (c === '#') {
        var mid = val.slice(j + 1, hashIdx);
        if (mid.length > 0 && mid.indexOf('#') === -1 && !/\s/.test(mid)) return true;
        return false;
      }
      if (/\s/.test(c)) return false;
      j--;
    }
    return false;
  }

  function getTagPrefix() {
    if (!dom.editorBody) return null;
    var pos = dom.editorBody.selectionStart;
    if (pos !== dom.editorBody.selectionEnd) return null;
    var val = dom.editorBody.value;
    var i = pos - 1;
    while (i >= 0 && val.charAt(i) !== '#' && !/[\s\n\r]/.test(val.charAt(i))) i--;
    if (i < 0 || /[\s\n\r]/.test(val.charAt(i))) return null;
    var prefix = val.slice(i + 1, pos);
    if (prefix.indexOf('#') !== -1) return null;
    if (isClosingHash(val, i)) return null;
    return { start: i, prefix: prefix };
  }

  function closeTagSuggest() {
    if (tagSuggestEl) tagSuggestEl.hidden = true;
  }

  function updateTagSuggest() {
    if (!tagSuggestEl) return;
    var info = getTagPrefix();
    if (!info) { closeTagSuggest(); return; }
    var tags = getAllTags();
    var pf = info.prefix.toLowerCase();
    var hits = tags.filter(function (tg) {
      return !pf || tg.toLowerCase().indexOf(pf) === 0;
    });
    if (!hits.length) { closeTagSuggest(); return; }
    if (hits.length > 8) hits = hits.slice(0, 8);
    tagSuggestEl.innerHTML = hits.map(function (tg) {
      return '<button type="button" class="tag-suggest__item" data-tag="' +
        escapeHtml(tg) + '">#' + escapeHtml(tg) + '#</button>';
    }).join('');
    tagSuggestEl.hidden = false;
  }

  function insertTagSuggestion(tag) {
    var info = getTagPrefix();
    if (!info || !dom.editorBody) return;
    var val = dom.editorBody.value;
    var sel = dom.editorBody.selectionStart;
    var ins = '#' + tag + '#';
    dom.editorBody.value = val.slice(0, info.start) + ins + val.slice(sel);
    var np = info.start + ins.length;
    closeTagSuggest();
    dom.editorBody.focus();
    resizeEditorTextarea();
    requestAnimationFrame(function () {
      if (!dom.editorBody) return;
      dom.editorBody.selectionStart = np;
      dom.editorBody.selectionEnd = np;
      try {
        dom.editorBody.setSelectionRange(np, np);
      } catch (e) {}
    });
  }

  function renderEditorImages() {
    if (!dom.editorImageSlots) return;
    if (!state.editorImages.length) {
      dom.editorImageSlots.hidden = true;
      dom.editorImageSlots.innerHTML = '';
      return;
    }
    dom.editorImageSlots.hidden = false;
    dom.editorImageSlots.innerHTML = state.editorImages
      .map(function (item, i) {
        var src = typeof item === 'string' ? item : item.src;
        var type = typeof item === 'string' ? 'full' : item.type;
        var ratioClass = type === 'subtitle' ? 'ratio-subtitle' : 'ratio-default';
        return (
          '<div class="editor-image-slot ' +
          ratioClass +
          '">' +
          '<img class="editor-slot-img" src="' +
          escapeHtml(src) +
          '" alt=""/>' +
          '<button type="button" class="editor-image-remove" data-image-index="' +
          i +
          '" aria-label="' +
          escapeHtml(t('delete')) +
          '">×</button>' +
          '</div>'
        );
      })
      .join('');
  }

  function handleEditorComplete() {
    if (!dom.editorQuote || !dom.editorBody) return;
    var quotation = dom.editorQuote.value.trim();
    var body = dom.editorBody.value.trim();
    if (!quotation && !body) return;

    var tags = extractTags(body);
    var ep = dom.editorEpisode ? dom.editorEpisode.value.trim() : '';
    var tc = dom.editorTimecode ? dom.editorTimecode.value.trim() : '';
    var srcUrl = dom.editorSourceUrl ? dom.editorSourceUrl.value.trim() : '';
    var tpl = state.selectedTemplate;
    var imagesArr = state.editorImages.map(function (it) {
      if (typeof it === 'string') return { src: it, type: 'full' };
      return { src: it.src, type: it.type === 'subtitle' ? 'subtitle' : 'full' };
    });
    var imgFirst =
      (state.editorImages[0] && (state.editorImages[0].src || state.editorImages[0])) ||
      PLACEHOLDER_IMAGES[0];
    if (tpl === '文') {
      imagesArr = [];
      imgFirst = '';
    }
    var payload = {
      template: tpl,
      image: imgFirst,
      images: imagesArr,
      quote: quotation || body.substring(0, 50),
      tags: tags,
      text: body,
      episode: ep,
      timecode: tc,
      sourceUrl: tpl === '图文' ? srcUrl : '',
      quoteFromIds: sanitizeQuoteFromIds(state.editorQuoteFromIds),
    };
    var isNew = state.editingCardId == null;
    var newId;
    if (isNew) {
      newId = Date.now();
      state.cards.unshift(Object.assign({ id: newId }, payload));
    } else {
      state.cards = state.cards.map(function (c) {
        if (c.id !== state.editingCardId) return c;
        return Object.assign({}, c, payload);
      });
    }

    resetEditorDraft();
    setEditorOpen(false);
    saveState();
    renderFeed();
    renderTagIndex();
    renderSearchResults();
    if (state.selectedTagForDetail) renderTagDetail();
    if (state.selectedFolderId != null) renderFolderDetail();

    if (isNew) showSavedOverlay(newId);
  }

  function createNewFolder() {
    var f = {
      id: Date.now(),
      name: t('newFolderName') + ' ' + (state.folders.length + 1),
      cardIds: [],
      annotation: '',
    };
    state.folders = state.folders.concat([f]);
    saveState();
    renderFolderList();
  }

  function updateFolderAnnotation(folderId, text) {
    state.folders = state.folders.map(function (f) {
      if (f.id !== folderId) return f;
      return Object.assign({}, f, { annotation: text });
    });
    saveState();
  }

  function reorderCardsInFolder(folderId, newOrder) {
    state.folders = state.folders.map(function (f) {
      if (f.id !== folderId) return f;
      return Object.assign({}, f, { cardIds: newOrder });
    });
    saveState();
    renderFolderDetail();
  }

  function startCpRename() {
    state.editingName = true;
    if (!dom.cpTitleBtn || !dom.cpTitleInput) return;
    dom.cpTitleBtn.hidden = true;
    dom.cpTitleInput.hidden = false;
    dom.cpTitleInput.value = state.cpName;
    dom.cpTitleInput.focus();
    dom.cpTitleInput.select();
  }

  function bindCpTitle() {
    if (dom.cpTitleBtn) {
      dom.cpTitleBtn.addEventListener('pointerdown', function () {
        cpTitleLongPress = false;
        if (cpTitlePressTimer) clearTimeout(cpTitlePressTimer);
        cpTitlePressTimer = setTimeout(function () {
          cpTitleLongPress = true;
          startCpRename();
        }, 480);
      });
      dom.cpTitleBtn.addEventListener('pointerup', function () {
        if (cpTitlePressTimer) clearTimeout(cpTitlePressTimer);
        cpTitlePressTimer = null;
      });
      dom.cpTitleBtn.addEventListener('pointerleave', function () {
        if (cpTitlePressTimer) clearTimeout(cpTitlePressTimer);
        cpTitlePressTimer = null;
      });
      dom.cpTitleBtn.addEventListener('click', function (e) {
        if (cpTitleLongPress) {
          e.preventDefault();
          cpTitleLongPress = false;
          return;
        }
        setCpRosterOpen(true);
      });
    }
    if (dom.cpTitleInput) {
      dom.cpTitleInput.addEventListener('blur', function () {
        state.cpName = dom.cpTitleInput.value.trim() || t('cpDefault');
        dom.cpTitleInput.hidden = true;
        if (dom.cpTitleBtn) {
          dom.cpTitleBtn.hidden = false;
          dom.cpTitleBtn.textContent = state.cpName;
        }
        state.editingName = false;
        if (state.cpRoster.groups[0]) state.cpRoster.groups[0].title = state.cpName;
        if (dom.cpRosterOverlay && dom.cpRosterOverlay.classList.contains('is-open')) renderCpRosterEditor();
        saveState();
      });
      dom.cpTitleInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') dom.cpTitleInput.blur();
      });
    }
  }

  function bindLangToggle() {
    document.querySelectorAll('.lang-toggle__btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var loc = btn.getAttribute('data-locale');
        if (loc !== 'zh' && loc !== 'en') return;
        state.currentLang = loc;
        document.querySelectorAll('.lang-toggle__btn').forEach(function (b) {
          setClass(b, 'is-active', b.getAttribute('data-locale') === loc);
        });
        syncDemoContentToCurrentLang();
        applyUiStrings();
        document.documentElement.lang = state.currentLang === 'zh' ? 'zh-CN' : 'en';
        renderFolderList();
        renderSearchResults();
        renderFeed();
        renderTagIndex();
        syncTemplateLabel();
        if ($('folder-picker-heading')) $('folder-picker-heading').textContent = t('pickFolder');
        if (dom.folderPickerOverlay && dom.folderPickerOverlay.classList.contains('is-open')) renderFolderPicker();
        if (dom.editorOverlay && dom.editorOverlay.classList.contains('is-open')) {
          renderEditorQuoteFromChips();
        }
        if (dom.cpRosterOverlay && dom.cpRosterOverlay.classList.contains('is-open')) {
          renderCpRosterEditor();
        }
        if (state.selectedTagForDetail) renderTagDetail();
        if (state.selectedFolderId != null) renderFolderDetail();
        saveState();
      });
    });
  }

  var onboardingBound = false;
  function bindOnboarding() {
    if (onboardingBound) return;
    onboardingBound = true;
    function dismissOnboarding() {
      if (!dom.onboardingOverlay) return;
      dom.onboardingOverlay.classList.remove('is-open');
      dom.onboardingOverlay.setAttribute('aria-hidden', 'true');
    }
    if (dom.onboardingCta) dom.onboardingCta.addEventListener('click', dismissOnboarding);
    if (dom.onboardingBackdrop) dom.onboardingBackdrop.addEventListener('click', dismissOnboarding);
  }

  function showOnboardingOnLaunch() {
    if (!dom.onboardingOverlay) return;
    dom.onboardingOverlay.classList.add('is-open');
    dom.onboardingOverlay.setAttribute('aria-hidden', 'false');
  }

  function bindNav() {
    if ($('btn-home'))
      $('btn-home').addEventListener('click', function () {
        setSettingsOpen(false);
        closeFolderPicker();
        closeSearch();
        closeFolderList();
        closeFolderDetail();
        setNavTab('home');
      });
    if ($('btn-search'))
      $('btn-search').addEventListener('click', function () {
        openSearch({ aboveFolders: false });
      });
    if ($('btn-settings'))
      $('btn-settings').addEventListener('click', function () {
        setSettingsOpen(true);
        setNavTab('settings');
      });
  }

  function bindOverlays() {
    if ($('btn-more'))
      $('btn-more').addEventListener('click', function () {
        setSortModalOpen(true);
      });
    if (dom.sortBackdrop)
      dom.sortBackdrop.addEventListener('click', function () {
        setSortModalOpen(false);
      });
    if (dom.sortOverlay)
      dom.sortOverlay.addEventListener('click', function (e) {
        var b = closestFromEvent(e, '[data-sort-opt]');
        if (!b || !dom.sortOverlay.contains(b)) return;
        e.preventDefault();
        handleSortOption(b.getAttribute('data-sort-opt'));
      });
    if ($('btn-menu'))
      $('btn-menu').addEventListener('click', function () {
        openFolderList();
      });
    if ($('btn-close-search'))
      $('btn-close-search').addEventListener('click', function () {
        closeSearch();
      });
    if ($('btn-close-folderList'))
      $('btn-close-folderList').addEventListener('click', function () {
        closeFolderList();
      });
    if ($('folder-export-enter'))
      $('folder-export-enter').addEventListener('click', function () {
        setFolderExportMode(true);
      });
    if ($('folder-export-exit'))
      $('folder-export-exit').addEventListener('click', function () {
        setFolderExportMode(false);
      });
    if ($('folder-export-share'))
      $('folder-export-share').addEventListener('click', function () {
        runFolderExportImage();
      });
    if ($('folder-export-emoji-fab'))
      $('folder-export-emoji-fab').addEventListener('click', function () {
        setFolderEmojiSheetOpen(true);
      });
    if ($('folder-emoji-sheet-backdrop'))
      $('folder-emoji-sheet-backdrop').addEventListener('click', function () {
        setFolderEmojiSheetOpen(false);
      });
    var feg = $('folder-emoji-grid');
    if (feg)
      feg.addEventListener('click', function (e) {
        var b = closestFromEvent(e, '.folder-emoji-cell');
        if (!b || !feg.contains(b)) return;
        var em = b.getAttribute('data-emoji');
        if (!em) return;
        state.selectedEmoji = em;
        syncExportEmojiBg();
        setFolderEmojiSheetOpen(false);
      });
    if ($('folder-detail-done'))
      $('folder-detail-done').addEventListener('click', function () {
        closeFolderDetail();
      });
    if ($('settings-backdrop'))
      $('settings-backdrop').addEventListener('click', function () {
        setSettingsOpen(false);
        setNavTab('home');
      });
    if ($('fab-open-editor'))
      $('fab-open-editor').addEventListener('click', function () {
        resetEditorDraft();
        setEditorOpen(true);
      });
    if ($('editor-backdrop'))
      $('editor-backdrop').addEventListener('click', function () {
        setEditorOpen(false);
      });
    if ($('editor-done'))
      $('editor-done').addEventListener('click', handleEditorComplete);
    if ($('editor-add-image'))
      $('editor-add-image').addEventListener('click', function () {
        if (dom.imageTypePanel) dom.imageTypePanel.hidden = !dom.imageTypePanel.hidden;
      });
    if ($('editor-mode-btn'))
      $('editor-mode-btn').addEventListener('click', function () {
        setTemplateOpen(true);
      });
    if ($('template-backdrop'))
      $('template-backdrop').addEventListener('click', function () {
        setTemplateOpen(false);
      });
    if ($('btn-create-folder'))
      $('btn-create-folder').addEventListener('click', createNewFolder);

    if ($('cp-roster-backdrop'))
      $('cp-roster-backdrop').addEventListener('click', function () {
        setCpRosterOpen(false);
        saveState();
        renderEditorQuoteFromChips();
        renderFeed();
        if (state.selectedFolderId != null) renderFolderDetail();
        renderSearchResults();
        if (state.selectedTagForDetail) renderTagDetail();
      });
    if ($('cp-roster-done'))
      $('cp-roster-done').addEventListener('click', function () {
        setCpRosterOpen(false);
        saveState();
        renderEditorQuoteFromChips();
        renderFeed();
        if (state.selectedFolderId != null) renderFolderDetail();
        renderSearchResults();
        if (state.selectedTagForDetail) renderTagDetail();
      });

    if (dom.foldersList)
      dom.foldersList.addEventListener('click', function (e) {
        var b = closestFromEvent(e, '.folder-item-btn');
        if (!b || !dom.foldersList.contains(b)) return;
        var id = parseInt(b.getAttribute('data-folder-id'), 10);
        var te = eventTargetElement(e);
        if (te && te.tagName === 'INPUT') return;
        if (closestFromEvent(e, '.folder-delete-btn')) {
          e.preventDefault();
          e.stopPropagation();
          deleteFolder(id);
          return;
        }
        if (closestFromEvent(e, '.folder-item-btn__name') && (!te || te.tagName !== 'INPUT')) {
          e.preventDefault();
          e.stopPropagation();
          startFolderRename(id, closestFromEvent(e, '.folder-item-btn__name'));
          return;
        }
        closeFolderList();
        openFolderDetail(id);
      });

    if ($('tag-detail-backdrop'))
      $('tag-detail-backdrop').addEventListener('click', function () {
        closeTagDetail(true);
      });
    if ($('tag-detail-done'))
      $('tag-detail-done').addEventListener('click', function () {
        closeTagDetail(true);
      });

    if ($('folder-picker-backdrop'))
      $('folder-picker-backdrop').addEventListener('click', closeFolderPicker);
    if ($('folder-picker-cancel'))
      $('folder-picker-cancel').addEventListener('click', closeFolderPicker);
    if (dom.folderPickerList)
      dom.folderPickerList.addEventListener('click', function (e) {
        var b = closestFromEvent(e, '[data-pick-folder-id]');
        if (!b || !dom.folderPickerList.contains(b)) return;
        var fid = parseInt(b.getAttribute('data-pick-folder-id'), 10);
        if (!isNaN(fid)) addCardToFolderChoice(fid);
      });
    bindExportOffer();
  }

  function bindCardArrows() {
    if (dom.feed) dom.feed.addEventListener('click', onCardArrowClick);
    if (dom.searchResultsList) dom.searchResultsList.addEventListener('click', onCardArrowClick);
    if (dom.tagDetailList) dom.tagDetailList.addEventListener('click', onCardArrowClick);
  }

  function bindSearch() {
    if (dom.searchInput) {
      dom.searchInput.addEventListener('input', function () {
        state.searchQuery = dom.searchInput.value;
        renderSearchResults();
      });
    }
    if (dom.tagIndexList) {
      dom.tagIndexList.addEventListener('click', function (e) {
        var btn = closestFromEvent(e, '.pill-btn');
        if (!btn || !dom.tagIndexList.contains(btn)) return;
        var tag = btn.getAttribute('data-tag');
        if (tag) openTagDetail(tag);
      });
    }
  }

  function bindFolderDrag() {
    if (!dom.folderDetailCards) return;
    dom.folderDetailCards.addEventListener('dragstart', function (e) {
      var wrap = closestFromEvent(e, '.folder-draggable-card');
      if (!wrap) return;
      var id = parseInt(wrap.getAttribute('data-card-id'), 10);
      if (!isNaN(id)) {
        state.draggedCardId = id;
        try {
          e.dataTransfer.setData('text/plain', String(id));
        } catch (err) {}
        e.dataTransfer.effectAllowed = 'move';
      }
    });
    dom.folderDetailCards.addEventListener('dragover', function (e) {
      if (state.draggedCardId == null) return;
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
    });
    dom.folderDetailCards.addEventListener('drop', function (e) {
      if (state.draggedCardId == null) return;
      e.preventDefault();
      var folder = getSelectedFolder();
      if (!folder) {
        state.draggedCardId = null;
        return;
      }
      var draggedId = state.draggedCardId;
      var order = folder.cardIds.slice();
      var di = order.indexOf(draggedId);
      if (di === -1) {
        state.draggedCardId = null;
        return;
      }
      var wrap = closestFromEvent(e, '.folder-draggable-card');
      if (wrap) {
        var targetId = parseInt(wrap.getAttribute('data-card-id'), 10);
        if (isNaN(targetId) || draggedId === targetId) {
          state.draggedCardId = null;
          return;
        }
        var ti = order.indexOf(targetId);
        if (ti === -1) {
          state.draggedCardId = null;
          return;
        }
        order.splice(di, 1);
        if (di < ti) ti -= 1;
        order.splice(ti, 0, draggedId);
      } else {
        order.splice(di, 1);
        order.push(draggedId);
      }
      reorderCardsInFolder(folder.id, order);
      state.draggedCardId = null;
    });
    dom.folderDetailCards.addEventListener('dragend', function () {
      state.draggedCardId = null;
    });
  }

  function bindEditor() {
    if (dom.editorSourceUrl) {
      dom.editorSourceUrl.addEventListener('input', applyTimeFromSourceUrlInput);
      dom.editorSourceUrl.addEventListener('paste', function () {
        setTimeout(applyTimeFromSourceUrlInput, 0);
      });
    }
    document.querySelectorAll('.image-type-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        state.pendingImageType = btn.getAttribute('data-image-type') || 'full';
        if (dom.imageTypePanel) dom.imageTypePanel.hidden = true;
        if (dom.fileInput) dom.fileInput.click();
      });
    });
    document.addEventListener('click', function (e) {
      if (!dom.imageTypePanel || dom.imageTypePanel.hidden) return;
      if (closestFromEvent(e, '#editor-add-image') || closestFromEvent(e, '#image-type-panel')) return;
      dom.imageTypePanel.hidden = true;
    });

    var tsShell = dom.editorBody && dom.editorBody.closest('.textarea-shell');
    if (tsShell) {
      tagSuggestEl = document.createElement('div');
      tagSuggestEl.className = 'tag-suggest';
      tagSuggestEl.hidden = true;
      tsShell.parentNode.insertBefore(tagSuggestEl, tsShell.nextSibling);

      dom.editorBody.addEventListener('input', updateTagSuggest);
      dom.editorBody.addEventListener('compositionend', updateTagSuggest);
      dom.editorBody.addEventListener('click', updateTagSuggest);
      dom.editorBody.addEventListener('keyup', function (e) {
        if (/^Arrow/.test(e.key)) updateTagSuggest();
      });
      dom.editorBody.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && tagSuggestEl && !tagSuggestEl.hidden) {
          e.preventDefault();
          closeTagSuggest();
        }
      });
      tagSuggestEl.addEventListener('mousedown', function (e) {
        e.preventDefault();
      });
      tagSuggestEl.addEventListener('click', function (e) {
        var btn = closestFromEvent(e, '.tag-suggest__item');
        if (!btn) return;
        var tg = btn.getAttribute('data-tag');
        if (tg) insertTagSuggestion(tg);
      });
    }
    document.addEventListener('click', function (e) {
      if (!tagSuggestEl || tagSuggestEl.hidden) return;
      if (closestFromEvent(e, '.tag-suggest') || closestFromEvent(e, '.textarea-shell')) return;
      closeTagSuggest();
    });

    if (dom.editorQuoteFromWrap) {
      dom.editorQuoteFromWrap.addEventListener('click', function (e) {
        var b = closestFromEvent(e, '[data-quote-from-id]');
        if (!b || !dom.editorQuoteFromWrap.contains(b)) return;
        var qid = parseInt(b.getAttribute('data-quote-from-id'), 10);
        if (isNaN(qid)) return;
        var ix = state.editorQuoteFromIds.indexOf(qid);
        if (ix === -1) state.editorQuoteFromIds.push(qid);
        else state.editorQuoteFromIds.splice(ix, 1);
        renderEditorQuoteFromChips();
      });
    }
    if (dom.editorBody) {
      dom.editorBody.addEventListener('input', function () {
        resizeEditorTextarea();
      });
      dom.editorBody.addEventListener('scroll', syncEditor);
    }
    if (dom.folderAnnotation) {
      dom.folderAnnotation.addEventListener('input', function () {
        var folder = getSelectedFolder();
        if (folder) updateFolderAnnotation(folder.id, dom.folderAnnotation.value);
      });
    }

    document.querySelectorAll('.template-pick').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var tpl = btn.getAttribute('data-template');
        if (tpl) state.selectedTemplate = tpl;
        syncTemplateLabel();
        syncEditorTemplateUI();
        setTemplateOpen(false);
      });
    });

    if (dom.fileInput) {
      dom.fileInput.addEventListener('change', function () {
        var files = this.files;
        if (!files || !files.length) return;
        var n = files.length;
        var done = 0;
        for (var i = 0; i < files.length; i++) {
          (function (file) {
            var r = new FileReader();
            r.onload = function () {
              state.editorImages.push({ src: r.result, type: state.pendingImageType });
              done++;
              if (done >= n) renderEditorImages();
            };
            r.readAsDataURL(file);
          })(files[i]);
        }
        this.value = '';
      });
    }

    if (dom.editorTagPreview) {
      dom.editorTagPreview.addEventListener('click', function (e) {
        var b = closestFromEvent(e, '.tag-delete-btn');
        if (!b) return;
        var tag = b.getAttribute('data-tag');
        if (!tag || !dom.editorBody) return;
        e.preventDefault();
        e.stopPropagation();
        var v = dom.editorBody.value || '';
        var re = new RegExp('#' + escapeRegExp(tag) + '#', 'g');
        dom.editorBody.value = v.replace(re, '');
        resizeEditorTextarea();
      });
    }

    if (dom.editorImageSlots) {
      dom.editorImageSlots.addEventListener('click', function (e) {
        var b = closestFromEvent(e, '.editor-image-remove');
        if (!b) return;
        var idx = parseInt(b.getAttribute('data-image-index'), 10);
        if (isNaN(idx)) return;
        e.preventDefault();
        e.stopPropagation();
        state.editorImages = state.editorImages.filter(function (_, i) {
          return i !== idx;
        });
        renderEditorImages();
      });
    }
  }

  function makeFolderCardsDraggable() {
    if (!dom.folderDetailCards) return;
    dom.folderDetailCards.querySelectorAll('.folder-draggable-card').forEach(function (el) {
      el.setAttribute('draggable', 'true');
    });
  }

  function cacheDom() {
    dom.feed = $('feed');
    dom.cpTitleBtn = $('cp-title-btn');
    dom.cpTitleInput = $('cp-title-input');
    dom.searchOverlay = $('search-overlay');
    dom.searchInput = $('search-input');
    dom.tagIndexList = $('tag-index-list');
    dom.searchResultsWrap = $('search-results-wrap');
    dom.searchResultsTitle = $('search-results-title');
    dom.searchResultsList = $('search-results-list');
    dom.tagDetailOverlay = $('tag-detail-overlay');
    dom.tagDetailList = $('tag-detail-list');
    dom.tagDetailTitle = $('tag-detail-title');
    dom.folderListOverlay = $('folderList-overlay');
    dom.foldersList = $('folders-list');
    dom.folderDetailOverlay = $('folderDetail-overlay');
    dom.folderDetailTitle = $('folder-detail-title');
    dom.folderAnnotation = $('folder-annotation');
    dom.folderDetailCards = $('folder-detail-cards');
    dom.sortOverlay = $('sort-overlay');
    dom.sortBackdrop = $('sort-backdrop');
    dom.editorPanel = $('editor-panel');
    dom.editorOverlay = $('editor-overlay');
    dom.editorEpisode = $('editor-episode');
    dom.editorTimecode = $('editor-timecode');
    dom.editorSourceUrl = $('editor-source-url');
    dom.editorQuote = $('editor-quote');
    dom.editorBody = $('editor-body');
    dom.editorHighlight = $('editor-highlight');
    dom.editorTagPreview = $('editor-tag-preview');
    dom.editorImageSlots = $('editor-image-slots');
    dom.imageTypePanel = $('image-type-panel');
    dom.editorModeBtn = $('editor-mode-btn');
    dom.settingsOverlay = $('settings-overlay');
    dom.templateOverlay = $('template-overlay');
    dom.folderPickerOverlay = $('folder-picker-overlay');
    dom.folderPickerList = $('folder-picker-list');
    dom.fileInput = $('editor-file-input');
    dom.cpRosterOverlay = $('cp-roster-overlay');
    dom.cpRosterBody = $('cp-roster-body');
    dom.editorQuoteFromWrap = $('editor-quote-from-wrap');
    dom.onboardingOverlay = $('onboarding-overlay');
    dom.onboardingBackdrop = $('onboarding-backdrop');
    dom.onboardingCta = $('onboarding-cta');
  }

  function init() {
    loadState();
    ensureCpRosterShape();
    migrateCardsQuoteFrom();
    if (!hasStoredState()) {
      seedFirstVisitState();
    } else {
      migrateLegacyDemoMarkers();
    }
    syncDemoContentToCurrentLang();
    cacheDom();
    document.documentElement.lang = state.currentLang === 'zh' ? 'zh-CN' : 'en';
    if (dom.cpTitleBtn) dom.cpTitleBtn.textContent = state.cpName;
    document.querySelectorAll('.lang-toggle__btn').forEach(function (b) {
      setClass(b, 'is-active', b.getAttribute('data-locale') === state.currentLang);
    });
    applyUiStrings();
    if (dom.cpTitleBtn) dom.cpTitleBtn.textContent = state.cpName;
    bindCpTitle();
    bindCpRosterBody();
    bindLangToggle();
    bindOnboarding();
    bindNav();
    bindOverlays();
    bindSearch();
    bindCardArrows();
    bindCardDelete();
    bindCardEditorOpen();
    bindFolderDrag();
    bindEditor();
    syncTemplateLabel();
    syncEditorTemplateUI();
    renderFeed();
    renderTagIndex();
    syncEditor();
    resizeEditorTextarea();
    requestAnimationFrame(function () {
      requestAnimationFrame(showOnboardingOnLaunch);
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
