// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const mobileMenu = document.getElementById('mobileMenu');
const menuBackdrop = document.getElementById('menuBackdrop');

function openMenu() {
    mobileMenu.classList.add('is-open');
    menuBackdrop.classList.add('is-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    mobileMenu.classList.remove('is-open');
    menuBackdrop.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

if (menuToggle) menuToggle.addEventListener('click', openMenu);
if (menuClose) menuClose.addEventListener('click', closeMenu);
if (menuBackdrop) menuBackdrop.addEventListener('click', closeMenu);

// Close mobile menu with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        closeMenu();
    }
});

// Back to top button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('is-visible');
    } else {
        backToTop.classList.remove('is-visible');
    }
});

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Heart / save button toggle (like button)
document.querySelectorAll('.heart').forEach((heart) => {
    heart.addEventListener('click', () => {
        heart.classList.toggle('is-saved');
    });
});

// Search button feedback (no backend, so just prevent confusing no-op clicks)
const searchButton = document.querySelector('.searchbar1 button');
const searchInput = document.querySelector('.searchbar1 input');

if (searchButton && searchInput) {
    searchButton.addEventListener('click', () => {
        if (searchInput.value.trim().length === 0) {
            searchInput.focus();
            searchInput.placeholder = 'Type a place to search...';
        }
    });
}
