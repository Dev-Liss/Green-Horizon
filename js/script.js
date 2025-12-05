var prevScrollpos = window.scrollY; 

// Navbar hiding function
function handleNavbarScroll() {
    var currentScrollPos = window.scrollY;
    var navbar = document.getElementById("nav_bar");

    if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0";
    } else {
        navbar.style.top = "-90px";
    }

    prevScrollpos = currentScrollPos;
}

// Show/Hide "Go to Top" button function
function handleGoToTopButton() {
    let button = document.getElementById("goToTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// Combine both functions in a single scroll event listener
window.addEventListener("scroll", function () {
    handleNavbarScroll();
    handleGoToTopButton();
});

// Function to smoothly scroll to the top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Function to redirect to different pages
function redirectTo(page) {
    window.location.href = page;
}

// Function to toggle mobile menu
function toggleMenu() {
    var navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");
}
