import { ShoppingItem } from "../ShoppingItem/index.js";

export const ShoppingList = (props) => {
  const { day, items } = props;
  return `
    <div class="shopping-list">
      <h2>${day}</h2>  
      <ul class="shopping-list__items">
        ${items.map((item) => ShoppingItem(item)).join('')}
      </ul>
    </div>
  `;
};
