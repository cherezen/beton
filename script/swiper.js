const swiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 'auto',
    slidesPerView: 3,
    centerSlides: true,
    centerSlidesBounds: true,
    updateOnWindowResize: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: -80,
      },
      577: {
        slidesPerView: 'auto',
        spaceBetween: 0,
      },
      769: {
        spaceBetween: 23,
        slidesPerView: 2,
      },
      993: {
        slidesPerView: 'auto',
        spaceBetween: 0,
      },
      1050: {
        slidesPerView: 'auto',
        spaceBetween: 0,
      },
  
      1100: {
        slidesPerView: 'auto',
        spaceBetween: 0,
      },
  
      1210: {
        slidesPerView: 3,
        spaceBetween: 22,
      },
      1300: {
        spaceBetween: 22,
        slidesPerView: 3,
      }
    }
  
  
  });