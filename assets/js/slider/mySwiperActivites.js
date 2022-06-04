var swiper = new Swiper(".mySwiperActivites", {
  slidesPerView: 'auto',
  spaceBetween: 73,
  centeredSlides:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
