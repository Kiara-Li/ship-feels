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
      cpDefault: 'CP Name',
      delete: '删除',
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
      tpl1m: 'Anime / film / TV',
      tpl2n: 'Text',
      tpl2m: 'Novels',
      tpl3n: 'Image',
      tpl3m: 'Comics',
      tagDone: 'Done',
      pickFolder: 'Add to list',
      momentsCount: '{n} moments',
      newFolderName: 'List',
      cpDefault: 'CP Name',
      delete: 'Delete',
    },
  };

  var SAMPLE_CARDS = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1681757265572-020257b75511?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      quote: '最后发送出去会是什么样子的我会成功吗',
      tags: ['心动', '甜蜜', '日常'],
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1696697812492-7f93a1ad4d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      quote: '他的眼神让我整个人都融化了，这是什么神仙moment！',
      tags: ['眼神杀', '心动时刻'],
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1612180134806-ff3cfd50cc45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      quote: '两个人的默契真的绝了，不愧是我的本命CP',
      tags: ['默契', '双向奔赴', '甜'],
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1732644144489-b1974816d3c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      quote: '这个拥抱我可以反复看一百遍都不够，太甜了太甜了！',
      tags: ['拥抱', '甜', '名场面'],
    },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1763866517746-d78f1609c723?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      quote: '你知道吗，从那一刻起我就知道，你就是我要找的那个人',
      tags: ['告白', '心动', '刀'],
    },
  ];

  var PLACEHOLDER_IMAGES = [
    'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400',
    'https://images.unsplash.com/photo-1557683316-973673baf926?w=400',
    'https://images.unsplash.com/photo-1556139943-4bdca53adf1e?w=400',
  ];

  var state = {
    currentLang: 'zh',
    cpName: 'CP Name',
    editingName: false,
    cards: SAMPLE_CARDS.slice(),
    folders: [
      { id: 1, name: '新文-生长痛用到的', cardIds: [1, 2], annotation: '' },
      { id: 2, name: 'HP Paro', cardIds: [3, 4, 5], annotation: '' },
      { id: 3, name: '快穿 Paro', cardIds: [1, 3, 4], annotation: '' },
    ],
    searchQuery: '',
    selectedTagForDetail: null,
    selectedFolderId: null,
    draggedCardId: null,
    selectedTemplate: '图文',
    editorImages: [],
    selectedChar: null,
    pendingCardIdForPicker: null,
    editingCardId: null,
  };

  function $(id) {
    return document.getElementById(id);
  }

  var dom = {};

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
    if (fa) fa.placeholder = t('annotationPh');
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
    var nf = $('btn-create-folder');
    if (nf) {
      for (var j = nf.childNodes.length - 1; j >= 0; j--) {
        if (nf.childNodes[j].nodeType === 3) {
          nf.childNodes[j].textContent = ' ' + t('newFolderBtn');
          break;
        }
      }
    }
    var fab = $('fab-open-editor');
    if (fab) fab.setAttribute('aria-label', t('fabAria'));
  }

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var d = JSON.parse(raw);
      if (d.cards && d.cards.length) state.cards = d.cards;
      if (d.folders && d.folders.length) state.folders = d.folders;
      if (d.cpName) state.cpName = d.cpName;
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
          currentLang: state.currentLang,
        })
      );
    } catch (e) {}
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function escapeRegExp(s) {
    return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
    return Object.keys(tagSet).sort(function (a, b) {
      return a.localeCompare(b, 'zh-CN');
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

  function tagsHtml(tags) {
    return (tags || [])
      .map(function (tag) {
        return '<span class="card__tag">#' + escapeHtml(tag) + '</span>';
      })
      .join('');
  }

  var ARROW_SVG =
    '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';
  var GRIP_SVG =
    '<svg class="icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="9" cy="6" r="1.25"/><circle cx="15" cy="6" r="1.25"/><circle cx="9" cy="12" r="1.25"/><circle cx="15" cy="12" r="1.25"/><circle cx="9" cy="18" r="1.25"/><circle cx="15" cy="18" r="1.25"/></svg>';

  function cardShellTall(card, innerTopRight, extraClass) {
    var ec = extraClass ? ' ' + extraClass : '';
    var ariaDel = escapeHtml(t('delete'));
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
      '">×</button>' +
      '<div class="card__image card__image--photo"><img src="' +
      escapeHtml(card.image) +
      '" alt="" loading="lazy"/></div>' +
      '<div class="card__body">' +
      '<p class="card__quote"><span class="q" aria-hidden="true">“</span>' +
      escapeHtml(card.quote) +
      '<span class="q" aria-hidden="true">”</span></p>' +
      '<div class="card__tags">' +
      tagsHtml(card.tags) +
      '</div></div></article>'
    );
  }

  function renderFeed() {
    if (!dom.feed) return;
    var ariaPick = escapeHtml(t('pickFolder'));
    dom.feed.innerHTML = state.cards
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

  function renderFolderDetail() {
    var folder = getSelectedFolder();
    if (!folder) return;
    if (dom.folderDetailTitle) dom.folderDetailTitle.textContent = folder.name;
    if (dom.folderAnnotation) dom.folderAnnotation.value = folder.annotation || '';
    if (!dom.folderDetailCards) return;
    var cards = getCardsByIds(folder.cardIds);
    dom.folderDetailCards.innerHTML = cards
      .map(function (card) {
        var grip = '<div class="folder-card-grip" aria-hidden="true">' + GRIP_SVG + '</div>';
        return cardShellTall(card, grip, ' folder-draggable-card');
      })
      .join('');
    makeFolderCardsDraggable();
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
    var btn = e.target.closest('.card-arrow-btn');
    if (!btn) return;
    var cardEl = e.target.closest('.card--tall');
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

  function onCardDeleteClick(e) {
    var del = e.target.closest('.card-delete-btn');
    if (!del) return;
    var cardEl = e.target.closest('.card--tall');
    var id = parseInt(
      del.getAttribute('data-delete-card-id') ||
        (cardEl && cardEl.getAttribute('data-card-id')),
      10
    );
    if (isNaN(id)) return;
    e.preventDefault();
    e.stopPropagation();
    deleteCard(id);
  }

  function onCardOpenEditorClick(e) {
    if (e.target.closest('.card-arrow-btn')) return;
    if (e.target.closest('.card-delete-btn')) return;
    if (e.target.closest('.folder-card-grip')) return;
    var cardEl = e.target.closest('.card--tall');
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
    state.selectedFolderId = folderId;
    if (dom.folderDetailOverlay) {
      dom.folderDetailOverlay.hidden = false;
      dom.folderDetailOverlay.setAttribute('aria-hidden', 'false');
    }
    renderFolderDetail();
  }

  function closeFolderDetail() {
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
    if (home) home.classList.toggle('bottom-nav__item--active', tab === 'home');
    if (search) search.classList.toggle('bottom-nav__item--active', tab === 'search');
    if (settings) settings.classList.toggle('bottom-nav__item--active', tab === 'settings');
  }

  function setSettingsOpen(open) {
    if (!dom.settingsOverlay) return;
    dom.settingsOverlay.classList.toggle('is-open', open);
    dom.settingsOverlay.setAttribute('aria-hidden', open ? 'false' : 'true');
  }

  function setEditorOpen(open) {
    if (!dom.editorOverlay) return;
    dom.editorOverlay.classList.toggle('is-open', open);
    dom.editorOverlay.setAttribute('aria-hidden', open ? 'false' : 'true');
    if (open && dom.editorQuote) dom.editorQuote.focus();
  }

  function resetEditorDraft() {
    state.editingCardId = null;
    state.editorImages = [];
    if (dom.editorQuote) dom.editorQuote.value = '';
    if (dom.editorBody) dom.editorBody.value = '';
    state.selectedChar = null;
    document.querySelectorAll('.char-btn').forEach(function (b) {
      b.classList.remove('is-selected');
    });
    renderEditorImages();
    syncEditor();
    resizeEditorTextarea();
  }

  function openEditorForCard(cardId) {
    var card = getCardById(cardId);
    if (!card || !dom.editorQuote || !dom.editorBody) return;
    state.editingCardId = card.id;
    state.editorImages = card.image ? [card.image] : [];
    dom.editorQuote.value = card.quote || '';
    dom.editorBody.value =
      card.text || ((card.tags || []).map(function (tg) { return '#' + tg + '#'; }).join(' '));
    renderEditorImages();
    syncEditor();
    resizeEditorTextarea();
    setEditorOpen(true);
  }

  function setTemplateOpen(open) {
    if (!dom.templateOverlay) return;
    dom.templateOverlay.classList.toggle('is-open', open);
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

  function renderEditorImages() {
    if (!dom.editorImageSlots) return;
    if (!state.editorImages.length) {
      dom.editorImageSlots.hidden = true;
      dom.editorImageSlots.innerHTML = '';
      return;
    }
    dom.editorImageSlots.hidden = false;
    dom.editorImageSlots.innerHTML = state.editorImages
      .map(function (src, i) {
        return (
          '<div class="editor-image-slot">' +
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
    var payload = {
      image: state.editorImages[0] || PLACEHOLDER_IMAGES[0],
      quote: quotation || body.substring(0, 50),
      tags: tags,
      text: body,
    };
    if (state.editingCardId == null) {
      state.cards.unshift(
        Object.assign(
          {
            id: Date.now(),
          },
          payload
        )
      );
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

  function bindCpName() {
    if (dom.cpTitleBtn) {
      dom.cpTitleBtn.addEventListener('click', function () {
        state.editingName = true;
        dom.cpTitleBtn.hidden = true;
        if (dom.cpTitleInput) {
          dom.cpTitleInput.hidden = false;
          dom.cpTitleInput.value = state.cpName;
          dom.cpTitleInput.focus();
          dom.cpTitleInput.select();
        }
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
          b.classList.toggle('is-active', b.getAttribute('data-locale') === loc);
        });
        applyUiStrings();
        document.documentElement.lang = state.currentLang === 'zh' ? 'zh-CN' : 'en';
        renderFolderList();
        renderSearchResults();
        renderFeed();
        syncTemplateLabel();
        if ($('folder-picker-heading')) $('folder-picker-heading').textContent = t('pickFolder');
        if (dom.folderPickerOverlay && dom.folderPickerOverlay.classList.contains('is-open')) renderFolderPicker();
        saveState();
      });
    });
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
        if (dom.fileInput) dom.fileInput.click();
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

    if (dom.foldersList)
      dom.foldersList.addEventListener('click', function (e) {
        var b = e.target.closest('.folder-item-btn');
        if (!b || !dom.foldersList.contains(b)) return;
        var id = parseInt(b.getAttribute('data-folder-id'), 10);
        if (e.target.tagName === 'INPUT') return;
        if (e.target.closest('.folder-delete-btn')) {
          e.preventDefault();
          e.stopPropagation();
          deleteFolder(id);
          return;
        }
        if (e.target.closest('.folder-item-btn__name') && e.target.tagName !== 'INPUT') {
          e.preventDefault();
          e.stopPropagation();
          startFolderRename(id, e.target.closest('.folder-item-btn__name'));
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
        var b = e.target.closest('[data-pick-folder-id]');
        if (!b || !dom.folderPickerList.contains(b)) return;
        var fid = parseInt(b.getAttribute('data-pick-folder-id'), 10);
        if (!isNaN(fid)) addCardToFolderChoice(fid);
      });
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
        var btn = e.target.closest('.pill-btn');
        if (!btn || !dom.tagIndexList.contains(btn)) return;
        var tag = btn.getAttribute('data-tag');
        if (tag) openTagDetail(tag);
      });
    }
  }

  function bindFolderDrag() {
    if (!dom.folderDetailCards) return;
    dom.folderDetailCards.addEventListener('dragstart', function (e) {
      var wrap = e.target.closest('.folder-draggable-card');
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
      var wrap = e.target.closest('.folder-draggable-card');
      if (wrap) e.preventDefault();
    });
    dom.folderDetailCards.addEventListener('drop', function (e) {
      var wrap = e.target.closest('.folder-draggable-card');
      if (!wrap || state.draggedCardId == null) return;
      e.preventDefault();
      var targetId = parseInt(wrap.getAttribute('data-card-id'), 10);
      var folder = getSelectedFolder();
      if (!folder || isNaN(targetId)) return;
      var draggedId = state.draggedCardId;
      if (draggedId === targetId) return;
      var order = folder.cardIds.slice();
      var di = order.indexOf(draggedId);
      var ti = order.indexOf(targetId);
      if (di === -1 || ti === -1) return;
      order.splice(di, 1);
      order.splice(ti, 0, draggedId);
      reorderCardsInFolder(folder.id, order);
      state.draggedCardId = null;
    });
    dom.folderDetailCards.addEventListener('dragend', function () {
      state.draggedCardId = null;
    });
  }

  function bindEditor() {
    document.querySelectorAll('.char-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var ch = btn.getAttribute('data-char');
        state.selectedChar = ch;
        document.querySelectorAll('.char-btn').forEach(function (b) {
          b.classList.toggle('is-selected', b === btn);
        });
      });
    });
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
              state.editorImages.push(r.result);
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
        var b = e.target.closest('.tag-delete-btn');
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
        var b = e.target.closest('.editor-image-remove');
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
    dom.editorOverlay = $('editor-overlay');
    dom.editorQuote = $('editor-quote');
    dom.editorBody = $('editor-body');
    dom.editorHighlight = $('editor-highlight');
    dom.editorTagPreview = $('editor-tag-preview');
    dom.editorImageSlots = $('editor-image-slots');
    dom.editorModeBtn = $('editor-mode-btn');
    dom.settingsOverlay = $('settings-overlay');
    dom.templateOverlay = $('template-overlay');
    dom.folderPickerOverlay = $('folder-picker-overlay');
    dom.folderPickerList = $('folder-picker-list');
    dom.fileInput = $('editor-file-input');
  }

  function init() {
    loadState();
    cacheDom();
    document.documentElement.lang = state.currentLang === 'zh' ? 'zh-CN' : 'en';
    if (dom.cpTitleBtn) dom.cpTitleBtn.textContent = state.cpName;
    document.querySelectorAll('.lang-toggle__btn').forEach(function (b) {
      b.classList.toggle('is-active', b.getAttribute('data-locale') === state.currentLang);
    });
    applyUiStrings();
    if (dom.cpTitleBtn) dom.cpTitleBtn.textContent = state.cpName;
    bindCpName();
    bindLangToggle();
    bindNav();
    bindOverlays();
    bindSearch();
    bindCardArrows();
    bindCardDelete();
    bindCardEditorOpen();
    bindFolderDrag();
    bindEditor();
    syncTemplateLabel();
    renderFeed();
    renderTagIndex();
    syncEditor();
    resizeEditorTextarea();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
