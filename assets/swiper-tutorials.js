var swiper = new Swiper(".swiper-tutorials", {
  slidesPerView: '1',
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-tutorial-next",
    prevEl: ".swiper-tutorial-prev",
  },
  breakpoints: {
    // when window width is >= 720px
    560: {
      slidesPerView: '2',
      spaceBetween: 24
    },
    992: {
      slidesPerView: '3',
      spaceBetween: 24
    },
  }
});