import { ShoppingList } from './ShoppingList/index.js';

const listsElement = document.querySelector('#lists');

fetch('https://apps.kodim.cz/daweb/trening-api/apis/shopping/mon')
  .then((response) => response.json())
  .then((data) => {
    listsElement.innerHTML += ShoppingList({ day: 'Pondělí', items: data });
  });

fetch('https://apps.kodim.cz/daweb/trening-api/apis/shopping/tue')
  .then((response) => response.json())
  .then((data) => {
    listsElement.innerHTML += ShoppingList({ day: 'Úterý', items: data });
  });
