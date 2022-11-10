import './style.css';

export const ShoppingItem = (props) => {
  const { item, day, onDelete, onMoveDown, onMoveUp } = props;
  const { id, product, amount, unit, done } = item;

  let checkClass = 'icon-nocheck';
  if (done) {
    checkClass = 'icon-check';
  }

  const element = document.createElement('li');
  element.classList.add('item');
  element.innerHTML = `
    <div class="item__name">${product}</div>
    <div class="item__amount">${amount} ${unit}</div>
    <button class="btn-check item__btn ${checkClass}"></button>
    <button class="btn-delete item__btn icon-cross"></button>
    <button class="item__btn arrow-down"></button>
    <button class="item__btn arrow-up"></button>
  `;
  element.querySelector('.btn-check').addEventListener('click', () => {
    fetch(`https://apps.kodim.cz/daweb/shoplist/api/weeks/41/days/${day}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ done: !done }),
    }).then((response) => response.json())
      .then((data) => element.replaceWith(ShoppingItem({ 
        item: data.results,
        day: day,
        onDelete: onDelete,
        onMoveDown:onMoveDown,
        onMoveUp:onMoveUp,
      })));
  });
  element.querySelector('.btn-delete').addEventListener('click', () => {
    onDelete(id);
  });

  element.querySelector('.arrow-down').addEventListener('click', () => {
    console.log('sipka-dolu');
    onMoveDown(id);
  });

  element.querySelector('.arrow-up').addEventListener('click', () => {
    console.log('sipka-nahoru');
    onMoveUp(id);
  });


  return element;
};
