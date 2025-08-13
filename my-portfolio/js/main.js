// mobile menu
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('primary-nav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// theme toggle (light/dark)
const themeToggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const saved = localStorage.getItem('theme');
if (saved) document.documentElement.dataset.theme = saved;
else document.documentElement.dataset.theme = prefersDark ? 'dark' : 'dark'; // default dark

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const cur = document.documentElement.dataset.theme;
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('theme', next);
  });
}

// dynamic year
document.getElementById('year').textContent = new Date().getFullYear();
