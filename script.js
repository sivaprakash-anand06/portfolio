// Back to Top button
const backToTopButton = document.getElementById("backToTop");

window.onscroll = function() {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// script.js
document.addEventListener("DOMContentLoaded", function() {
    const projectButtons = document.querySelectorAll(".project-button");

    projectButtons.forEach(button => {
        button.addEventListener("click", function() {
            const projectContent = this.nextElementSibling;
            if (projectContent.style.display === "none" || projectContent.style.display === "") {
                projectContent.style.display = "block";
                this.textContent = "Hide: " + this.dataset.project;
            } else {
                projectContent.style.display = "none";
                this.textContent = "Show: " + this.dataset.project;
            }
        });
    });
});
