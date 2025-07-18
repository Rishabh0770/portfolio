// ======================================================
// INDEX.JS | Main Script for Theme, Slider & AOS
// ======================================================

document.addEventListener("DOMContentLoaded", function () {
  
  // ===============================
  // Initialize Theme from LocalStorage
  // ===============================
  initializeTheme();

  // ===============================
  // Tech Slider: Seamless infinite scroll
  // ===============================
  const track = document.querySelector('.tech-slider-track');
  if (track) {
    // Duplicate slider content to make it loop smoothly
    track.innerHTML += track.innerHTML;
  }

  // ===============================
  // Theme Toggle Logic
  // ===============================
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');

  themeToggle.addEventListener('click', function () {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    // Update <html> theme attribute
    document.documentElement.setAttribute('data-bs-theme', newTheme);

    // Change icon based on theme
    themeIcon.className = newTheme === 'light' ? 'bi bi-moon-fill' : 'bi bi-sun-fill';

    // Save preference to localStorage
    localStorage.setItem('theme', newTheme);
  });

});

// ===============================
// Function: Apply saved theme from localStorage
// ===============================
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  const themeIcon = document.getElementById('themeIcon');

  // Apply the saved theme
  document.documentElement.setAttribute('data-bs-theme', savedTheme);

  // Set the correct icon for saved theme
  themeIcon.className = savedTheme === 'light' ? 'bi bi-moon-fill' : 'bi bi-sun-fill';
}

// ===============================
// AOS (Animate On Scroll) Initialization
// ===============================
AOS.init({
  duration: 1000, // Animation duration in milliseconds
  // once: true // Uncomment if you want animation only once
});
