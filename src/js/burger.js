const btnBurgerOpen = document.querySelector('.js-burger-open');
const btnBurgerClose = document.querySelector('.js-burger-close');
const burgerMenu = document.querySelector('.burger-menu__modal');

const toggleBurger = e => {
  if (!burgerMenu.classList.contains('is-open')) {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    document.body.style.position = 'fixed';
  } else {
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';
    document.body.style.position = 'static';
  }
  burgerMenu.classList.toggle('is-open');
};

btnBurgerOpen.addEventListener('click', toggleBurger);
btnBurgerClose.addEventListener('click', toggleBurger);
