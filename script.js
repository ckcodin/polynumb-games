const navLinks = document.querySelectorAll("[data-page]");
const pages = document.querySelectorAll(".page");

function showPage(pageId) {
  pages.forEach(page => {
    page.classList.toggle("active-page", page.id === pageId);
  });

  navLinks.forEach(link => {
    link.classList.toggle(
      "active",
      link.dataset.page === pageId && link.classList.contains("nav-link")
    );
  });

  history.replaceState(null, "", "#" + pageId);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

navLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    showPage(link.dataset.page);
  });
});

function loadInitialPage() {
  const page = window.location.hash.replace("#", "");
  const valid = ["home", "about", "updates", "community"];
  showPage(valid.includes(page) ? page : "home");
}

function downloadGame(event, gameName) {
  event.preventDefault();

  // Replace the alert below with your real download URL.
  // Example:
  // window.location.href = "downloads/rc-drift-v0.2.apk";

  alert(
    `${gameName}: Add your real download link in script.js or directly on the download button.`
  );
}

window.addEventListener("hashchange", loadInitialPage);
loadInitialPage();
