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

/* Email links: show a small chooser so visitors can write in Gmail, Outlook
   or their mail app, each opening a new email with Lia's address filled in. */
(function () {
  var links = document.querySelectorAll('a[href^="mailto:"]');
  if (!links.length) return;
  var menu, current;
  function close() { if (menu) { menu.hidden = true; current = null; } }
  function build() {
    menu = document.createElement('div');
    menu.className = 'mail-menu';
    menu.setAttribute('role', 'menu');
    menu.hidden = true;
    document.body.appendChild(menu);
    document.addEventListener('click', function (e) {
      if (menu.hidden || menu.contains(e.target)) return;
      if (current && current.contains(e.target)) return;
      close();
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    window.addEventListener('resize', close);
  }
  function item(label, href, onClick) {
    var a = document.createElement('a');
    a.className = 'mail-menu-item';
    a.setAttribute('role', 'menuitem');
    a.textContent = label;
    a.href = href || '#';
    if (/^https?:/.test(a.href)) { a.target = '_blank'; a.rel = 'noopener'; }
    a.addEventListener('click', function (e) { if (onClick) { e.preventDefault(); onClick(); } else close(); });
    return a;
  }
  function open(link) {
    if (!menu) build();
    var addr = link.getAttribute('href').replace('mailto:', '').split('?')[0];
    var to = encodeURIComponent(addr);
    menu.innerHTML = '';
    var head = document.createElement('p');
    head.className = 'mail-menu-head';
    head.textContent = 'Write to ' + addr;
    menu.appendChild(head);
    menu.appendChild(item('Gmail', 'https://mail.google.com/mail/?view=cm&fs=1&to=' + to));
    menu.appendChild(item('Outlook', 'https://outlook.live.com/mail/0/deeplink/compose?to=' + to));
    menu.appendChild(item('Mail app', 'mailto:' + addr));
    var copy = item('Copy address', null, function () {
      var done = function () { copy.textContent = 'Copied ✓'; setTimeout(close, 900); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(addr).then(done, done); else done();
    });
    menu.appendChild(copy);
    menu.hidden = false;
    current = link;
    var r = link.getBoundingClientRect(), mw = menu.offsetWidth, mh = menu.offsetHeight;
    var left = Math.min(Math.max(12, r.left + r.width / 2 - mw / 2), window.innerWidth - mw - 12);
    var top = r.bottom + 10;
    if (top + mh > window.innerHeight - 12) top = Math.max(12, r.top - mh - 10);
    menu.style.left = left + 'px';
    menu.style.top = top + 'px';
    menu.querySelector('.mail-menu-item').focus();
  }
  Array.prototype.forEach.call(links, function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      if (current === a && !menu.hidden) close(); else open(a);
    });
  });
})();
