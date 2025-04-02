// Mobile Menu Functionality
const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('#nav');
const navLinks = document.querySelectorAll('.nav-links h4');

// Toggle menu
mobileMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    nav.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && nav.classList.contains('active')) {
        nav.classList.add('closing');
        setTimeout(() => {
            nav.classList.remove('active', 'closing');
        }, 300);
    }
});

// Close menu when clicking links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.add('closing');
        setTimeout(() => {
            nav.classList.remove('active', 'closing');
        }, 300);
    });
});