import { ShoppingItem } from "./ShoppingItem/index.js";

const items = [
  {
    product: 'Rohlíky',
    amount: '10',
    done: true,
  },
  {
    product: 'Rajčate',
    amount: '1kg',
    done: false,
  },
];

const listElm = document.querySelector('.shopping-list');
for (let i = 0; i < items.length; i += 1) {
  listElm.innerHTML += ShoppingItem(items[i]);
}