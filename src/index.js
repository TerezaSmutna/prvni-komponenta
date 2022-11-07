import { ShoppingList } from './ShoppingList/index.js';
import './style.css';

document.querySelector('#lists').append(
  ShoppingList({ day: 'mon', dayName: 'Pondělí' }),
  ShoppingList({ day: 'tue', dayName: 'Úterý' }),
);
