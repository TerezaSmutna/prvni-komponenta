import { ShoppingItem } from "./ShoppingItem/index.js";

const renderShoppingList = (items) => {
  const shoppingList = document.querySelector('.shopping-list');
  shoppingList.innerHTML = items
    .map((item) => ShoppingItem(item))
    .join('');
};

fetch('https://apps.kodim.cz/daweb/trening-api/apis/shopping')
  .then((response) => response.json())
  .then((data) => renderShoppingList(data));
