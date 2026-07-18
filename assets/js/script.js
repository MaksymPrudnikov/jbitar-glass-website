// J Bitar Glass — interactions
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  const burger = document.getElementById('navBurger');
  const links = document.getElementById('navLinks');
  if (burger && links) {
    burger.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }));
  }

  const targets = document.querySelectorAll('.svc-item,.step,.reviews blockquote,.hero-card,.c-block,.band-split > *');
  targets.forEach(el => el.classList.add('reveal'));
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
    }), { threshold: .1 });
    targets.forEach(el => io.observe(el));
  } else targets.forEach(el => el.classList.add('on'));

  // open the matching accordion item when arriving via a #svc-... link from another page
  function openHashTarget() {
    const id = decodeURIComponent(location.hash.slice(1));
    if (!id) return;
    const el = document.getElementById(id);
    if (el && el.tagName === 'DETAILS') {
      el.open = true;
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  openHashTarget();
  window.addEventListener('hashchange', openHashTarget);

  const form = document.getElementById('quoteForm');
  if (form) form.addEventListener('submit', e => {
    if ((form.getAttribute('action') || '').includes('YOUR_FORM_ID')) {
      e.preventDefault();
      alert('Form backend not connected yet — see README for the free 5-minute Formspree setup, or call 647-787-1159.');
    }
  });
});
