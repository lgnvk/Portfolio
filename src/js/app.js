import * as flsFunctions from './modules/functions.js';
flsFunctions.isWebp();

const menu = document.querySelector('.promo__menu'),
      hiddenMenu = document.querySelector('.menu-hidden')
      close = document.querySelector('.menu-hidden__close');

menu.addEventListener('click', () => {
  hiddenMenu.classList.add('active');
});

close.addEventListener('click', () => {
  hiddenMenu.classList.remove('active');
});

