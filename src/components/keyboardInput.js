import { checkCurrentAnswer } from '../helpers/checkCurrentAnswer';

const currentAnswer = checkCurrentAnswer;

const keyBoardInput = () => {
  const answerInput = document.querySelector('.answer');

  let res = '';

  answerInput.addEventListener('click', () => {
    res = '';
  });

  document.addEventListener('keydown', (e) => {
    // prettier-ignore
    const symbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '.'];

    if (symbols.includes(e.key)) {
      res += e.key;
      answerInput.textContent = res;
      answerInput.classList.add('false-answer');
    }

    if (currentAnswer() === +res) {
      res = '';
    }

    if (e.key === 'Backspace') {
      res = res.substring(0, res.length - 1);
      answerInput.textContent = res.length === 0 ? '?' : res;
    }

    if (res.length > 4) {
      res = '';
      answerInput.textContent = res.length === 0 ? '?' : res;
    }
  });
};

export { keyBoardInput };
