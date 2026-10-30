/* Visit counter. Sends: page, title, where the visitor came from, language, screen size,
   a random browser id and time on page. No cookies, no IP stored.
   Visit any page with ?notrack to stop counting your own visits on that browser (?track to undo). */
(function () {
  var END = window.LIA_STATS_URL;
  if (!END || !window.fetch) return;
  var ls = {};
  try { ls = window.localStorage; } catch (e) {}
  var qs = location.search;
  try {
    if (/[?&]notrack\b/.test(qs)) ls.setItem('lia_notrack', '1');
    if (/[?&]track\b/.test(qs)) ls.removeItem('lia_notrack');
    if (ls.getItem && ls.getItem('lia_notrack')) return;
  } catch (e) {}
  if (/^(localhost|127\.0\.0\.1)$/.test(location.hostname) && !/[?&]track\b/.test(qs)) return;
  function rid() { return Math.random().toString(36).slice(2) + Date.now().toString(36); }
  var vid = '', sid = '';
  try {
    vid = ls.getItem('lia_vid') || ''; if (!vid) { vid = rid(); ls.setItem('lia_vid', vid); }
    var s = JSON.parse(sessionStorage.getItem('lia_sid') || 'null');
    sid = s && Date.now() - s.t < 1800000 ? s.id : rid();
    sessionStorage.setItem('lia_sid', JSON.stringify({ id: sid, t: Date.now() }));
  } catch (e) {}
  var body = {
    p: location.pathname.replace(/\/index\.html$/, '/'),
    t: document.title,
    r: document.referrer || '',
    l: navigator.language || '',
    s: (screen.width || 0) + 'x' + (screen.height || 0),
    v: vid, ss: sid
  };
  var id = null, shown = 0, start = document.visibilityState === 'visible' ? Date.now() : 0, sent = false;
  fetch(END + '/hit', { method: 'POST', body: JSON.stringify(body), keepalive: true, headers: { 'Content-Type': 'text/plain' } })
    .then(function (r) { return r.json(); }).then(function (j) { id = j && j.id; }).catch(function () {});
  function total() { return shown + (start ? Date.now() - start : 0); }
  function send() {
    if (!id) return;
    var data = JSON.stringify({ id: id, d: Math.round(total() / 1000) });
    if (navigator.sendBeacon) navigator.sendBeacon(END + '/leave', new Blob([data], { type: 'text/plain' }));
    else fetch(END + '/leave', { method: 'POST', body: data, keepalive: true, headers: { 'Content-Type': 'text/plain' } });
  }
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') { if (start) { shown += Date.now() - start; start = 0; } send(); }
    else start = Date.now();
  });
  window.addEventListener('pagehide', send);
})();
