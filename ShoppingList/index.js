import { ShoppingItem } from "../ShoppingItem/index.js";

export const ShoppingList = (props) => {
  const { day, dayName, items } = props;

  const element = document.createElement('div');
  element.classList.add('shopping-list');
  element.innerHTML = `
    <h2>${dayName}</h2>
    <ul class="shopping-list__items"></ul>
    <form class="formular">
        <label>Přidat nový produkt: </label><br>
        <label>Produkt: </label><br>
        <input id="produkt" type="text" name="input" required><br>
        <label>Množství: </label><br>
        <input id="mnozstvi" type="text" name="input" required><br>
        <label>Jednotka: </label><br>
        <input id="jednotka" type="text" name="input" required><br>
        <button id="tlacitko" type="submit">Přidat nový produkt</button>
    </form>
  `;
  
  if (items === undefined) {
    fetch(`https://apps.kodim.cz/daweb/shoplist/api/weeks/0/days/${day}`)
      .then((response) => response.json())
      .then((data) => {
        element.replaceWith(ShoppingList({
          day: day,
          dayName: dayName,
          items: data.results,
        }));
      });
  } else {
    const ulElement = element.querySelector('ul');
    ulElement.append(...items.map((item) => ShoppingItem(item)));
  }

  
  let produkt = element.querySelector("#produkt");
  let mnozstvi = element.querySelector("#mnozstvi");
  let jednotka = element.querySelector("#jednotka");
  let tlacitko = element.querySelector("#tlacitko");
  

tlacitko.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(produkt.value);

  /*fetch('https://apps.kodim.cz/daweb/shoplist/api/weeks/41/days/mon', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      product: produkt.value,
      amount: mnozstvi.value,
      unit: jednotka.value,
      done: true,
    }),
  })*/;

});


  return element;
};
