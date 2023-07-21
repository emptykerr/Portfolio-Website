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

const textPrompts = ['Software Developer', 'Industrial Designer.', 'Teacher & Learner...', 'Media Designer . . . .', 'Photographer . . . . . .', 'Creative Thinker . . .', 'Programmer . . . . . . .'];
let currentPromptIndex = 0;

function animateText() {
  const textElement = document.querySelector('.text-animate h3');
  const currentPrompt = textPrompts[currentPromptIndex];
  textElement.textContent = currentPrompt;

  const element = document.querySelector('.text-animate');
  // const textWidth = window.getComputedStyle(element).getPropertyValue('width');
  // element.style.maxWidth = textWidth;


  // let textWidth;
  // switch (currentPromptIndex) {
  //   case 0:
  //     textWidth = 288 + 'px';
  //     break;
  //   case 1:
  //     textWidth = 278 + 'px';
  //     break;
  //   case 2:
  //     textWidth = 270 + 'px';
  //     break;
  //   case 3:
  //     textWidth = 230+ 'px';
  //     break;
  //   case 4:
  //     textWidth = 210+ 'px';
  //     break;
  //   case 5:
  //     textWidth = 245+ 'px';
  //     break;
  //   case 6:
  //     textWidth = 195+ 'px';
  //     break;
  //   default:
  //     textWidth = 0;
  //     break;
  // }
  //  element.style.width = textWidth;
// console.log("textWidth" + textWidth);
// console.log(window.getComputedStyle(textElement).getPropertyValue('width'));

  

  
  textElement.style.animationDuration = 6 + 's';
  element.style.animationDuration = 6 + 's';

  element.classList.remove('show-animate');

  void element.offsetWidth; // Trigger reflow to restart the animation
  element.classList.add('show-animate');

  currentPromptIndex = (currentPromptIndex + 1) % textPrompts.length;

  setTimeout(animateText, 6000); // Delay before transitioning to the next prompt
}

animateText(); // Initial animation

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }


  let slideIndex = 1;
  let slideInterval;
  
  showSlides(slideIndex);
  startSlideInterval();
  
  // Function to start the slideshow interval
  function startSlideInterval() {
    if (!slideInterval) {
      slideInterval = setInterval(() => plusSlides(1), 4000);
    }
  }
  
  // Function to pause the slideshow interval
  function pauseSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = null;
    setTimeout(() => {
      startSlideInterval();
    }, 15000);
  }
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active-dot";
  }
  
  // Add click event listeners to dots
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => {
      currentSlide(i + 1);
      pauseSlideInterval();
    });
  }
  