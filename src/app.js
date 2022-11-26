import { createHeader } from './components/header';
import { createMain } from './components/main';
import { createFooter } from './components/footer';
import { mathOperators } from './components/basicMathOperations';

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

  const operations = [...document.querySelectorAll('.math-operators-item')];

  let currentOperation = '';

  operations.forEach((item) => {
    item.addEventListener('click', () => {
      if (item.classList.contains('plus')) {
        currentOperation = mathOperators.plus;
      } else if (item.classList.contains('minus')) {
        currentOperation = mathOperators.minus;
      } else if (item.classList.contains('division')) {
        currentOperation = mathOperators.division;
      } else if (item.classList.contains('multi')) {
        currentOperation = mathOperators.multi;
      }
    });
  });

  console.log(currentOperation);
});
