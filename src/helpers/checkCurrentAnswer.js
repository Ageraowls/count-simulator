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

function checkCurrentAnswer() {
  const first = document.querySelector('.first-number').textContent;
  const second = document.querySelector('.second-number').textContent;
  const operator = document.querySelector('.operator').textContent;
  return equalsNumbers(first, operator, second);
}

export { checkCurrentAnswer };
