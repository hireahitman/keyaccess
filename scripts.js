// Toggle menu visibility
function toggleMenu(event) {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
    event.stopPropagation(); // Prevent click event from bubbling up to the document
}

// Toggle visibility of hidden content
function toggleContent(contentId) {
    const content = document.getElementById(contentId);
    content.style.display = content.style.display === 'none' || content.style.display === '' ? 'block' : 'none';
}

// Scroll to home section
function scrollToHome() {
    const homeSection = document.getElementById('home');
    homeSection.scrollIntoView({ behavior: 'smooth' });
}

// Close menu when clicking anywhere on the document
document.addEventListener('click', function(event) {
    const menu = document.querySelector('.menu');
    if (menu.classList.contains('open') && !menu.contains(event.target) && !event.target.closest('.hamburger')) {
        menu.classList.remove('open');
    }
});
