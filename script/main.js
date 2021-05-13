


const menuMobile = document.querySelector('.menu__mobile'),
        menu = document.querySelector('.menu'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.menu__close'),
        modalClose = document.querySelector('.modal__close'),
        mainButton = document.querySelector('.call'),
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


if (modalClose !== null) {
  modalClose.addEventListener('click', () => {
    modal.classList.remove('modal-visible');
    overlay.classList.remove('overlay-visible');
  });
}


overlay.addEventListener('click', () => {
  modal.classList.remove('modal-visible');
  menu.classList.remove('menu-visible');
  overlay.classList.remove('overlay-visible');
});

mainButton.addEventListener('click', () => {
  modal.classList.add('modal-visible');
  menu.classList.remove('menu-visible');
  overlay.classList.add('overlay-visible');
});

button.forEach(e => e.addEventListener('click', () => {
  modal.classList.add('modal-visible');
  menu.classList.remove('menu-visible');
  overlay.classList.add('overlay-visible');
}));