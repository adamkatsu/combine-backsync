var swiper = new Swiper(".swiper-thumbs", {
  loop: true,
  spaceBetween: 4,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".swiper-show", {
  loop: true,
  spaceBetween: 8,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  thumbs: {
    swiper: swiper,
  },
});