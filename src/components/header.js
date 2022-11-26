import { createBurgerMenu } from './burgerMenu';
import favicon from '../assets/images/icons/favicon.svg';

const createHeader = () => {
  return `
  <header class="header">
    <a href="./index.html"><img src=${favicon} class="header__logo" alt="favicon"></a>
    <nav class="navigation">
      <ul class="navigation__list">
        <li class="navigation__list-item">Как играть</li>
        <li class="navigation__list-item">Контакты</li>
      </ul>
    </nav>
    ${createBurgerMenu()}
  </header>
  `;
};

export { createHeader };
