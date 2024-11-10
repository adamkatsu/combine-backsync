var swiper = new Swiper(".swiper-product", {
  slidesPerView: "1",
  centeredSlides: true,
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-product-next",
    prevEl: ".swiper-product-prev",
  },
  loop: true,
  spaceBetween: 24,
  breakpoints: {
    // when window width is >= 480px
    720: {
      slidesPerView: 'auto',
      spaceBetween: 24
    },
  }
});
