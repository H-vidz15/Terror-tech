console.log("Welcome to Terror Tech!");

// Add event listener to navigation menu
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            console.log(`Clicked on ${link.textContent}`);
            
        });
    });
});
