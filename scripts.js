function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}
// Get the menu and hamburger elements
const menu = document.getElementById('menu');
const hamburger = document.getElementById('hamburger');

// Function to toggle the menu
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Close the menu when clicking outside
window.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove('active');
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    // Toggle the menu open/close when the hamburger icon is clicked
    hamburger.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent click from bubbling to the document
        menu.classList.toggle("active");
    });

    // Close the menu if clicking outside of it
    document.addEventListener("click", (event) => {
        if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
            menu.classList.remove("active");
        }
    });
});
hamburger.addEventListener("click", () => {
    console.log("Hamburger clicked"); // Log to test if event fires
    menu.classList.toggle("active");
});
hamburger.addEventListener("click", () => {
    console.log("Hamburger clicked"); // Log to test if event fires
    menu.classList.toggle("active");
});
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("refundPopup");

    // Show the popup 15 seconds after page load
    setTimeout(() => {
        popup.classList.add("show");

        // Hide the popup after 20 seconds
        setTimeout(() => {
            popup.classList.remove("show");
        }, 20000);
    }, 15000);
});
