window.addEventListener('scroll', function() {
  const navbar = document.getElementById('section-navbar');
  if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});

document.getElementById('nav-cart-open').addEventListener('click', () => {
  document.getElementById('site-cart-sidebar').classList.add('sidebar--opened');
  document.getElementById('site-cart-sidebar').style.display = 'grid'
})

const btnOpen = document.querySelector('.nav-open-btn');
const btnClose = document.querySelector('.nav-close-btn');
const navMenu = document.getElementById('nav-menu-mobile');

btnOpen.addEventListener('click', () => {
  navMenu.classList.add('nav-opened');
  console.log('click')
})
btnClose.addEventListener('click', () => {
  navMenu.classList.remove('nav-opened');
})