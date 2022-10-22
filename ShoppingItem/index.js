export const ShoppingItem = (props) => {
  const { product, amount, done } = props;

  let checkClass = '';
  if (done) {
    checkClass = 'item__btn-done--check';
  }

  const element = document.createElement('li');
  element.classList.add('item');
  element.innerHTML = `
    <div class="item__name">${product}</div>
    <div class="item__amount">${amount}</div>
    <button class="item__btn-done ${checkClass}"></button>
  `;
  element.querySelector('button').addEventListener('click', () => {
    element.replaceWith(ShoppingItem({ 
      product: product,
      amount: amount,
      done: !done,
    }));
  });

  return element;
};
