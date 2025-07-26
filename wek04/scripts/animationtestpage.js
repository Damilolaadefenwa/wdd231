/* Navigation */
// Variables to select the navigation button and the navigation bar
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const body = document.body;

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            body.classList.toggle('nav-open');
        });
    }

    // Optional: Close menu when a navigation link is clicked (for single-page sites)
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (body.classList.contains('nav-open')) {
                body.classList.remove('nav-open');
            }
        });
    });

    // Optional: Close menu if user clicks outside the menu when it's open
    // This needs to be handled carefully with the overlay, or by checking clicks on the body
    // and ensuring the click wasn't on the menu itself.
    // For now, the overlay approach with `body.nav-open::before` handles this implicitly
    // by covering the content, so clicking the overlay will close it if you add a click listener to it.
    // A simpler approach for the overlay:
    body.addEventListener('click', (event) => {
        if (body.classList.contains('nav-open') && !event.target.closest('.main-nav') && !event.target.closest('.menu-toggle')) {
            body.classList.remove('nav-open');
        }
    });
});