// Theme toggle logic for light and dark modes.
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const storedTheme = localStorage.getItem('theme');

function applyTheme(theme) {
  if (theme === 'light') {
    document.body.classList.add('light');
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    document.body.classList.remove('light');
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

if (storedTheme) {
  applyTheme(storedTheme);
} else {
  applyTheme(prefersDark ? 'dark' : 'light');
}

themeToggle.addEventListener('click', () => {
  const nextTheme = document.body.classList.contains('light') ? 'dark' : 'light';
  applyTheme(nextTheme);
  localStorage.setItem('theme', nextTheme);
});

// Typing animation for the hero text.
const typingText = document.getElementById('typing-text');
const textContent = 'AI & Data Science Student | Future Software Engineer | Tech Enthusiast';
let currentIndex = 0;
let charIndex = 0;

function typeLoop() {
  if (charIndex <= textContent.length) {
    typingText.textContent = textContent.slice(0, charIndex);
    charIndex += 1;
    setTimeout(typeLoop, 60);
  } else {
    setTimeout(() => {
      charIndex = 0;
      typeLoop();
    }, 1800);
  }
}

typeLoop();

// Fade-in animation for sections when they enter the viewport.
const sectionElements = document.querySelectorAll('.section-fade');
const observerOptions = {
  root: null,
  rootMargin: '0px 0px -120px 0px',
  threshold: 0.15,
};

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

sectionElements.forEach(section => revealObserver.observe(section));
