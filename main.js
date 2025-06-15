// main.js
// Dark mode toggle functionality

document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const toggleBtn = document.getElementById('theme-toggle');
  const toggleBtnMobile = document.getElementById('theme-toggle-mobile');

  // SVGs for sun and moon
  const sunIcon = `<svg fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path d="M12 4.5a1 1 0 0 1 1 1V7a1 1 0 1 1-2 0V5.5a1 1 0 0 1 1-1zm0 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm7.07-5.07a1 1 0 0 1 0 2h-1.5a1 1 0 1 1 0-2h1.5zm-12.14 0a1 1 0 0 1 0 2H5.5a1 1 0 1 1 0-2h1.43zm9.19 5.66a1 1 0 0 1 1.41 1.41l-1.06 1.06a1 1 0 1 1-1.41-1.41l1.06-1.06zm-8.48 0a1 1 0 0 1 1.41 1.41l-1.06 1.06a1 1 0 1 1-1.41-1.41l1.06-1.06zm8.48-8.48a1 1 0 0 1 1.41-1.41l1.06 1.06a1 1 0 1 1-1.41 1.41l-1.06-1.06zm-8.48 0a1 1 0 0 1 1.41-1.41l1.06 1.06a1 1 0 1 1-1.41 1.41L6.07 7.61z"/></svg>`;
  const moonIcon = `<svg fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 12.79A9 9 0 0 1 11.21 3a1 1 0 0 0-1.13 1.32A7 7 0 0 0 12 21a7 7 0 0 0 7.68-8.92 1 1 0 0 0 1.32-1.13z"/></svg>`;

  function setTheme(isLight) {
    if (isLight) {
      body.classList.add('light');
      if (toggleBtn) toggleBtn.innerHTML = moonIcon;
      if (toggleBtnMobile) toggleBtnMobile.innerHTML = moonIcon;
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.remove('light');
      if (toggleBtn) toggleBtn.innerHTML = sunIcon;
      if (toggleBtnMobile) toggleBtnMobile.innerHTML = sunIcon;
      localStorage.setItem('theme', 'dark');
    }
  }

  // Load theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    setTheme(true);
  } else {
    setTheme(false);
  }

  // Toggle on click (desktop)
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      setTheme(!body.classList.contains('light'));
    });
  }
  // Toggle on click (mobile)
  if (toggleBtnMobile) {
    toggleBtnMobile.addEventListener('click', function () {
      setTheme(!body.classList.contains('light'));
    });
  }

  // Hamburger menu logic (fullscreen overlay)
  const navToggle = document.getElementById('nav-toggle');
  const navMenuOverlay = document.getElementById('nav-menu-overlay');
  const navClose = document.getElementById('nav-close');
  if (navToggle && navMenuOverlay) {
    navToggle.addEventListener('click', () => {
      navMenuOverlay.classList.remove('hidden');
    });
    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenuOverlay.classList.add('hidden');
      });
    }
    navMenuOverlay.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenuOverlay.classList.add('hidden');
      });
    });
  }
});

// Optional: Add Tailwind light mode support via custom CSS if needed 