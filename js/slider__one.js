new Swiper('.swiper-container', {
  navigation: {
    nextEl:'.swiper-button-next',
    prevEl: '.swiper-button-prev' 
  },
  slidesPerView: 'auto',
  spaceBetween: 12,
  breakpoints: {
    600: {
      spaceBetween: 40,
    },
  }
});
