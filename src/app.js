import { createHeader } from './components/header';
import { createMain } from './components/main';
import { createFooter } from './components/footer';

import {
  mathOperators,
  changeOperatorChoose,
  currentOperator,
} from './components/basicMathOperations';

import { checkActiveButton, clearStyle } from './helpers/checkActiveButton';
import { checkCurrentAnswer } from './helpers/checkCurrentAnswer';
import { keyBoardInput } from './components/keyboardInput';

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

  function game() {
    const num1 = document.querySelector('.first-number');
    const num2 = document.querySelector('.second-number');

    num1.textContent = randomNumber();
    num2.textContent = randomNumber();
  }

  game();

  const answer = document.querySelector('.answer');
  const operatorDescSvg = document.querySelector('.svg-item');
  const operationsDiv = document.querySelector('.operations');
  const operationsChoose = document.querySelector('.operator-choose');
  const operatorChangeBtn = document.querySelector('.operator-change');

  operatorChangeBtn.addEventListener('click', () => {
    operationsDiv.classList.toggle('show-menu');

    if (!operationsDiv.classList.contains('show-menu')) {
      operatorChangeBtn.textContent = 'Изменить';
    }
  });

  function showAndHidden() {
    operationsDiv.classList.add('hidden');
    operationsChoose.classList.add('show');

    if (operationsDiv.classList.contains('show-menu')) {
      operationsDiv.classList.remove('show-menu');
    }
  }

  let currentOperation = '';

  const { plus, minus, division, multi } = mathOperators;
  // prettier-ignore
  operations.forEach((item) => {
    item.addEventListener('click', () => {
      if (item.classList.contains('plus')) {
        currentOperation = plus;
        chooseOperators(currentOperation);
        operatorDescSvg.innerHTML = changeOperatorChoose(currentOperator());
        showAndHidden();
      } else if (item.classList.contains('minus')) {
        currentOperation = minus;
        chooseOperators(currentOperation);
        operatorDescSvg.innerHTML = changeOperatorChoose(currentOperator());
        showAndHidden();
      } else if (item.classList.contains('division')) {
        currentOperation = division;
        chooseOperators(currentOperation);
        operatorDescSvg.innerHTML = changeOperatorChoose(currentOperator());
        showAndHidden();
      } else if (item.classList.contains('multi')) {
        currentOperation = multi;
        chooseOperators(currentOperation);
        operatorDescSvg.innerHTML = changeOperatorChoose(currentOperator());
        showAndHidden();
      }
    });
  });

  const currentAnswer = checkCurrentAnswer;

  const borderAnswer = document.querySelector('.answer');

  function inputAnswer() {
    const numbers = [...document.querySelectorAll('[data-matrix-id]')];
    let res = '';

    numbers.forEach((item) => {
      item.addEventListener('click', (e) => {
        const num = e.target.dataset.matrixId;
        borderAnswer.classList.add('false-answer');
        res += num;
        answer.textContent = res;

        if (res.length >= 3) {
          answer.textContent = res;
          res = res.slice(res.length, 0);
        }
      });
    });
  }

  function resetEqual() {
    inputAnswer();
    clearStyle();
    answer.textContent = '?';
  }

  function addStyleForTrueAnswer() {
    borderAnswer.classList.remove('false-answer');
    borderAnswer.classList.add('true-answer');
    setTimeout(() => borderAnswer.classList.remove('true-answer'), 100);
  }

  answer.addEventListener('click', resetEqual);

  function checkEqual() {
    const res = document.querySelector('.answer').textContent;

    if (+res === currentAnswer()) {
      addStyleForTrueAnswer();
      setTimeout(() => game(), 0);
      clearStyle();
      setTimeout(() => resetEqual(), 0);
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

  /* keyboard */
  keyBoardInput();

  document.addEventListener('keydown', (e) => {
    const buttons = [...document.querySelectorAll('.calculator__numbers-item')];
    buttons.forEach((item) => {
      if (item.textContent === e.key) {
        item.classList.add('active-num');
      } else {
        item.classList.remove('active-num');
      }
    });
  });
});
