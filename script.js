// Select the menu and the toggle button
const menu = document.querySelector('.menu');
const menuToggle = document.querySelector('#mobile-menu');

// Add a click event to toggle the menu visibility
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});
