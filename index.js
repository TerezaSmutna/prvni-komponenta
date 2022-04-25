import { ShoppingItem } from "./ShoppingItem/index.js";

const items = [
  {
    product: 'Rohlíky',
    amount: '10',
    done: true,
  },
  {
    product: 'Rajčata',
    amount: '1 kg',
    done: false,
  },
  {
    product: 'Máslo',
    amount: '500 g',
    done: false,
  },
];

const listElement = document.querySelector('.shopping-list');
for (let i = 0; i < items.length; i += 1) {
  listElement.innerHTML += ShoppingItem(items[i]);
}
