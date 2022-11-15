import { ShoppingList } from '../ShoppingList/index.js';
import './style.css';

export const HomePage = ({ session }) => {
  if (session === 'no-session') {
    window.location.href = '/login';
    return null;
  }

  const element = document.createElement('div');
  element.classList.add('page');
  element.innerHTML = `
    <div class="container">
      <h1>Nákupní seznamy</h1>
      <div class="lists"></div>
    </div>
  `;

  if (session === undefined) {
    return element;
  }
  
  element.querySelector('.lists').append(
    ShoppingList({ day: 'mon', dayName: 'Pondělí' }),
    ShoppingList({ day: 'tue', dayName: 'Úterý' }),
  );

  return element;
};
