// Targetting items
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')

// Display mobile menu
//Creat a function that adds a class that is either active or is active
// arrow function

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)