import { ShoppingItem } from "../ShoppingItem/index.js";

export const ShoppingList = (props) => {
  const { day, items } = props;
  
  const element = document.createElement('div');
  element.classList.add('shopping-list');
  element.innerHTML = `
    <h2>${day}</h2>  
    <ul class="shopping-list__items"></ul>
  `;
  
  const ulElement = element.querySelector('ul');
  ulElement.append(...items.map((item) => ShoppingItem(item)));
  
  return element;
};
