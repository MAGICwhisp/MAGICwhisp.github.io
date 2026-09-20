const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const open = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', open);
  });
}

// A small pixel-rain transition when navigating between pages.
document.querySelectorAll('a[href]').forEach((link) => {
  const url = new URL(link.href, window.location.href);
  if (url.origin === window.location.origin && url.pathname !== window.location.pathname && !link.hasAttribute('download')) {
    link.addEventListener('click', () => {
      document.body.classList.add('is-loading');
    });
  }
});

const search = document.querySelector('#skin-search');
const filter = document.querySelector('#skin-filter');
const cards = [...document.querySelectorAll('.catalog-card')];
const emptyState = document.querySelector('.empty-state');
function filterCards() {
  if (!cards.length) return;
  const query = (search?.value || '').toLowerCase().trim();
  const theme = filter?.value || 'all';
  let visible = 0;
  cards.forEach((card) => {
    const matchesText = card.dataset.name.includes(query);
    const matchesTheme = theme === 'all' || card.dataset.theme.includes(theme);
    const show = matchesText && matchesTheme;
    card.hidden = !show;
    if (show) visible += 1;
  });
  if (emptyState) emptyState.hidden = visible !== 0;
}
search?.addEventListener('input', filterCards);
filter?.addEventListener('change', filterCards);
