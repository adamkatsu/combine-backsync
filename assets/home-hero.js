const progressCircle = document.querySelector(".autoplay-progress svg");
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
  effect: "fade",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
    },
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  thumbs: {
    swiper: swiper,
  },
});