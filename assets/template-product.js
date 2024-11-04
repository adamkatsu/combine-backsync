var swiper = new Swiper(".product-gallery-thumbs", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".product-gallery-main", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  spaceBetween: 8,
  thumbs: {
    swiper: swiper,
  },
});