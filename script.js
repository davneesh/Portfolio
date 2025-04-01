document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const darkModeIcon = document.getElementById("dark-mode-icon");
    const lightModeIcon = document.getElementById("light-mode-icon");

    // Check saved theme
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        lightModeIcon.style.display = "block";
        darkModeIcon.style.display = "none";
    }

    // Toggle dark mode
    document.querySelector(".theme-toggle").addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            lightModeIcon.style.display = "block";
            darkModeIcon.style.display = "none";
        } else {
            localStorage.setItem("theme", "light");
            lightModeIcon.style.display = "none";
            darkModeIcon.style.display = "block";
        }
    });

    // Typing Effect
    const typingText = document.getElementById("typing-text");
    const roles = ["Product Manager", "Data Analyst", "Software Engineer"];
    let index = 0, charIndex = 0, isDeleting = false;

    function typeEffect() {
        let currentRole = roles[index];
        if (isDeleting) {
            typingText.textContent = currentRole.substring(0, charIndex--);
        } else {
            typingText.textContent = currentRole.substring(0, charIndex++);
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000); // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % roles.length; // Move to next role
        }

        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }

    typeEffect();
});
