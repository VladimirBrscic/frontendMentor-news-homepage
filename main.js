const mobileMenuSwitch = document.querySelector('.mobile-menu-switch');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeMenu = document.querySelector('.close-menu');
const menu = document.querySelector('.nav-menu');



mobileMenuSwitch.addEventListener('click',()=>{
    
    closeMenu.classList.toggle('hide');
    hamburgerMenu.classList.toggle('hide');
    menu.classList.toggle('hide');
    
    let buttonAria = mobileMenuSwitch.getAttribute('aria-expanded');

    buttonAria === 'false' ? buttonAria = 'true' : buttonAria = 'false';
    mobileMenuSwitch.setAttribute('aria-expanded', buttonAria);
    })
