import 'normalize.css';
import './assets/styles/index.scss';

function sayHi() {
  const str = 'Hello World';

  return str.toUpperCase();
}

document.body.insertAdjacentHTML('beforeend', sayHi());
document.body.style.fontSize = '80px';
document.body.style.textAlign = 'center';
