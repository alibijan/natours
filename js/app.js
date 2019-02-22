const navContainer = document.querySelector('.nav-container')

navContainer.addEventListener('click', navFunction);

function navFunction() {
    toggleClasses();
}

function toggleClasses() {
    let navOverlay = navContainer.childNodes[3]
    navOverlay.classList.toggle('expand');
    console.log(navContainer.childNodes[3]);
}