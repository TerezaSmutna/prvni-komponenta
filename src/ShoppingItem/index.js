import './style.css';

export const ShoppingItem = (props) => {
  const { id, product, amount, unit, done } = props;

  let checkClass = '';
  if (done) {
    checkClass = 'item__btn-done--check';
  }

  const element = document.createElement('li');
  element.classList.add('item');
  element.innerHTML = `
    <div class="item__name">${product}</div>
    <div class="item__amount">${amount} ${unit}</div>
    <button class="item__btn-done ${checkClass}"></button>
  `;
  element.querySelector('button').addEventListener('click', () => {
    fetch(`https://apps.kodim.cz/daweb/shoplist/api/weeks/0/days/mon/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ done: !done }),
    }).then((response) => response.json())
      .then((data) => element.replaceWith(ShoppingItem(data.results)));
  });

  return element;
};
