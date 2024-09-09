import './style.scss';

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


// zoom section

const zoomSection = document.getElementById('zoom-section');

if (zoomSection) {
  zoomSection.addEventListener('mouseover', (event) => {
    const img = event.target.closest('img');
    if (img) {
      img.style.transition = 'transform 0.5s ease';
      img.style.transform = 'scale(1.1)'; 
      img.style.cursor = 'pointer'
    }
  });

  zoomSection.addEventListener('mouseout', (event) => {
    const img = event.target.closest('img');
    if (img) {
      img.style.transform = 'scale(1)'; 
    }
  });
}
