import { createBasicMathOperations } from './basicMathOperations';
import { createCalculator } from './calculator';

const createMain = () => {
  return `
    <main class="main">
      <section class="game">
        <div class="game__inner">
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
