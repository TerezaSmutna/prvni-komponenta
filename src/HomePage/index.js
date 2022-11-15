import { ShoppingList } from '../ShoppingList/index.js';
import './style.css';

export const HomePage = () => {
  const element = document.createElement('div');
  element.classList.add('page');
  element.innerHTML = `
    <div class="container">
      <h1>Nákupní seznamy</h1>
      <div class="lists"></div>
    </div>
  `;

  element.querySelector('.lists').append(
    ShoppingList({ day: 'mon', dayName: 'Pondělí' }),
    ShoppingList({ day: 'tue', dayName: 'Úterý' }),
  );

  return element;
};
