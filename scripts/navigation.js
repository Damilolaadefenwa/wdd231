// NAVIGATION RESPONSIVENESS
    //1. Mobile View - Hamburger
    // storing the selected elements to target my html id attribute in the button and nav.tag
const navbutton = document.querySelector('#ham-btn');
const navLinks = document.querySelector('#nav-bar');
//Adding my event listener to toggle the show class off and on
navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navLinks.classList.toggle('show');
    //Update aria-label for accessibility
    if (navbutton.classList.contains('show')) {
        navbutton.setAttribute('aria-label', 'close main navigation menu')
    }
    else {
        navbutton.setAttribute('arial-label', 'open main navigation menu')
    }
});


  