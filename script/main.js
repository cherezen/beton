document.addEventListener('DOMContentLoaded', () => {
	const menuMobile = document.querySelector('.menu__mobile'),
				menu = document.querySelector('.menu'),
				overlay = document.querySelector('.overlay'),
				close = document.querySelector('.menu__close'),
				modalClose = document.querySelectorAll('.close'),
				mainButton = document.querySelector('.call'),
				button = document.querySelectorAll('.card__button'),
				modal = document.querySelector('.modal'),
				modalThanks = document.querySelector('.modal_thanks');

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

	if (modalClose) {
		modalClose.forEach(e => e.addEventListener('click', () => {
			modal.classList.remove('modal-visible');
			modalThanks.classList.remove('modal-visible');
			overlay.classList.remove('overlay-visible');
		}))
	}

	overlay.addEventListener('click', () => {
		modal.classList.remove('modal-visible');
		modalThanks.classList.remove('modal-visible');
		menu.classList.remove('menu-visible');
		overlay.classList.remove('overlay-visible');
	});

	if (mainButton) {
		mainButton.addEventListener('click', () => {
			modalThanks.classList.add('modal-visible');
			//modal.classList.add('modal-visible');
			menu.classList.remove('menu-visible');
			overlay.classList.add('overlay-visible');
		});
	}

	if (button) {
		button.forEach(e => e.addEventListener('click', (event) => {
			const theButton = event.target,
						productInput = document.querySelector('input[name="user_product"]'),
						parent = theButton.parentNode;
						//mark = parent.querySelector('.card__mark').textContent;

			console.log(theButton.dataset.mark);
			productInput.value = theButton.dataset.mark + ' ' + parent.querySelector('.card__mark').textContent;

			modal.classList.add('modal-visible');
			menu.classList.remove('menu-visible');
			overlay.classList.add('overlay-visible');
		}));
	}
	
});
