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
          <use xlink:href="../assets/images/icons/sprite.svg#plus"></use>
        </svg>
      </li>
      <li class="math-operators-item minus">
        <svg class="minus">
          <use xlink:href="../assets/images/icons/sprite.svg#minus"></use>
        </svg>
      </li>
      <li class="math-operators-item multi">
        <svg class="multi">
          <use xlink:href="../assets/images/icons/sprite.svg#multi"></use>
        </svg>
      </li>
      <li class="math-operators-item division">
        <svg class="division">
          <use xlink:href="../assets/images/icons/sprite.svg#division"></use>
        </svg>
      </li>
    </ul>
  `;
};

export { createBasicMathOperations, mathOperators };
