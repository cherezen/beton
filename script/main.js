const swiper = new Swiper('.swiper-container', {
  speed: 400,
  spaceBetween: 30,
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
      spaceBetween: 80,
    },
    360: {
      slidesPerView: 'auto',
      spaceBetween: 60,
    },
    400: {
      slidesPerView: 'auto',
      spaceBetween: 20,
    },
    440: {
      slidesPerView: 'auto',
      spaceBetween: 0,
    },
    480: {
      slidesPerView: 'auto',
      spaceBetween: -20,
    },
    530: {
      slidesPerView: 'auto',
      spaceBetween: -70,
    },
    577: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    769: {
      spaceBetween: 23,
      slidesPerView: 2,
    },
    993: {
      slidesPerView: 2,
    },
    1100: {
      spaceBetween: 25,
      slidesPerView: 3,
    },
    1300: {
      spaceBetween: 30,
      slidesPerView: 3,
    }
  }


});


const menuMobile = document.querySelector('.menu__mobile'),
        menu = document.querySelector('.menu'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.menu__close'),
        modalClose = document.querySelector('.modal__close'),
        button = document.querySelectorAll('.card__button'),
        modal = document.querySelector('.modal');


menuMobile.addEventListener('click', () => {
  menu.classList.add('menu-visible');
  overlay.classList.add('overlay-visible');
});

menu.addEventListener('click', () => {
  modal.classList.remove('modal-visible');
  menu.classList.remove('menu-visible');
  overlay.classList.remove('overlay-visible');
});

close.addEventListener('click', () => {
  menu.classList.remove('menu-visible');
  overlay.classList.remove('overlay-visible');
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('modal-visible');
  overlay.classList.remove('overlay-visible');
});

overlay.addEventListener('click', () => {
  modal.classList.remove('modal-visible');
  menu.classList.remove('menu-visible');
  overlay.classList.remove('overlay-visible');
});

button.forEach(e => e.addEventListener('click', () => {
  modal.classList.add('modal-visible');
  menu.classList.remove('menu-visible');
  overlay.classList.add('overlay-visible');
}));