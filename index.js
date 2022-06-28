const navBar = document.getElementById("nav-bar")
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');


function stickyNavBar() {
    if(window.pageYOffset === 0){
        navBar.classList.remove('semi-transparent')
    } else if(window.pageYOffset > 0){
        navBar.classList.add('semi-transparent')
    }
}

window.addEventListener("scroll", stickyNavBar)

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})
