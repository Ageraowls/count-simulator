import 'normalize.css';
import './assets/styles/index.scss';
import { createHeader } from './components/header';

document.body.innerHTML = createHeader();

const burger = document.querySelector('.burger-menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
});
