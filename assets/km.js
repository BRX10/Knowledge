/* Knowledge Mesh concept tiles: grid, filters, concept dialog, carousel viewer. */
(function () {
  var Z = window.KM_ZONES, C = window.KM_CONCEPTS, ORDER = window.KM_ORDER || C.map(function (c) { return c.id; });
  var byId = {}; C.forEach(function (c) { byId[c.id] = c; });
  var seq = ORDER.map(function (id) { return byId[id]; }).filter(Boolean);
  var zoneLabel = {}; Z.forEach(function (z) { zoneLabel[z.id] = z.label; });
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var PLUS = '<span class="plus" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M8 3v10M3 8h10"/></svg></span>';

  /* ---------- tiles ---------- */
  var grid = document.getElementById('grid');
  seq.forEach(function (c, i) {
    var b = document.createElement('button');
    var kind = c.art ? 'has-art' : (c.list ? 'has-list' : (c.big ? 'has-big' : 'text-only'));
    b.className = 'tile ' + kind + (c.size === 2 ? ' span-2' : '') + (c.dark ? ' tile-night' : '');
    b.id = 'tile-' + c.id; b.dataset.zone = c.zone; b.setAttribute('aria-haspopup', 'dialog');
    var h = '<span class="tag"><i>' + (i + 1 < 10 ? '0' : '') + (i + 1) + '</i>' + zoneLabel[c.zone] + '</span>' +
      '<span class="t-title">' + c.title + '</span>';
    if (kind !== 'text-only') h += '<span class="t-hook">' + c.hook + '</span>';
    if (c.art) h += '<span class="t-art"><img src="' + c.art + '" alt="" loading="lazy"></span>';
    else if (c.list) h += '<ol class="t-list">' + c.list.map(function (l, k) { return '<li><span>' + (k + 1) + '</span>' + l + '</li>'; }).join('') + '</ol>';
    else if (c.big) h += '<span class="big">' + c.big + '<small>' + (c.special === 'failure' ? 'self-check' : 'preferences') + '</small></span>';
    else h += '<span class="t-hook">' + c.hook + '</span>';
    b.innerHTML = h + PLUS;
    b.addEventListener('click', function () { open(c.id); });
    grid.appendChild(b);
  });
  SITEKIT.swapImages();

  /* entrance animation */
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e, k) { if (e.isIntersecting) { var t = e.target; setTimeout(function () { t.classList.remove('pre'); }, k * 60); io.unobserve(t); } });
    }, { rootMargin: '0px 0px -5% 0px' });
    document.querySelectorAll('.tile').forEach(function (t) { t.classList.add('pre'); io.observe(t); });
  }

  /* ---------- filters ---------- */
  var chips = document.getElementById('chips');
  [{ id: 'all', label: 'All concepts' }].concat(Z).forEach(function (z) {
    var n = z.id === 'all' ? seq.length : seq.filter(function (c) { return c.zone === z.id; }).length;
    var b = document.createElement('button'); b.className = 'chip'; b.setAttribute('aria-pressed', z.id === 'all' ? 'true' : 'false');
    b.innerHTML = z.label + ' <b>' + n + '</b>';
    b.addEventListener('click', function () {
      chips.querySelectorAll('.chip').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      grid.querySelectorAll('.tile').forEach(function (t) { t.classList.toggle('dim', z.id !== 'all' && t.dataset.zone !== z.id); });
    });
    chips.appendChild(b);
  });

  /* ---------- concept dialog ---------- */
  var dlg = document.getElementById('dlg'), body = document.getElementById('dlgBody'), scrim = document.getElementById('scrim');
  var cur = -1, lastFocus = null;
  function special(c) {
    if (c.special === 'failure') {
      var h = '<p>The same patterns recur when AI meets the real corpus. Tap the ones you have seen: each reveals the principle that answers it. Nothing is recorded.</p><div class="fm-grid">';
      KM_FAILURES.forEach(function (f) {
        h += '<button class="fm" aria-pressed="false"><span class="tick"><svg viewBox="0 0 14 14" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 7.5l3 3 6-7"/></svg></span><b>' + f[0] + '</b><span class="look">' + f[1] + '</span><span class="ans"><span>What answers it</span>' + f[2] + '</span></button>';
      });
      return h + '</div><div class="fm-bar" aria-live="polite"><strong id="fmN">0/8</strong><span>Each of these is a matter of organisation, which technology makes more visible, and more costly, once agents are involved.</span></div>';
    }
    if (c.special === 'values') {
      var v = '<p>Five preferences sum up the answer: each one favours a way of working, without dismissing the alternative.</p><div class="vals">';
      KM_VALUES.forEach(function (x) { v += '<div class="vrow"><span class="a">' + x[0] + '</span><span class="vs">…more than</span><span class="b">' + x[1] + '</span><span class="w">' + x[2] + '.</span></div>'; });
      return v + '</div><p style="margin-top:12px;font-size:14.5px;color:var(--muted)"><i>The second column still has value: answers will always need some correction, and a shared repository can be useful. The Knowledge Mesh simply puts the first column first.</i></p>';
    }
    if (c.special === 'delegation') {
      return '<p>Delegating to agents is a gradual decision, taken domain by domain. Trust grows as people understand what agents rely on and see results hold over time.</p>' +
        '<div class="seg" role="tablist" aria-label="Level of delegation">' + KM_LEVELS.map(function (l, k) { return '<button role="tab" data-l="' + k + '" aria-selected="' + (k === 0) + '">' + l[0] + '</button>'; }).join('') + '</div>' +
        '<div class="gauge"><span id="gauge" style="width:33%"></span></div><dl class="lvl" aria-live="polite"><dt>Who decides</dt><dd id="lvW"></dd><dt>Condition to move on</dt><dd id="lvC"></dd></dl>' +
        '<em>An agent may always protect on its own, for instance by quarantining a doubtful page. It should never loosen a rule on its own.</em>';
    }
    return '';
  }
  function wire(c) {
    if (c.special === 'failure') {
      var bs = body.querySelectorAll('.fm');
      bs.forEach(function (b) { b.addEventListener('click', function () { b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') === 'true' ? 'false' : 'true'); document.getElementById('fmN').textContent = body.querySelectorAll('.fm[aria-pressed="true"]').length + '/8'; }); });
    }
    if (c.special === 'delegation') {
      var tabs = [].slice.call(body.querySelectorAll('.seg button'));
      var set = function (k) { tabs.forEach(function (t, j) { t.setAttribute('aria-selected', j === k ? 'true' : 'false'); t.tabIndex = j === k ? 0 : -1; });
        document.getElementById('lvW').textContent = KM_LEVELS[k][1]; document.getElementById('lvC').textContent = KM_LEVELS[k][2]; document.getElementById('gauge').style.width = ((k + 1) * 33.34) + '%'; };
      tabs.forEach(function (t, k) { t.addEventListener('click', function () { set(k); });
        t.addEventListener('keydown', function (e) { if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { var n = (k + (e.key === 'ArrowRight' ? 1 : 2)) % 3; set(n); tabs[n].focus(); } }); });
      set(0);
    }
  }
  function render(i) {
    var c = seq[i]; cur = i;
    document.getElementById('dlgZone').innerHTML = '<i>' + (i + 1 < 10 ? '0' : '') + (i + 1) + '</i>' + zoneLabel[c.zone];
    document.getElementById('dlgTitle').textContent = c.title;
    var h = '';
    if (c.fig) h += '<figure><img src="' + c.fig + '" alt="' + (c.artAlt || '') + '"></figure>';
    if (c.special) h += special(c);
    else h += (c.body || []).map(function (p) { return /^<(ol|ul|table|blockquote)/.test(p) ? p : '<p>' + p + '</p>'; }).join('');
    body.innerHTML = h.replace(/<p><em>/g, '<em>').replace(/<\/em><\/p>/g, '</em>');
    wire(c); SITEKIT.swapImages();
    var rd = document.getElementById('dlgRead'); rd.href = 'playbook.html#' + c.link; rd.textContent = 'Read ' + c.sec + ' in the playbook →';
    var p = seq[(i - 1 + seq.length) % seq.length], n = seq[(i + 1) % seq.length];
    document.querySelector('#dlgPrev span').textContent = p.title; document.querySelector('#dlgNext span').textContent = n.title;
    body.parentNode.scrollTop = 0;
    if (history.replaceState) history.replaceState(null, '', '#' + c.id);
  }
  function open(id) {
    var i = seq.findIndex(function (c) { return c.id === id; }); if (i < 0) return;
    lastFocus = document.activeElement; render(i);
    if (!dlg.open) { if (dlg.show) dlg.show(); else dlg.setAttribute('open', ''); }
    scrim.classList.add('on'); document.body.style.overflow = 'hidden'; document.getElementById('dlgClose').focus();
  }
  function close() { if (dlg.open) { dlg.close ? dlg.close() : dlg.removeAttribute('open'); } scrim.classList.remove('on'); document.body.style.overflow = ''; }
  scrim.addEventListener('click', close);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && dlg.open) close(); });
  dlg.addEventListener('close', function () { if (history.replaceState) history.replaceState(null, '', location.pathname + location.search); if (lastFocus) lastFocus.focus(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) close(); });
  document.getElementById('dlgClose').onclick = close;
  document.getElementById('dlgPrev').onclick = function () { render((cur - 1 + seq.length) % seq.length); };
  document.getElementById('dlgNext').onclick = function () { render((cur + 1) % seq.length); };
  dlg.addEventListener('keydown', function (e) {
    if (e.target.closest('.seg')) return;
    if (e.key === 'ArrowRight') render((cur + 1) % seq.length);
    if (e.key === 'ArrowLeft') render((cur - 1 + seq.length) % seq.length);
  });
  if (location.hash.length > 1 && byId[location.hash.slice(1)]) open(location.hash.slice(1));

})();
