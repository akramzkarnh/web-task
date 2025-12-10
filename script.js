

document.addEventListener("DOMContentLoaded", () => {

const html = document.documentElement;
html.setAttribute("lang", "en");
html.setAttribute("dir", "ltr");


   
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = themeToggle?.querySelector("i");

// load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  html.setAttribute("data-theme", "dark");
  themeIcon?.classList.replace("fa-moon", "fa-sun");
}

themeToggle?.addEventListener("click", () => {
  const isDark = html.getAttribute("data-theme") === "dark";

  if (isDark) {
    html.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    themeIcon?.classList.replace("fa-sun", "fa-moon");
  } else {
    html.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    themeIcon?.classList.replace("fa-moon", "fa-sun");
  }
});

const menuBtn = document.querySelector(".mobile-menu-toggle");
const nav = document.querySelector("nav");

menuBtn?.addEventListener("click", () => {
  nav.classList.toggle("active");
  document.body.classList.toggle("menu-open");

  const icon = menuBtn.querySelector("i");
  if (nav.classList.contains("active")) {
    icon.classList.replace("fa-bars", "fa-times");
  } else {
    icon.classList.replace("fa-times", "fa-bars");
  }
});

// close menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    nav.classList.contains("active") &&
    !nav.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {
    nav.classList.remove("active");
    document.body.classList.remove("menu-open");
    const icon = menuBtn.querySelector("i");
    icon.classList.replace("fa-times", "fa-bars");
  }
});

});
