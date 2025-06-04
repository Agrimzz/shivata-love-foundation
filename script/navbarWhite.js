const navbar = document.getElementById("navbar");
const logo = document.getElementById("logo");
const active = document.getElementById("active");

const toggleBtn = document.getElementById("menu-toggle");
const closeBtn = document.getElementById("menu-close");
const menu = document.getElementById("mobile-menu");
const sidebar = document.getElementById("mobile-sidebar");
const overlay = document.getElementById("overlay");

toggleBtn.addEventListener("click", () => {
  menu.classList.remove("hidden");
  menu.classList.add("flex");
  requestAnimationFrame(() => {
    sidebar.classList.remove("-translate-x-full");
    sidebar.classList.add("translate-x-0");
  });
});

function closeMenu() {
  sidebar.classList.remove("translate-x-0");
  sidebar.classList.add("-translate-x-full");

  setTimeout(() => {
    menu.classList.remove("flex");
    menu.classList.add("hidden");
  }, 300);
}

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

window.addEventListener("scroll", () => {
  const threshold = window.innerHeight / 2;

  if (window.scrollY > threshold) {
    navbar?.classList.add("bg-white/20");
  } else {
    navbar?.classList.remove("bg-white/20");
  }
});
