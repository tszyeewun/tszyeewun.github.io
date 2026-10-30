/* Lia Wun · Web V3 · shared scripts */

/* Typing headline — same timing as V2:
   type 0.07 s per letter, hold 1.6 s, delete 0.07 s per letter, then the next line. */
(function () {
  var el = document.querySelector('.typer');
  if (!el) return;
  var lines;
  try { lines = JSON.parse(el.getAttribute('data-lines')); } catch (e) { return; }
  if (!lines || !lines.length) return;
  var colors = [];
  try { colors = JSON.parse(el.getAttribute('data-colors') || '[]'); } catch (e) {}
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    if (colors.length) {
      el.textContent = '';
      lines.forEach(function (t, k) {
        if (k) el.appendChild(document.createTextNode(' | '));
        var s = document.createElement('span'); s.textContent = t; if (colors[k]) s.style.color = colors[k]; el.appendChild(s);
      });
    }
    return;
  }

  var STEP = 70, HOLD = 1600;
  var i = 0, n = 0, deleting = false;
  el.textContent = '';
  var caret = el.nextElementSibling && el.nextElementSibling.classList.contains('caret') ? el.nextElementSibling : null;
  function paint(c) { if (!c) return; el.style.color = c; if (caret) caret.style.color = c; }
  paint(colors[0]);

  function tick() {
    var line = lines[i];
    if (!deleting) {
      n++;
      el.textContent = line.slice(0, n);
      if (n === line.length) { deleting = true; return setTimeout(tick, HOLD); }
    } else {
      n--;
      el.textContent = line.slice(0, n);
      if (n === 0) { deleting = false; i = (i + 1) % lines.length; paint(colors[i]); }
    }
    setTimeout(tick, STEP);
  }
  tick();
})();

/* Phone menu */
(function () {
  var btn = document.querySelector('.mobile-menu');
  var links = document.getElementById('navLinks');
  if (!btn || !links) return;
  btn.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();

/* Dark mode: the nav button toggles html.dark and remembers the choice */
(function () {
  var root = document.documentElement;
  var btn = document.querySelector('.nav-dark');
  function label() {
    if (!btn) return;
    var dark = root.classList.contains('dark');
    btn.textContent = dark ? 'Light' : 'Dark';
    btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
  }
  label();
  if (!btn) return;
  btn.addEventListener('click', function () {
    var dark = root.classList.toggle('dark');
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
    label();
  });
})();

/* Home pixel scene: one element wiggles at a time, in a fixed order:
   coffee, rocket, traffic light, books, cat, bus, then round again. The first time a visitor hovers any
   element, the auto wiggle stops for good and only hover wiggles remain. */
(function () {
  var els = Array.prototype.slice.call(document.querySelectorAll('.pix .pix-el'));
  if (!els.length) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var NAMES = ['coffee', 'rocket', 'traffic-light', 'books', 'cat', 'bus'];
  var order = NAMES.map(function (n) { return els.filter(function (e) { return (e.getAttribute('src') || '').indexOf('/' + n + '.') >= 0; })[0]; }).filter(Boolean);
  els.forEach(function (e) { if (order.indexOf(e) < 0) order.push(e); });
  var k = 0, timer = null, stopped = false, HOLD = 1000;
  function step() {
    if (stopped) return;
    els.forEach(function (e) { e.classList.remove('is-wiggling'); });
    order[k].classList.add('is-wiggling');
    k = (k + 1) % order.length;
    timer = setTimeout(step, HOLD);
  }
  function stop() {
    if (stopped) return;
    stopped = true; clearTimeout(timer);
    els.forEach(function (e) { e.classList.remove('is-wiggling'); });
  }
  els.forEach(function (e) { e.addEventListener('pointerenter', stop); });
  step();
})();

/* Visit stats — set STATS_URL to the Cloudflare Worker address to switch counting on. */
(function () {
  var STATS_URL = 'https://lia-stats.tszyeewun-au-6be.workers.dev';
  if (!STATS_URL) return;
  window.LIA_STATS_URL = STATS_URL.replace(/\/$/, '');
  var s = document.createElement('script');
  s.src = 'assets/js/stats.js?v=1';
  s.defer = true;
  document.head.appendChild(s);
})();
