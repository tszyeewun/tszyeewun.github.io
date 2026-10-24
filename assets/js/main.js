/* Lia Wun · Web V3 · shared scripts */

/* Typing headline — same timing as V2:
   type 0.07 s per letter, hold 1.6 s, delete 0.07 s per letter, then the next line. */
(function () {
  var el = document.querySelector('.typer');
  if (!el) return;
  var lines;
  try { lines = JSON.parse(el.getAttribute('data-lines')); } catch (e) { return; }
  if (!lines || !lines.length) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var STEP = 70, HOLD = 1600;
  var i = 0, n = 0, deleting = false;
  el.textContent = '';

  function tick() {
    var line = lines[i];
    if (!deleting) {
      n++;
      el.textContent = line.slice(0, n);
      if (n === line.length) { deleting = true; return setTimeout(tick, HOLD); }
    } else {
      n--;
      el.textContent = line.slice(0, n);
      if (n === 0) { deleting = false; i = (i + 1) % lines.length; }
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

/* Email links: open the mail app and also copy the address,
   so it still works for people who use webmail (no mail app set up). */
(function () {
  var links = document.querySelectorAll('a[href^="mailto:"]');
  if (!links.length) return;
  var toast;
  function show(msg) {
    if (!toast) {
      toast = document.createElement('div');
      toast.setAttribute('role', 'status');
      toast.style.cssText = 'position:fixed;left:50%;bottom:32px;transform:translateX(-50%);z-index:50;padding:12px 20px;border-radius:999px;background:#1d1d1f;color:#fff;font-size:15px;box-shadow:0 8px 24px rgba(0,0,0,.25);transition:opacity .3s;opacity:0;pointer-events:none';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = '1';
    clearTimeout(show.t);
    show.t = setTimeout(function () { toast.style.opacity = '0'; }, 2600);
  }
  Array.prototype.forEach.call(links, function (a) {
    a.addEventListener('click', function () {
      var addr = a.getAttribute('href').replace('mailto:', '').split('?')[0];
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(addr).then(function () { show('Email copied: ' + addr); }, function () {});
      }
    });
  });
})();
