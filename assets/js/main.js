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
