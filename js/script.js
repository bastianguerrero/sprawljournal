// ── MENU MÓVIL ──
const toggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links-list');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// ── BUSCADOR ──
const searchBox = document.getElementById('search-box');
if (searchBox) {
  searchBox.addEventListener('input', () => {
    const q = searchBox.value.toLowerCase().trim();
    document.querySelectorAll('[data-search]').forEach(card => {
      const text = card.dataset.search.toLowerCase();
      card.classList.toggle('hidden', q.length > 0 && !text.includes(q));
    });
  });
}

// ── ACTIVE NAV LINK ──
const currentPath = window.location.pathname;
document.querySelectorAll('nav a').forEach(a => {
  if (a.getAttribute('href') === currentPath ||
      (currentPath.startsWith(a.getAttribute('href')) && a.getAttribute('href') !== '/')) {
    a.classList.add('active');
  }
});
