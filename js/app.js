const menu = document.querySelector('.menu-container')

menu.addEventListener('click', navFunction);

function navFunction() {
    toggleClasses();
}

function toggleClasses() {
    const menuWrapper = document.querySelector('.menu-wrapper');
    const navOverlay = document.querySelector('.nav-overlay');
    const navItems = document.querySelector('.nav-container');

    navOverlay.classList.toggle('expand');
    menuWrapper.classList.toggle('active');
    navItems.classList.toggle('active');


    // console.log(navContainer.childNodes[3]);
}