// Select the hamburger menu icon and the navigation menu
const hamburger-Menu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

// Add a click event listener to toggle the menu
hamburger-Menu.addEventListener('click', () => {
    // Toggle the "active" class for both the menu and the hamburger icon
    navMenu.classList.toggle('active');
    hamburger-Menu.classList.toggle('open');
});
