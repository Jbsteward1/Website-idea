// Targetting items
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')
const navlogo = document.querySelector('#navbar__logo')
// Display mobile menu
//Creat a function that adds a class that is either active or is active
// arrow function

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)

// Show active enu when scrolling

const highlightMenu = () => {
    const elem = document.querySelector('highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu= document.querySelector('#services-page')
    let scrollPos = window.scrollY


    // adds highlight class to my menu items

    if(window.innerWidth > 960 && scrollPos < 600)
}