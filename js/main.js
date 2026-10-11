// Bootstrap form validation + footer year
(() => {
  document.querySelectorAll('.needs-validation').forEach(form => {
    form.addEventListener('submit', e => {
      if (!form.checkValidity()) { e.preventDefault(); e.stopPropagation(); }
      form.classList.add('was-validated');
    });
  });
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Parallax: background layers drift slower than the page as you scroll
(() => {
  const layers = [...document.querySelectorAll('[data-parallax]')];
  if (!layers.length || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const speed = 0.5;
  let ticking = false;
  const update = () => {
    const vh = window.innerHeight;
    layers.forEach(el => {
      const r = el.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      const max = r.height * 0.2;                         // matches inset:-20% in CSS
      const offset = (vh / 2 - (r.top + r.height / 2)) * speed;
      el.style.transform = `translate3d(0,${Math.max(-max, Math.min(max, offset))}px,0)`;
    });
    ticking = false;
  };
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);
  update();
})();
