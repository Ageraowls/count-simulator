import { createHeader } from './components/header';
import { createMain } from './components/main';
import { createFooter } from './components/footer';
import { mathOperators } from './components/basicMathOperations';
import { checkActiveButton, clearStyle } from './helpers/checkActiveButton';

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

  function chooseOperators(operator) {
    const current = document.querySelector('.operator');
    current.innerHTML = operator;
  }

  const randomNumber = () => {
    return Math.floor(Math.random() * (10 - 0)) + 1;
  };

  // eslint-disable-next-line consistent-return
  function equalsNumbers(first, operator, second) {
    switch (operator) {
      case '-':
        return first - second;
      case 'x':
        return first * second;
      case '/':
        return +(first / second).toFixed(1);
      default:
        return +first + +second;
    }
  }

  function game() {
    const num1 = document.querySelector('.first-number');
    const num2 = document.querySelector('.second-number');

    num1.textContent = randomNumber();
    num2.textContent = randomNumber();
  }

  game();

  const answer = document.querySelector('.answer');
  let currentOperation = '';

  const { plus, minus, division, multi } = mathOperators;
  // prettier-ignore
  operations.forEach((item) => {
    item.addEventListener('click', () => {
      if (item.classList.contains('plus')) {
        currentOperation = plus;
        chooseOperators(currentOperation);
      } else if (item.classList.contains('minus')) {
        currentOperation = minus;
        chooseOperators(currentOperation);
      } else if (item.classList.contains('division')) {
        currentOperation = division;
        chooseOperators(currentOperation);
      } else if (item.classList.contains('multi')) {
        currentOperation = multi;
        chooseOperators(currentOperation);
      }
    });
  });

  function checkCurrentAnswer() {
    const first = document.querySelector('.first-number').textContent;
    const second = document.querySelector('.second-number').textContent;
    const operator = document.querySelector('.operator').textContent;
    return equalsNumbers(first, operator, second);
  }

  const currentAnswer = checkCurrentAnswer;

  function inputAnswer() {
    const numbers = [...document.querySelectorAll('[data-matrix-id]')];
    let res = '';

    numbers.forEach((item) => {
      item.addEventListener('click', (e) => {
        const num = e.target.dataset.matrixId;
        res += num;
        answer.textContent = res;

        if (res.length >= 3) {
          answer.textContent = res;
          res = res.slice(1, res.length);
        }
      });
    });
  }

  function resetEqual() {
    inputAnswer();
    answer.textContent = '?';
  }

  answer.addEventListener('click', resetEqual);

  function checkEqual() {
    const res = document.querySelector('.answer').textContent;

    if (+res === currentAnswer()) {
      game();
      clearStyle();
      resetEqual();
    }

    return false;
  }

  inputAnswer();

  function checkGame() {
    setInterval(() => checkEqual(), 1000);
  }

  checkGame();

  const calculatorNumbers = document.querySelector('.calculator__numbers');
  calculatorNumbers.addEventListener('click', checkActiveButton);
});
