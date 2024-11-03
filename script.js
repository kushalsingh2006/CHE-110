// script.js
// Add event listener to navigation links
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetSection = document.querySelector(this.getAttribute("href"));
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });
});

// Add animation to sections
const sections = document.querySelectorAll("section");
sections.forEach(function(section) {
    section.addEventListener("mouseover", function() {
        this.style.transform = "scale(1.1)";
    });
    section.addEventListener("mouseout", function() {
        this.style.transform = "";
    });
});