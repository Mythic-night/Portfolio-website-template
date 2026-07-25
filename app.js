function scrollToPoint(target) {
    let element = document.querySelector(target)
    if (element) {
        element.scrollIntoView(
            {behavior: 'smooth'}
        );
    }
} 
function toggleTheme() {
    const sunIcon = document.querySelector(".theme-toggle-sun");
    const moonIcon = document.querySelector(".theme-toggle-moon");
    const isDark = document.body.classList.contains("dark-theme");
    const whiteIcons = document.querySelectorAll("#white");
    const blackIcons = document.querySelectorAll("#black");
    if (isDark) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
        localStorage.setItem("theme", "light");
        whiteIcons.forEach(icon => {
            icon.style.display = 'none';
        })
        blackIcons.forEach(icon => {
            icon.style.display = 'block';
        })
        document.body.classList.remove("dark-theme");
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
        localStorage.setItem("theme", "dark");
        whiteIcons.forEach(icon => {
            icon.style.display = 'block';
        })
        blackIcons.forEach(icon => {
            icon.style.display = 'none';
        })
        document.body.classList.add("dark-theme");
    }
}
function comingSoon() {
    const msg = document.querySelector(".coming-soon");
    const cvBtn = document.getElementById("download-cv");
    msg.style.display = 'block';
    cvBtn.disabled = true;
    setTimeout(() => {
        msg.style.display = 'none';
        cvBtn.disabled = false;
    }, 4000)
}
document.addEventListener("DOMContentLoaded", () => {
    const sunIcon = document.querySelector(".theme-toggle-sun");
    const moonIcon = document.querySelector(".theme-toggle-moon");
    const savedTheme = localStorage.getItem("theme");
    const whiteIcons = document.querySelectorAll("#white");
    const blackIcons = document.querySelectorAll("#black");
    const isDark = savedTheme === 'dark';
    if (isDark) {
        document.body.classList.add("dark-theme");
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
        whiteIcons.forEach(icon => {
            icon.style.display = 'none';
        })
        blackIcons.forEach(icon => {
            icon.style.display = 'block';
        })
    } else {
        document.body.classList.remove("dark-theme");
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
        whiteIcons.forEach(icon => {
            icon.style.display = 'block';
        })
        blackIcons.forEach(icon => {
            icon.style.display = 'none';
        })
    }
    if (moonIcon) {
        moonIcon.addEventListener("click", toggleTheme);
    }
    if (sunIcon) {
        sunIcon.addEventListener("click", toggleTheme);
    }
})