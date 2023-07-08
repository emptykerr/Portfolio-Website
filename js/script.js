 //toggle icon navbar



//selectors
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
const darkMode = document.querySelector('.switch');
let switchContainer = document.querySelector('.switch-container');
let switchIcon = document.querySelector('.switch i');
const home = document.getElementById('home');
const currentBackground = home.style.background;
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
    if (document.body.classList.contains('dark-mode')) {
        home.style.backgroundImage = "url('../images/background-light.png')";
    } else {
        home.style.backgroundImage = "url('../images/background.png')";
    }
}


switchContainer.onclick = () => {
    switchContainer.classList.toggle('active');
    switchIcon.classList.toggle('bx-toggle-left');
    switchIcon.classList.toggle('bxs-toggle-right');
 
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

          // Check if user has reached the bottom of the page
          if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // Add show-animate class to the contact section
            document.querySelector('.contact').classList.add('show-animate');
            document.querySelector('.footer').classList.add('show-animate');
        }

        if(checkVisible(sec)){
            sec.classList.add('show-animate');
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

const textPrompts = ['Software Developer', 'Industrial Designer', 'Teacher & Learner', 'Media Designer', 'Photographer', 'Creative Thinker', 'Programmer'];
let currentPromptIndex = 0;

function animateText() {
  const textElement = document.querySelector('.text-animate h3');
  const currentPrompt = textPrompts[currentPromptIndex];
  textElement.textContent = currentPrompt;
  const textWidth = textElement.offsetWidth + 'px';

  textElement.style.width = textWidth;
  textElement.style.animationDuration = 6 + 's';
  textElement.classList.remove('show-animate');

  void textElement.offsetWidth; // Trigger reflow to restart the animation
  textElement.classList.add('show-animate');

  currentPromptIndex = (currentPromptIndex + 1) % textPrompts.length;

  setTimeout(animateText, 6100); // Delay before transitioning to the next prompt
}

animateText(); // Initial animation

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }