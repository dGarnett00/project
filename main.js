const menu = document.querySelector(".menu"); // This finds the first element in the HTML with the class "menu" and saves it in a variable called menu
const navbar = document.querySelector(".navbar"); // This finds the first element in the HTML with the class "navbar" and saves it in a variable called navbar

menu.addEventListener("click", () => { // This sets up a function to run whenever the menu element is clicked
    navbar.classList.toggle("change"); // This adds the class "change" to the navbar if it isn't there, or removes it if it is, which shows or hides the navigation bar
});