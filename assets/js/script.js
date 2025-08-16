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
  
  // Determine the initial theme
  let savedTheme = localStorage.getItem('theme');
  // Check system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // If nothing is saved, store system preference
  if (!savedTheme) {
    savedTheme = prefersDark ? 'dark' : 'light';
    localStorage.setItem('theme', savedTheme);
  }
  
  const applyTheme = (theme) => {
    // Apply dark or light mode
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
  document.body.classList.remove('dark-mode');
  }
  if (toggleBtn) {
    toggleBtn.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    }
  };
    
  applyTheme(savedTheme);
  
  prefersDarkMedia.addEventListener('change', (e) => {
    const manualTheme = localStorage.getItem('theme');
    if (!manualTheme || manualTheme === (e.matches ? 'dark' : 'light')) {
      const newTheme = e.matches ? 'dark' : 'light';
      applyTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    }
  });

  // Toggle button
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('theme', newTheme);
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
