/* Shared helpers: lists from content.js, LinkedIn link, optional download counter. */
(function () {
  var S = window.SITE || {}, preview = /[?&]preview\b/.test(location.search);
  var root = document.documentElement.getAttribute('data-root') || '';
  function esc(t) { var d = document.createElement('div'); d.textContent = t == null ? '' : String(t); return d.innerHTML; }
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

  /* ---------- shared fixed header ---------- */
  (function () {
    var h = document.getElementById('siteHeader'); if (!h) return;
    var act = h.getAttribute('data-active') || '', cta = S.cta || {};
    var items = [['home', '', 'Home'], ['km', 'knowledge-mesh/', 'Knowledge Mesh'], ['pb', 'knowledge-mesh/playbook.html', 'Playbook'], ['writing', '#writing', 'Writing'], ['repos', '#repos-sec', 'Repositories']];
    var nav = items.map(function (it) {
      var href = it[1].charAt(0) === '#' ? root + './' + it[1] : root + (it[1] || './');
      return '<a href="' + href + '"' + (act === it[0] ? ' aria-current="page"' : '') + '>' + it[2] + '</a>';
    }).join('');
    h.className = 'top';
    h.innerHTML = '<div class="wrap top-in">' +
      '<a class="brand" href="' + (root || './') + '"><span class="mark" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#fff" stroke-width="1.6"><path d="M2 2h10v10H2zM7 2v10M2 7h10"/></svg></span><span class="txt">Knowledge · AI</span></a>' +
      '<nav class="mainnav" aria-label="Main">' + nav + '</nav><span class="spacer"></span>' +
      (S.owner && S.owner.linkedin ? '<a class="li-ico" href="' + S.owner.linkedin + '" target="_blank" rel="noopener" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg></a>' : '') +
      (cta.url ? '<a class="btn btn-primary btn-sm cta-btn" href="' + root + cta.url + '" data-dl="' + (cta.dl || '') + '" download><span aria-hidden="true">◆</span> ' + esc(cta.label) + '</a>' : '') +
      '</div><nav class="subnav wrap" aria-label="Main (mobile)">' + nav + '</nav>';
  })();
  window.SITEKIT = {
    esc: esc, fill: fill, preview: preview,
    article: function (x) { return '<span class="m">' + (x.n ? '#' + esc(x.n) + ' · ' : '') + esc(x.date) + '</span><b>' + esc(x.title) + '</b>' + (x.blurb ? '<span class="d">' + esc(x.blurb) + '</span>' : ''); },
    repo: function (x) { return '<span class="m">' + esc(x.kind) + ' · ' + esc(x.author) + (x.year ? ' · ' + esc(x.year) : '') + '</span><b>' + esc(x.name) + '</b><span class="d">' + esc(x.note) + '</span>'; }
  };
  document.addEventListener('DOMContentLoaded', function () {
    var a = SITEKIT.fill(S.articles, document.getElementById('articles'), SITEKIT.article);
    if (!a && document.getElementById('articlesTile')) document.getElementById('articlesTile').style.display = 'none';
    var r = SITEKIT.fill(S.repos, document.getElementById('repos'), SITEKIT.repo);
    if (!r && document.getElementById('reposTile')) document.getElementById('reposTile').style.display = 'none';
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
