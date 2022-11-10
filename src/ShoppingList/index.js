import { ShoppingItem } from "../ShoppingItem/index.js";
import './style.css';

export const ShoppingList = (props) => {
  const { day, dayName, items } = props;

  const element = document.createElement('div');
  element.classList.add('shopping-list');
  element.innerHTML = `
    <h2>${dayName}</h2>
    <ul class="shopping-list__items"></ul>
  `;
  
  if (items === undefined) {
    fetch(`https://apps.kodim.cz/daweb/shoplist/api/weeks/41/days/${day}`)
      .then((response) => response.json())
      .then((data) => {
        element.replaceWith(ShoppingList({
          day: day,
          dayName: dayName,
          items: data.results,
        }));
      });

    return element;
  } 
  
  const handleDelete = (itemId) => {
    fetch(`https://apps.kodim.cz/daweb/shoplist/api/weeks/41/days/${day}/${itemId}`, {
      method: 'DELETE',
    }).then((response) => response.json())
      .then((data) => element.replaceWith(ShoppingList({
        day: day,
        dayName: dayName,
        items: data.results,
      })));
  }

  const handleMoveDown = (itemId) => {
    fetch(`https://apps.kodim.cz/daweb/shoplist/api/weeks/41/days/${day}/${itemId}/actions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: "moveDown"
      }),
    }).then((response) => response.json())
      .then((data) => element.replaceWith(ShoppingList({
        day: day,
        dayName: dayName,
        items: data.results,
      })));
  }

  const handleMoveUp = (itemId) => {
    fetch(`https://apps.kodim.cz/daweb/shoplist/api/weeks/41/days/${day}/${itemId}/actions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({
        type: "moveUp"
      }),
    }).then((response) => response.json())
      .then((data) => element.replaceWith(ShoppingList({
        day: day,
        dayName: dayName,
        items: data.results,
      })));
  }

  const ulElement = element.querySelector('ul');
  ulElement.append(...items.map((item) => ShoppingItem({ 
    item: item,
    day: day,
    onDelete: handleDelete,
    onMoveUp: handleMoveUp,
    onMoveDown: handleMoveDown,
  })));

  return element;
};
