var swiper = new Swiper(".swiper-product", {
  slidesPerView: "auto",
  centeredSlides: true,
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-product-next",
    prevEl: ".swiper-product-prev",
  },
  loop: true,
  spaceBetween: 24
  // breakpoints: {
  //   // when window width is >= 720px
  //   720: {
  //     slidesPerView: 'auto',
  //     spaceBetween: 24
  //   },
  // }
});
