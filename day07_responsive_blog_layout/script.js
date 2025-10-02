// Select hamburger and nav-links
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Add click event
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // toggle 'active' class
});
