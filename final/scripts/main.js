
// Author : Damilola Adefenwa
// Date   : 2025-08-07
document.addEventListener('DOMContentLoaded', () => {
    // Set current year for copyright
    const copyrightYearSpan = document.getElementById('current-year');
    if (copyrightYearSpan) {
        copyrightYearSpan.textContent = new Date().getFullYear();
    }

    // Set last modified date
    const lastModifiedSpan = document.getElementById('last-modified');
    if (lastModifiedSpan) {
        // Format the date as desired (e.g., MM/DD/YYYY HH:MM:SS)
        const lastModifiedDate = new Date(document.lastModified);
        const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false // Use 24-hour format
        };
        lastModifiedSpan.textContent = lastModifiedDate.toLocaleDateString('en-US', options);
    }

    // Hamburger menu toggle
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            hamburgerBtn.setAttribute('aria-expanded', navLinks.classList.contains('open'));
        });
    }
});
