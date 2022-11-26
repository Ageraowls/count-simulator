function checkActiveButton(e) {
  const buttons = [...document.querySelectorAll('.calculator__numbers-item')];
  const calculatorNumbers = document.querySelector('.calculator__numbers');
  buttons.forEach((item) => {
    item.classList.remove('active-num');
  });

  if (e.target === calculatorNumbers) {
    e.target.classList.remove('active-num');
  } else {
    e.target.classList.add('active-num');
  }
}

export { checkActiveButton };
