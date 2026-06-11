// Theme toggle logic for dark / light mode
const themeToggle = document.getElementById('theme-toggle');
const bodyElement = document.body;
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme) {
  bodyElement.dataset.theme = savedTheme;
  updateThemeIcon(savedTheme);
}

themeToggle.addEventListener('click', () => {
  const currentTheme = bodyElement.dataset.theme === 'light' ? 'light' : 'dark';
  const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
  bodyElement.dataset.theme = nextTheme;
  localStorage.setItem('portfolio-theme', nextTheme);
  updateThemeIcon(nextTheme);
});

function updateThemeIcon(theme) {
  const icon = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
  themeToggle.innerHTML = `<i class="${icon}"></i>`;
}

// Mobile navigation toggle
navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('show');
  navToggle.classList.toggle('open');
});

// Typing animation for hero subtitle
const typingElement = document.getElementById('typing');
const typingTexts = [
  'AI & Data Science Student',
  'Future Software Engineer',
  'Tech Enthusiast'
];
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenTexts = 1800;
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
  const currentText = typingTexts[textIndex];
  if (!isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeText, delayBetweenTexts);
      return;
    }
  } else {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % typingTexts.length;
    }
  }
  const timeout = isDeleting ? erasingSpeed : typingSpeed;
  setTimeout(typeText, timeout);
}

document.addEventListener('DOMContentLoaded', () => {
  if (typingElement) {
    setTimeout(typeText, 600);
  }
  revealOnScroll();
});

// Scroll reveal animations
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - 80) {
      element.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('resize', revealOnScroll);
