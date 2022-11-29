const mathOperators = {
  plus: '+',
  minus: '-',
  division: '/',
  multi: 'x',
};

const createBasicMathOperations = () => {
  return `
    <ul class="math-operators-list">
      <li class="math-operators-item plus">
        <svg class="plus">
          <use xlink:href="./assets/images/icons/sprite.svg#plus"></use>
        </svg>
      </li>
      <li class="math-operators-item minus">
        <svg class="minus">
          <use xlink:href="./assets/images/icons/sprite.svg#minus"></use>
        </svg>
      </li>
      <li class="math-operators-item multi">
        <svg class="multi">
          <use xlink:href="./assets/images/icons/sprite.svg#multi"></use>
        </svg>
      </li>
      <li class="math-operators-item division">
        <svg class="division">
          <use xlink:href="./assets/images/icons/sprite.svg#division"></use>
        </svg>
      </li>
    </ul>
  `;
};

const currentOperator = () => {
  const curOperator = document.querySelector('.operator');

  switch (curOperator.textContent) {
    case '-':
      return 'minus';
    case 'x':
      return 'multi';
    case '/':
      return 'division';
    default:
      return 'plus';
  }
};

const changeOperatorChoose = (text) => {
  return `
    <svg class="plus">
      <use xlink:href="./assets/images/icons/sprite.svg#${text}"></use>
    </svg>
  `;
};

export {
  createBasicMathOperations,
  mathOperators,
  currentOperator,
  changeOperatorChoose,
};
