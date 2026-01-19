// Gait Analysis Research - script.js

// Generate animated grid cells
function generateGridCells() {
    const gridBg = document.getElementById('gridBg');
    const cellCount = 15;
    for (let i = 0; i < cellCount; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        cell.style.left = Math.random() * 100 + '%';
        cell.style.top = Math.random() * 100 + '%';
        cell.style.animationDelay = Math.random() * 4 + 's';
        gridBg.appendChild(cell);
    }
}

// Toggle mobile menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuBtn = document.getElementById('menuBtn');
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('active');
}

// Close mobile menu
function closeMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuBtn = document.getElementById('menuBtn');
    navLinks.classList.remove('active');
    menuBtn.classList.remove('active');
}

// Show/hide back to top button
window.addEventListener('scroll', function() {
    const backToTop = document.getElementById('backToTop');
    if (window.pageYOffset > 300) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
});

// Scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Smooth scroll for navigation links
window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                document.getElementById('navLinks').classList.remove('active');
            }
        });
    });
    generateGridCells();
});
