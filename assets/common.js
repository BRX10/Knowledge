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
    var items = [['home', '', 'Home'], ['read', 'knowledge-mesh/playbook.html', 'Read'], ['slides', 'knowledge-mesh/slides.html', 'Simple Slides'], ['km', 'knowledge-mesh/', 'Concepts'], ['about', '#about', 'About']];
    var nav = items.map(function (it) {
      return '<a href="' + (it[1].charAt(0) === '#' ? root + './' + it[1] : root + (it[1] || './')) + '"' + (act === it[0] ? ' aria-current="page"' : '') + '>' + it[2] + '</a>';
    }).join('');
    h.className = 'top';
    h.innerHTML = '<div class="wrap top-in">' +
      '<a class="brand" href="' + (root || './') + '"><span class="mark">' + BRAIN + '</span><span class="txt">Knowledge Mesh Playbook</span></a>' +
      '<nav class="mainnav" aria-label="Main">' + nav + '</nav><span class="spacer"></span>' +
      '<button class="theme-sw" type="button" aria-pressed="false" aria-label="Switch colours: violet or amber"><span class="sw-v" aria-hidden="true"></span><span class="sw-a" aria-hidden="true"></span></button>' +
      (cta.url ? '<a class="btn btn-primary btn-sm cta-btn" href="' + root + cta.url + '" data-dl="' + (cta.dl || '') + '" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 20h14"/></svg><span class="cta-l">PDF</span></a>' : '') +
      '</div><nav class="subnav wrap" aria-label="Main (mobile)">' + nav + '</nav>';
    h.querySelector('.theme-sw').addEventListener('click', function () { setTheme(theme() === 'amber' ? 'violet' : 'amber'); });
  })();
  setTheme(theme());

  window.SITEKIT = {
    esc: esc, fill: fill, preview: preview, img: img, theme: theme, swapImages: swapImages, root: root,
    article: function (x) { var li = /linkedin\.com/.test(x.url || ''); return '<span class="ic' + (li ? ' ic-li' : '') + '">' + (li ? '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>' : '') + '</span><span class="tx"><span class="m">' + (x.n ? 'Article #' + esc(x.n) + ' · ' : '') + esc(x.date) + (li ? ' · LinkedIn' : '') + '</span><b>' + esc(x.title) + '</b>' + (x.blurb ? '<span class="d">' + esc(x.blurb) + '</span>' : '') + '</span><span class="go" aria-hidden="true">↗</span>'; },
    repo: function (x) { var gh = /github\.com/.test(x.url || ''); return '<span class="ic' + (gh ? ' ic-gh' : '') + '">' + (gh ? '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/></svg>' : '') + '</span><span class="tx"><span class="m">' + esc(x.kind) + ' · ' + esc(x.author) + (x.year ? ' · ' + esc(x.year) : '') + '</span><b>' + esc(x.name) + '</b><span class="d">' + esc(x.note) + '</span></span><span class="go" aria-hidden="true">↗</span>'; }
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
