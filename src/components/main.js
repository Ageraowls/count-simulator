import { createBasicMathOperations } from './basicMathOperations';
import { createCalculator } from './calculator';

const createMain = () => {
  return `
    <main class="main">
      <section class="game">
        <div class="game__inner">
        <div class="operator-choose">
            <p class="operator-desc">Текущий оператор: 
              <svg class="svg-item">
                <use xlink:href="./assets/images/icons/sprite.svg#plus"></use>
              </svg>
            </p>
            <button class="operator-change">Изменить</button>
          </div>
          <div class="operations">
            <p class="operations-choose">Выберите оператор</p>
            ${createBasicMathOperations()}
          </div>
          ${createCalculator()}  
        </div>
      </section>
    </main>
  `;
};

export { createMain };
