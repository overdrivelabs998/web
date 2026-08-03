/* Language toggle. Persists the choice and reflects it on <html> so CSS can
   show one language's nodes and hide the other's. Defaults to Thai unless the
   browser clearly prefers English. */
(function () {
  var KEY = 'odl-lang';
  var root = document.documentElement;

  function pick() {
    try {
      var saved = localStorage.getItem(KEY);
      if (saved === 'th' || saved === 'en') return saved;
    } catch (e) { /* storage may be blocked; fall through to browser default */ }
    var nav = (navigator.language || 'th').toLowerCase();
    return nav.indexOf('en') === 0 ? 'en' : 'th';
  }

  function apply(lang) {
    root.setAttribute('data-site-lang', lang);
    root.setAttribute('lang', lang);
    var btns = document.querySelectorAll('[data-langbtn]');
    for (var i = 0; i < btns.length; i++) {
      // The button offers the *other* language, so label it with that one.
      btns[i].textContent = lang === 'th' ? 'EN' : 'ไทย';
      btns[i].setAttribute('aria-label',
        lang === 'th' ? 'Switch to English' : 'เปลี่ยนเป็นภาษาไทย');
    }
    // The <title> element carries both languages as attributes; read from the
    // element itself rather than querying for one (the query would match on the
    // attribute regardless of which language it holds).
    var t = document.querySelector('title');
    if (t) {
      var v = t.getAttribute('data-title-' + lang);
      if (v) document.title = v;
    }
  }

  apply(pick());

  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-langbtn]');
    if (!b) return;
    var next = root.getAttribute('data-site-lang') === 'th' ? 'en' : 'th';
    try { localStorage.setItem(KEY, next); } catch (err) { /* non-fatal */ }
    apply(next);
  });
})();
