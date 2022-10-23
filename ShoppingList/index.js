import { ShoppingItem } from "../ShoppingItem/index.js";

export const ShoppingList = (props) => {
  const { day, dayName, items = [] } = props;

  const element = document.createElement('div');
  element.classList.add('shopping-list');
  element.innerHTML = `
    <h2>${dayName}</h2>
    <ul class="shopping-list__items"></ul>
  `;
  
  fetch(`https://apps.kodim.cz/daweb/trening-api/apis/shopping/${day}`)
    .then((response) => response.json())
    .then((data) => {
      element.replaceWith(ShoppingList({
        day: day,
        dayName: dayName,
        items: data,
      }));
    });

  const ulElement = element.querySelector('ul');
  ulElement.append(...items.map((item) => ShoppingItem(item)));

  return element;
};
