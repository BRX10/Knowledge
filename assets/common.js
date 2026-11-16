/* Shared: fixed header on every page, violet/amber theme, lists from content.js, optional download counter. */
(function () {
  var S = window.SITE || {}, preview = /[?&]preview\b/.test(location.search);
  var root = document.documentElement.getAttribute('data-root') || '';
  var KEY = 'km-theme';
  function esc(t) { var d = document.createElement('div'); d.textContent = t == null ? '' : String(t); return d.innerHTML; }
  function theme() { return document.documentElement.getAttribute('data-theme') === 'amber' ? 'amber' : 'violet'; }
  function img(name) { return root + 'assets/img/' + (theme() === 'amber' ? 'a' : 'v') + '/' + name + '.png'; }
  function swapImages() {
    var t = theme() === 'amber' ? '/img/a/' : '/img/v/';
    document.querySelectorAll('img').forEach(function (i) {
      var s = i.getAttribute('src') || '';
      if (/\/img\/[av]\//.test(s)) { var n = s.replace(/\/img\/[av]\//, t); if (n !== s) i.setAttribute('src', n); }
    });
  }
  function setTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem(KEY, t); } catch (e) {}
    swapImages();
    document.querySelectorAll('.theme-sw').forEach(function (b) { b.setAttribute('aria-pressed', t === 'amber' ? 'true' : 'false'); b.title = t === 'amber' ? 'Switch to violet' : 'Switch to amber'; });
    document.dispatchEvent(new CustomEvent('km-theme', { detail: t }));
  }
  function fill(list, el, render, cls) {
    if (!el) return 0; var n = 0;
    (list || []).forEach(function (x) {
      if (!x.url && !preview) return; n++;
      var a = document.createElement(x.url ? 'a' : 'div');
      a.className = (cls || 'item') + (x.url ? '' : ' pending');
      if (x.url) { a.href = /^https?:/.test(x.url) ? x.url : root + x.url; if (/^https?:/.test(x.url)) { a.target = '_blank'; a.rel = 'noopener'; } }
      a.innerHTML = render(x); el.appendChild(a);
    });
    return n;
  }

  /* brain icon (Lucide "brain", ISC licence) */
  var BRAIN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/></svg>';

  /* ---------- shared fixed header ---------- */
  (function () {
    var h = document.getElementById('siteHeader'); if (!h) return;
    var act = h.getAttribute('data-active') || '', cta = S.cta || {};
    var items = [['home', '', 'Home'], ['read', 'knowledge-mesh/playbook.html', 'Read'], ['slides', 'knowledge-mesh/slides.html', 'Simple Slides'], ['km', 'knowledge-mesh/', 'Concepts']];
    var nav = items.map(function (it) {
      return '<a href="' + root + (it[1] || './') + '"' + (act === it[0] ? ' aria-current="page"' : '') + '>' + it[2] + '</a>';
    }).join('');
    h.className = 'top';
    h.innerHTML = '<div class="wrap top-in">' +
      '<a class="brand" href="' + (root || './') + '"><span class="mark">' + BRAIN + '</span><span class="txt">Knowledge Mesh Playbook</span></a>' +
      '<nav class="mainnav" aria-label="Main">' + nav + '</nav><span class="spacer"></span>' +
      '<button class="theme-sw" type="button" aria-pressed="false" aria-label="Amber colours"><span class="sw-v" aria-hidden="true"></span><span class="sw-a" aria-hidden="true"></span><span class="sw-l">Violet / Amber</span></button>' +
      (cta.url ? '<a class="btn btn-primary btn-sm cta-btn" href="' + root + cta.url + '" data-dl="' + (cta.dl || '') + '" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 20h14"/></svg><span class="cta-l">PDF</span></a>' : '') +
      '</div><nav class="subnav wrap" aria-label="Main (mobile)">' + nav + '</nav>';
    h.querySelector('.theme-sw').addEventListener('click', function () { setTheme(theme() === 'amber' ? 'violet' : 'amber'); });
  })();
  setTheme(theme());

  window.SITEKIT = {
    esc: esc, fill: fill, preview: preview, img: img, theme: theme, swapImages: swapImages, root: root,
    article: function (x) { return '<span class="m">' + (x.n ? '#' + esc(x.n) + ' · ' : '') + esc(x.date) + '</span><b>' + esc(x.title) + '</b>'; },
    repo: function (x) { return '<span class="m">' + esc(x.kind) + ' · ' + esc(x.author) + (x.year ? ' · ' + esc(x.year) : '') + '</span><b>' + esc(x.name) + '</b><span class="d">' + esc(x.note) + '</span>'; }
  };
  document.addEventListener('DOMContentLoaded', function () {
    swapImages();
    SITEKIT.fill(S.articles, document.getElementById('articles'), SITEKIT.article);
    SITEKIT.fill(S.repos, document.getElementById('repos'), SITEKIT.repo);
    document.querySelectorAll('[data-linkedin]').forEach(function (el) {
      if (S.owner && S.owner.linkedin) el.href = S.owner.linkedin; else el.style.display = 'none';
    });
  });
  if (S.goatcounter) {
    var sc = document.createElement('script'); sc.async = true; sc.src = 'https://gc.zgo.at/count.js';
    sc.setAttribute('data-goatcounter', 'https://' + S.goatcounter + '.goatcounter.com/count');
    document.head.appendChild(sc);
    document.addEventListener('click', function (e) {
      var t = e.target.closest && e.target.closest('[data-dl]');
      if (t && window.goatcounter && goatcounter.count) goatcounter.count({ path: 'download-' + t.getAttribute('data-dl'), title: t.textContent.trim(), event: true });
    });
  }
})();
