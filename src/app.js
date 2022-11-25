import { createHeader } from './components/header';
import { createMain } from './components/main';
import { createFooter } from './components/footer';

import 'normalize.css';
import './assets/styles/index.scss';

const drawPage = () => {
  return `
    ${createHeader()}
    ${createMain()}
    ${createFooter()}
  `;
};

document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin', drawPage());

  function openNavigation(menu) {
    const navigation = document.querySelector('.navigation');
    if (menu.classList.contains('active')) {
      navigation.style.transform = 'translateX(0)';
    } else {
      navigation.removeAttribute('style');
    }
  }

  const burger = document.querySelector('.burger-menu');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');

    openNavigation(burger);
  });
});
