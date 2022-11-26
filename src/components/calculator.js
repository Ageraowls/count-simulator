function fillGameArray() {
  const squares = new Array(9).fill(0).map((_item, index) => index + 1);
  const buttonsArray = [];
  squares.forEach((item) => {
    buttonsArray.push(
      `<button class="calculator__numbers-item" data-matrix-id=${item}>${item}</button>`
    );
  });

  return buttonsArray.join('');
}

const createCalculator = () => {
  return `
    <div class="calculator">
      <div class="calculator__window">
        <div class="calculator__item first-number">1</div>
        <div class="calculator__item operator">+</div>
        <div class="calculator__item second-number">3</div>
        <div class="calculator__item equals">=</div>
        <div class="calculator__item answer">?</div>
      </div>
      <div class="calculator__numbers">
        ${fillGameArray()}
        <button class="calculator__numbers-item" data-matrix-id=minus}>-</button>
        <button class="calculator__numbers-item" data-matrix-id=0}>0</button>
        <button class="calculator__numbers-item" data-matrix-id=dot}>.</button>
      </div>
    </div>
  `;
};

export { createCalculator };
