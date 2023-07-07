 //toggle icon navbar



//selectors
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
const darkMode = document.querySelector('.switch');
let switchContainer = document.querySelector('.switch-container');
let switchIcon = document.querySelector('.switch i');
//state
const theme = localStorage.getItem('theme');

//onmount
  theme && document.body.classList.add('theme');

//handlers
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

darkMode.onclick = () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode'));
}

switchContainer.onclick = () => {
    switchContainer.classList.toggle('active');
    switchIcon.classList.toggle('bx-toggle-left');
    switchIcon.classList.toggle('bx-toggle-right');
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    // sticky header
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
           //active navbar links
              navLinks.forEach(links=>{
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
                // active sections for animation on scroll
                sec.classList.add('show-animate');
        }
        // to use animation that repeats on scroll
        else{
            sec.classList.remove('show-animate');
        }
    })
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    //animate footer on scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}