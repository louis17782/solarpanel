import '/style.scss';

function showMenu() {
  const navBar = document.getElementById('navbar');
  const navLinks = document.getElementById('navlinks');

  navBar.classList.replace('hidden', 'backdrop-transitioning');
  navLinks.classList.replace('hidden', 'nav-transitioning');

  setTimeout(() => {
    navBar.classList.remove('backdrop-transitioning');
    navLinks.classList.remove('nav-transitioning');
  })
};

function hideMenu() {
  const navBar = document.getElementById('navbar');
  const navLinks = document.getElementById('navlinks');

  navBar.classList.add('backdrop-transitioning');
  navLinks.classList.add('nav-transitioning');

  setTimeout(() => {
    navBar.classList.replace('backdrop-transitioning', 'hidden');
    navLinks.classList.replace('nav-transitioning', 'hidden');
  }, 500)
};

document.getElementById('menu-toggle').addEventListener('click', showMenu);
document.getElementById('menu-close').addEventListener('click', hideMenu);

//carousel

function moveCarouselRight() {
    const carousel = document.getElementById('carousel');
    const currentPosition = carousel.classList.item(1);
    
    if (currentPosition === 'carr-pos-1') {
      carousel.classList.replace('carr-pos-1', 'carr-pos-2');
    counter = 1; }
   else if (currentPosition === 'carr-pos-2') {
    carousel.classList.replace('carr-pos-2', 'carr-pos-3');
    counter = 2; }
   else if (currentPosition === 'carr-pos-3') { 
    carousel.classList.replace('carr-pos-3', 'carr-pos-4');
    counter = 3; }
   else if (currentPosition === 'carr-pos-4') {
    carousel.classList.replace('carr-pos-4', 'carr-pos-5');
    counter = 4; }
   else if (currentPosition === 'carr-pos-5') {
    carousel.classList.replace('carr-pos-5', 'carr-pos-6');
    counter = 5; }
   else if (currentPosition === 'carr-pos-6') { 
    carousel.classList.replace('carr-pos-6', 'carr-pos-1');
    counter = 0; }
}

function moveCarouselLeft() {
    const carousel = document.getElementById('carousel');
    const currentPosition = carousel.classList.item(1);
  
    if (currentPosition === 'carr-pos-1') {
       carousel.classList.replace('carr-pos-1', 'carr-pos-6');
       counter = 5; }
   else if (currentPosition === 'carr-pos-2') { 
    carousel.classList.replace('carr-pos-2', 'carr-pos-1');
    counter = 0; }
   else if (currentPosition === 'carr-pos-3') { 
    carousel.classList.replace('carr-pos-3', 'carr-pos-2');
    counter = 1; }
   else if (currentPosition === 'carr-pos-4') { 
    carousel.classList.replace('carr-pos-4', 'carr-pos-3');
    counter = 2; }
   else if (currentPosition === 'carr-pos-5') { 
    carousel.classList.replace('carr-pos-5', 'carr-pos-4');
    counter = 3; }
   else if (currentPosition === 'carr-pos-6') { 
    carousel.classList.replace('carr-pos-6', 'carr-pos-5');
    counter = 4; 
  }
};
document.getElementById('moveleft').addEventListener('click', moveCarouselLeft);
document.getElementById('moveright').addEventListener('click', moveCarouselRight);

// suministro sections

document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('services');
    
    function handleScroll() {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (sectionTop < windowHeight) {
            section.classList.add('animate');
        }
    }
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
  });

  // zoomSection

  const zoom = document.getElementById('zoomcard');

if (zoom) {
  zoom.addEventListener('mouseover', (event) => {
    const content = event.target.closest('.content-card');
    if (content) {
      content.style.transition = 'transform 0.1s ease';
      content.style.transform = 'scale(1.1)';
      content.style.cursor = 'pointer'; 
    }
  });

  zoom.addEventListener('mouseout', (event) => {
    const content = event.target.closest('.content-card');
    if (content) {
      content.style.transform = 'scale(1)'; 
    }
  });
}

//carousel logos

const carousel = document.getElementById('carouselimg');
let scrollSpeed = 1;

const images = carousel.children;
const imageCount = images.length;

for (let i = 0; i < imageCount; i++) {
  let clone = images[i].cloneNode(true);
  carousel.appendChild(clone);
}

function moveCarousel() {
  carousel.scrollLeft += scrollSpeed;

  if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
    carousel.scrollLeft = 0;
  }
}
setInterval(moveCarousel, 10);


