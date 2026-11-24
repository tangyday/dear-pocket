// Decorative launch screen; independent of Firebase/network availability.
(() => {
 const splash = document.getElementById('splash');
 if (!splash) return;
 const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 let seen = false;
 try { seen = sessionStorage.getItem('dear-pocket-splash') === '1'; sessionStorage.setItem('dear-pocket-splash','1'); } catch (_) {}
 if (seen || reduced) { splash.remove(); return; }
 splash.classList.add('show');
 const close = () => { splash.classList.remove('show'); setTimeout(() => splash.remove(), 260); };
 setTimeout(close, 1050);
 splash.addEventListener('click', close, {once:true});
 document.addEventListener('focusin', close, {once:true});
})();
