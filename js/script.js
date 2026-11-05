// ── MENU MÓVIL ──
const toggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links-list');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// ── BUSCADOR + FILTRO POR TEMA ──
const searchBox = document.getElementById('search-box');
const cards = document.querySelectorAll('[data-search]');
const topicLinks = document.querySelectorAll('#topic-filter a[data-topic]');
const emptyState = document.getElementById('empty-state');
const resultsLabel = document.getElementById('results-label');
const resultsCount = document.getElementById('results-count');
let currentTopic = 'todos';

// Quita tildes y pasa a minúsculas: "gestion" encuentra "Gestión"
const norm = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

function applyFilters() {
  const q = searchBox ? norm(searchBox.value.trim()) : '';
  let visible = 0;
  cards.forEach(card => {
    const okText = !q || norm(card.dataset.search).includes(q);
    const okTopic = currentTopic === 'todos' || card.dataset.topic === currentTopic;
    const show = okText && okTopic;
    card.classList.toggle('hidden', !show);
    if (show) visible++;
  });
  if (emptyState) emptyState.classList.toggle('hidden', visible > 0);
  if (resultsCount) resultsCount.textContent = visible + (visible === 1 ? ' artículo' : ' artículos');
}

function setTopic(topic, updateHash) {
  const link = [...topicLinks].find(a => a.dataset.topic === topic);
  if (!link) topic = 'todos';
  currentTopic = topic;
  topicLinks.forEach(a => a.classList.toggle('active', a.dataset.topic === topic));
  const active = [...topicLinks].find(a => a.dataset.topic === topic);
  if (resultsLabel && active) resultsLabel.textContent = active.dataset.label;
  if (updateHash) history.replaceState(null, '', '#' + topic);
  applyFilters();
}

if (searchBox) searchBox.addEventListener('input', applyFilters);

if (topicLinks.length) {
  // Contadores por tema
  topicLinks.forEach(a => {
    const n = a.dataset.topic === 'todos'
      ? cards.length
      : [...cards].filter(c => c.dataset.topic === a.dataset.topic).length;
    const badge = a.querySelector('.topic-count');
    if (badge) badge.textContent = n;
    a.addEventListener('click', e => { e.preventDefault(); setTopic(a.dataset.topic, true); });
  });
  window.addEventListener('hashchange', () => setTopic(location.hash.slice(1) || 'todos', false));
  setTopic(location.hash.slice(1) || 'todos', false);
} else {
  applyFilters();
}

// ── ACTIVE NAV LINK ──
const currentPath = window.location.pathname;
document.querySelectorAll('nav a').forEach(a => {
  if (a.getAttribute('href') === currentPath ||
      (currentPath.startsWith(a.getAttribute('href')) && a.getAttribute('href') !== '/')) {
    a.classList.add('active');
  }
});
