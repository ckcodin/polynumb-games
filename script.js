const pages = document.querySelectorAll('.page');
const pageControls = document.querySelectorAll('[data-page]');

function showPage(pageId) {
  const selectedPage = document.getElementById(pageId);
  if (!selectedPage) return;

  pages.forEach((page) => {
    page.classList.toggle('active-page', page.id === pageId);
  });

  document.querySelectorAll('.nav-link').forEach((link) => {
    link.classList.toggle('active', link.dataset.page === pageId);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

pageControls.forEach((control) => {
  control.addEventListener('click', (event) => {
    const pageId = control.dataset.page;
    if (!pageId) return;
    event.preventDefault();
    showPage(pageId);
  });
});

function downloadGame(event, gameName) {
  event.preventDefault();
  alert(`${gameName}: no download has been added yet.`);
}

showPage('home');
