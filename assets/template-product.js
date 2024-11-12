var swiper = new Swiper(".product-gallery-thumbs", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".product-gallery-main", {
  loop: true,
  spaceBetween: 0,
  thumbs: {
    swiper: swiper,
  },
  breakpoints: {
    480: {
      spaceBetween: 8
    },
  }
});