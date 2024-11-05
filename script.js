// Function to toggle the menu
function toggleMenu() {
    const navbarLinks = document.getElementById('navbarLinks');
    navbarLinks.classList.toggle('active');
}

// Event listener to detect clicks outside the menu and close it if open
document.addEventListener('click', function(event) {
    const navbarLinks = document.getElementById('navbarLinks');
    const menuToggle = document.querySelector('.menu-toggle');

    // Check if the click is outside the menu and the menu button
    if (!navbarLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        // Remove the 'active' class if the menu is open
        if (navbarLinks.classList.contains('active')) {
            navbarLinks.classList.remove('active');
        }
    }
});
