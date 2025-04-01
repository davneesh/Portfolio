const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

// Function to highlight active section
const highlightNav = () => {
    let top = window.scrollY;

    sections.forEach((sec) => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => link.classList.remove("active"));
            document.querySelector(`header nav a[href*="${id}"]`)?.classList.add("active");
        }
    });
};

// Function to toggle menu icon and navbar
const toggleMenu = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

// Event listeners
window.addEventListener("scroll", highlightNav);
menuIcon.addEventListener("click", toggleMenu);
