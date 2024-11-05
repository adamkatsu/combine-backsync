var swiper = new Swiper(".swiper-product", {
  slidesPerView: "auto",
  centeredSlides: true,
  allowTouchMove: false,
  // speed: 500,
  navigation: {
    nextEl: ".swiper-product-next",
    prevEl: ".swiper-product-prev",
  },
  loop: true,
  spaceBetween: 24,
});
