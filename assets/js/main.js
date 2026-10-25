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

/* Home pixel scene: one element wiggles at a time, in a random order that
   repeats once all six have had a turn. The first time a visitor hovers any
   element, the auto wiggle stops for good and only hover wiggles remain. */
(function () {
  var els = Array.prototype.slice.call(document.querySelectorAll('.pix .pix-el'));
  if (!els.length) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var cup = document.querySelector('.pix .pix-big');
  var order = els.filter(function (e) { return e !== cup; });
  for (var i = order.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = order[i]; order[i] = order[j]; order[j] = t; }
  if (cup) order.unshift(cup);
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
