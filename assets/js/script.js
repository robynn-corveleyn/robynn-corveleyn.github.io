// script.js for Jekyll academic site

document.addEventListener('DOMContentLoaded', function() {
  // Update footer year
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    const now = new Date();
    const monthName = now.toLocaleString('en-US', { month: 'long' });
    const year = now.getFullYear();
    yearSpan.textContent = `${monthName} ${year}`;
  }
  
  const toggleBtn = document.getElementById('theme-toggle');
  const prefersDarkMedia = window.matchMedia('(prefers-color-scheme: dark)');

  // --- Apply dark or light mode ---
  const applyTheme = (theme) => {
    if (theme === 'dark') document.body.classList.add('dark-mode');
    else document.body.classList.remove('dark-mode');

    if (toggleBtn) {
      toggleBtn.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    }
  };

  // --- Determine initial theme ---
  let savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    applyTheme(savedTheme); // use saved user preference
  } else {
    applyTheme(prefersDarkMedia.matches ? 'dark' : 'light'); // use system preference
  }

  // --- Listen for system preference changes ---
  prefersDarkMedia.addEventListener('change', (e) => {
    if (e.matches) {
      // System switched to dark → always apply dark
      applyTheme('dark');
    } else {
      // System switched to light → apply light only if no manual preference
      if (!localStorage.getItem('theme')) {
        applyTheme('light');
      }
    }
  });

  // --- Toggle button ---
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('theme', newTheme); // save manual choice
    });
  }
  
  // Initialize Anchor.js
  if (window.anchors) {
    anchors.options = { visible: 'hover', placement: 'right' };
    anchors.add('h1, h2, h3, h4, h5, h6');
  }
 // Initialize Lightbox
  if (window.lightbox) {
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'fadeDuration': 200,
      'alwaysShowNavOnTouchDevices': true
    });
  }
  // Smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Fold-out abstract boxes
  document.querySelectorAll('.abstract-toggle').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const abstract = this.nextElementSibling; // <--- define abstract here
    if (abstract) {
      const currentDisplay = window.getComputedStyle(abstract).display;
      abstract.style.display = (currentDisplay === 'none') ? 'block' : 'none';
    }
  });
});
});
