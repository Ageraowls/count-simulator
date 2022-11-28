import { createHeader } from './components/header';
import { createMain } from './components/main';
import { createFooter } from './components/footer';
import { mathOperators } from './components/basicMathOperations';
import { checkActiveButton } from './helpers/checkActiveButton';

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

  const firstNumber = document.querySelector('.first-number').textContent;
  const secondNumber = document.querySelector('.second-number').textContent;

  // eslint-disable-next-line consistent-return
  function equalsNumbers(first, operator, second) {
    switch (operator) {
      case '+':
        return +first + +second;
      case '-':
        return first - second;
      case 'x':
        return first * second;
      case '/':
        return +(first / second).toFixed(1);
    }
  }

  const answer = document.querySelector('.answer');
  let currentOperation = '';

  const { plus, minus, division, multi } = mathOperators;
  // prettier-ignore
  operations.forEach((item) => {
    item.addEventListener('click', () => {
      if (item.classList.contains('plus')) {
        currentOperation = plus;
        chooseOperators(currentOperation);
        answer.textContent = equalsNumbers(firstNumber, currentOperation, secondNumber);
      } else if (item.classList.contains('minus')) {
        currentOperation = minus;
        chooseOperators(currentOperation);
        answer.textContent = equalsNumbers(firstNumber, currentOperation, secondNumber);
      } else if (item.classList.contains('division')) {
        currentOperation = division;
        chooseOperators(currentOperation);
        answer.textContent = equalsNumbers(firstNumber, currentOperation, secondNumber);
      } else if (item.classList.contains('multi')) {
        currentOperation = multi;
        chooseOperators(currentOperation);
        answer.textContent = equalsNumbers(firstNumber, currentOperation, secondNumber);
      }
    });
  });

  function checkCurrentAnswer() {
    return equalsNumbers(firstNumber, currentOperation, secondNumber);
  }

  const currentAnswer = checkCurrentAnswer;

  function checkLengthAnswer(str) {
    if (str.length <= 3) {
      return str.slice(0, str.length);
    }

    if (str.length >= 3) {
      return str.slice(1, str.length);
    }
  }

  function inputAnswer() {
    const numbers = [...document.querySelectorAll('[data-matrix-id]')];
    let res = '';

    numbers.forEach((item) => {
      item.addEventListener('click', (e) => {
        const num = e.target.dataset.matrixId;
        res += num;

        if (res.length <= 3) {
          answer.textContent = res;
        } else {
          res = res.slice(1, res.length);
          answer.textContent = res;
        }
      });
    });
  }

  inputAnswer();
  setInterval(() => console.log('shit: ' + answer.textContent), 1000);

  const calculatorNumbers = document.querySelector('.calculator__numbers');
  calculatorNumbers.addEventListener('click', checkActiveButton);
});
