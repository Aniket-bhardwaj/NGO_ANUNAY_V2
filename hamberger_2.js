// Mobile Menu Functionality
const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('#nav');
const navLinksContainer = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links h4');

// Toggle menu and hide hamburger
mobileMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    nav.classList.toggle('active');
    mobileMenu.style.opacity = '0'; // Hide hamburger while keeping its space
    setTimeout(() => {
        mobileMenu.style.display = 'none'; // Remove from layout completely
    }, 300);
});

// Show hamburger when closing menu
function showHamburger() {
    mobileMenu.style.display = 'block';
    setTimeout(() => {
        mobileMenu.style.opacity = '1';
    }, 10);
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (nav.classList.contains('active') && 
        !navLinksContainer.contains(e.target) && 
        !mobileMenu.contains(e.target)) {
        nav.classList.add('closing');
        showHamburger();
        setTimeout(() => {
            nav.classList.remove('active', 'closing');
        }, 300);
    }
});

// Close menu when clicking links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.add('closing');
        showHamburger();
        setTimeout(() => {
            nav.classList.remove('active', 'closing');
        }, 300);
    });
});