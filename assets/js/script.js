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

  // Apply saved theme on page load
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }

  if (toggleBtn) {
    const updateToggleText = () => {
      toggleBtn.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    };

    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem(
        'theme',
        document.body.classList.contains('dark-mode') ? 'dark' : 'light'
      );
      updateToggleText();
    });

    updateToggleText();
  }
  // Dark mode toggle
  //const toggleBtn = document.getElementById('theme-toggle');
  //if (toggleBtn) {
    //toggleBtn.addEventListener('click', () => {
     // document.body.classList.toggle('dark-mode');
     // localStorage.setItem(
      //  'theme',
       // document.body.classList.contains('dark-mode') ? 'dark' : 'light'
      //);
    //});
    //if (localStorage.getItem('theme') === 'dark') {
      //document.body.classList.add('dark-mode');
    //}
  //}

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
      const currentDisplay = window.getComputedStyle(abstract).display;
      abstract.style.display = (currentDisplay === 'none') ? 'block' : 'none';
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
