// ── MENU MÓVIL ──
const toggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links-list');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// ── FECHAS LEGIBLES (2026-10-28 → 28 oct 2026) ──
document.querySelectorAll('.article-date[data-fecha]').forEach(el => {
  const d = new Date(el.dataset.fecha + 'T00:00:00');
  if (!isNaN(d)) {
    el.textContent = d.toLocaleDateString('es-CL', { day: 'numeric', month: 'short', year: 'numeric' }).replace(/\./g, '');
  }
});

// ── CONTADORES DE TEMA EN EL INICIO ──
document.querySelectorAll('.topic-count[data-count]').forEach(badge => {
  badge.textContent = document.querySelectorAll('#all-topics [data-topic="' + badge.dataset.count + '"]').length;
});

// ── FILTROS DE LA PÁGINA DE ARTÍCULOS ──
const searchBox = document.getElementById('search-box');
const list = document.querySelector('.article-list');
const cards = [...document.querySelectorAll('.article-card[data-search]')];
const topicLinks = [...document.querySelectorAll('#topic-filter a[data-topic]')];
const selSort = document.getElementById('f-sort');
const selFecha = document.getElementById('f-fecha');
const selMin = document.getElementById('f-min');
const btnClear = document.getElementById('f-clear');
const emptyState = document.getElementById('empty-state');
const resultsLabel = document.getElementById('results-label');
const resultsCount = document.getElementById('results-count');
let currentTopic = 'todos';

// Quita tildes y pasa a minúsculas: "gestion" encuentra "Gestión"
const norm = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

const byDate = (a, b) => b.dataset.fecha.localeCompare(a.dataset.fecha);
const sorters = {
  recientes: byDate,
  antiguos: (a, b) => -byDate(a, b),
  corto: (a, b) => (a.dataset.min - b.dataset.min) || byDate(a, b),
  largo: (a, b) => (b.dataset.min - a.dataset.min) || byDate(a, b)
};

function passDate(card, rule) {
  if (rule === 'todas') return true;
  const d = new Date(card.dataset.fecha + 'T00:00:00');
  const now = new Date();
  if (rule === 'anio') return d.getFullYear() === now.getFullYear();
  return (now - d) / 86400000 <= Number(rule);
}

function passMin(card, rule) {
  if (rule === 'todos') return true;
  const m = Number(card.dataset.min);
  if (rule === 'rapido') return m <= 2;
  if (rule === 'medio') return m >= 3 && m <= 5;
  return m >= 6;
}

function applyFilters() {
  const q = searchBox ? norm(searchBox.value.trim()) : '';
  const fFecha = selFecha ? selFecha.value : 'todas';
  const fMin = selMin ? selMin.value : 'todos';
  let visible = 0;

  cards.forEach(card => {
    const show =
      (!q || norm(card.dataset.search).includes(q)) &&
      (currentTopic === 'todos' || card.dataset.topic === currentTopic) &&
      passDate(card, fFecha) &&
      passMin(card, fMin);
    card.classList.toggle('hidden', !show);
    if (show) visible++;
  });

  if (list && selSort) {
    [...cards].sort(sorters[selSort.value] || byDate).forEach(c => list.appendChild(c));
  }
  if (emptyState) emptyState.classList.toggle('hidden', visible > 0);
  if (resultsCount) resultsCount.textContent = visible + (visible === 1 ? ' artículo' : ' artículos');
}

function setTopic(topic, updateHash) {
  if (!topicLinks.some(a => a.dataset.topic === topic)) topic = 'todos';
  currentTopic = topic;
  topicLinks.forEach(a => a.classList.toggle('active', a.dataset.topic === topic));
  const active = topicLinks.find(a => a.dataset.topic === topic);
  if (resultsLabel && active) resultsLabel.textContent = active.dataset.label;
  if (updateHash) history.replaceState(null, '', location.pathname + location.search + '#' + topic);
  applyFilters();
}

if (cards.length) {
  if (searchBox) searchBox.addEventListener('input', applyFilters);
  [selSort, selFecha, selMin].forEach(s => s && s.addEventListener('change', applyFilters));

  topicLinks.forEach(a => {
    const n = a.dataset.topic === 'todos' ? cards.length : cards.filter(c => c.dataset.topic === a.dataset.topic).length;
    const badge = a.querySelector('.topic-count');
    if (badge) badge.textContent = n;
    a.addEventListener('click', e => { e.preventDefault(); setTopic(a.dataset.topic, true); });
  });

  if (btnClear) btnClear.addEventListener('click', () => {
    if (searchBox) searchBox.value = '';
    if (selSort) selSort.value = 'recientes';
    if (selFecha) selFecha.value = 'todas';
    if (selMin) selMin.value = 'todos';
    setTopic('todos', true);
  });

  window.addEventListener('hashchange', () => setTopic(location.hash.slice(1) || 'todos', false));

  // Búsqueda que viene desde el inicio: /articulos.html?q=scraping
  const qParam = new URLSearchParams(location.search).get('q');
  if (qParam && searchBox) searchBox.value = qParam;

  setTopic(location.hash.slice(1) || 'todos', false);
}

// ── ACTIVE NAV LINK ──
const currentPath = window.location.pathname;
document.querySelectorAll('nav a').forEach(a => {
  if (a.getAttribute('href') === currentPath ||
      (currentPath.startsWith(a.getAttribute('href')) && a.getAttribute('href') !== '/')) {
    a.classList.add('active');
  }
});
