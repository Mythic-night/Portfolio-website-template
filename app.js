const moonBtn = document.querySelector(".theme-toggle-moon");
const sunBtn = document.querySelector(".theme-toggle-sun");
const blackIcons = document.querySelectorAll(".black-icon");
const whiteIcons = document.querySelectorAll(".white-icon");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === 'dark') {
    document.documentElement.setAttribute("data-theme", "dark");
    sunBtn.style.display = 'block';
    moonBtn.style.display = 'none';
    whiteIcons.forEach(icon => {
        icon.style.display = 'block';
    });
    blackIcons.forEach(icon => {
        icon.style.display = 'none';
    });
}

moonBtn.addEventListener("click", () => {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    sunBtn.style.display = 'block';
    moonBtn.style.display = 'none';
    whiteIcons.forEach(icon => {
        icon.style.display = 'block';
    });
    blackIcons.forEach(icon => {
        icon.style.display = 'none';
    });
});

sunBtn.addEventListener("click", () => {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    moonBtn.style.display = 'block';
    sunBtn.style.display = 'none';
    whiteIcons.forEach(icon => {
        icon.style.display = 'none';
    });
    blackIcons.forEach(icon => {
        icon.style.display = 'block';
    });
});

const scrollBtn = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
    const viewHeight = window.innerHeight;
    const scrollY = window.scrollY;
    if (scrollY > viewHeight) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

function comingSoon() {
    const warnText = document.querySelector(".coming-soon");
    const cvBtn = document.getElementById("download-cv");
    cvBtn.disabled = true;
    cvBtn.style.opacity = '0.5';
    warnText.style.display = 'block';
    setTimeout(() => {
        warnText.style.display = 'none';
        cvBtn.disabled = false;
        cvBtn.style.opacity = '1';
    }, 3000);
}

function scrollToPoint(target) {
    const point = document.querySelector(target);
    if (point) {
        point.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.getElementById('hamburgerBtn');
    if (navMenu && hamburger) {
        navMenu.classList.toggle('open');
        hamburger.classList.toggle('active');
    }
}

function closeMenu() {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.getElementById('hamburgerBtn');
    if (navMenu && hamburger) {
        navMenu.classList.remove('open');
        hamburger.classList.remove('active');
    }
}

document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.getElementById('hamburgerBtn');
    if (navMenu && hamburger) {
        const isClickInside = navMenu.contains(event.target) || hamburger.contains(event.target);
        if (!isClickInside && navMenu.classList.contains('open')) {
            closeMenu();
        }
    }
});

window.addEventListener('resize', function() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu && window.innerWidth > 992 && navMenu.classList.contains('open')) {
        closeMenu();
    }
});

document.querySelectorAll('.nav-bar-right-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        if (target) {
            const element = document.querySelector(target);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

const backToTopButtons = document.querySelectorAll('.back-to-top-button');
backToTopButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});