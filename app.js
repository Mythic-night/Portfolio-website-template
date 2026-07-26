const moonBtn = document.querySelector(".theme-toggle-moon");
const sunBtn = document.querySelector(".theme-toggle-sun");
const blackIcons = document.querySelectorAll(".black");
const lightIcons = document.querySelectorAll(".white");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === 'dark') {
    document.documentElement.setAttribute("data-theme", "dark");
    sunBtn.style.display = 'block';
    moonBtn.style.display = 'none';
    lightIcons.forEach(icon => {
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
    lightIcons.forEach(icon => {
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
    lightIcons.forEach(icon => {
        icon.style.display = 'none';
    });
    blackIcons.forEach(icon => {
        icon.style.display = 'block';
    });
});

const scrollBtn = document.querySelector(".scroll-top");

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
    }, 3000);
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function scrollToTarget(target) {
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
    navMenu.classList.toggle('open');
    hamburger.classList.toggle('active');
}

function closeMenu() {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.getElementById('hamburgerBtn');
    navMenu.classList.remove('open');
    hamburger.classList.remove('active');
}

document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.getElementById('hamburgerBtn');
    const isClickInside = navMenu.contains(event.target) || hamburger.contains(event.target);
    
    if (!isClickInside && navMenu.classList.contains('open')) {
        closeMenu();
    }
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 992 && document.getElementById('navMenu').classList.contains('open')) {
        closeMenu();
    }
});