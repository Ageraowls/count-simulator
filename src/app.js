import 'normalize.css';
import './assets/styles/index.scss';

function sayHi() {
  return 'Hello world!';
}

document.body.insertAdjacentHTML('beforebegin', sayHi());
