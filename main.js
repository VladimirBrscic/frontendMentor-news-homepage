const mobileMenuSwitch = document.getElementById('mobile-menu-switch');
const hamburgerMenu = document.getElementById('hamburger-menu');
const closeMenu = document.getElementById('close-menu');
const menu = document.getElementById('menu');




mobileMenuSwitch.addEventListener('click',()=>{
    closeMenu.classList.toggle('hide');
    hamburgerMenu.classList.toggle('hide');
    menu.classList.toggle('hide')
})
