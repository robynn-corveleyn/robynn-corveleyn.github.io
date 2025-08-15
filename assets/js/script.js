// script.js for Jekyll academic site

// Automatically update the footer year
document.addEventListener('DOMContentLoaded', function() {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
// Dark mode toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
    }
  }

  // Initialize Anchor.js to add anchor links to headings
  if (window.anchors) {
    anchors.options = {
      visible: 'hover',
      placement: 'right'
    };
    anchors.add('h1, h2, h3, h4, h5, h6');
  }

  // Initialize Lightbox (basic example, using lightbox2)
  if (window.lightbox) {
    lightbox.option({
      resizeDuration: 200,
      wrapAround: true,
      fadeDuration: 200
    });
  }
});

// Smooth scroll for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId.length > 1) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Fold out abstract boxes
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.abstract-toggle').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const abstract = this.nextElementSibling;
      if (abstract.style.display === 'none') {
        abstract.style.display = 'block';
      } else {
        abstract.style.display = 'none';
      }
    });
  });
});
/* Include in your layout <head> to load dependencies:
<script src="https://cdn.jsdelivr.net/npm/anchor-js/anchor.min.js"></script>
<link href="https://cdn.jsdelivr.net/npm/lightbox2@2/dist/css/lightbox.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/lightbox2@2/dist/js/lightbox.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js" async></script>
*/
