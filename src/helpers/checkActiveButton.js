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

function clearStyle() {
  const buttons = [...document.querySelectorAll('.calculator__numbers-item')];
  const answerButton = document.querySelector('.answer');
  buttons.forEach((item) => {
    item.classList.remove('active-num');
  });

  answerButton.classList.remove('false-answer');
}

export { checkActiveButton, clearStyle };
