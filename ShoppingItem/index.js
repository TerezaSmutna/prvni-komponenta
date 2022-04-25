export const ShoppingItem = (props) => {
  const { done, product, amount } = props;

  let checkClass = '';
  if (done) {
    checkClass = 'item__btn-done--check';
  }

  return `
    <li class="item">
      <div class="item__name">${product}</div>
      <div class="item__amount">${amount}</div>
      <button class="item__btn-done ${checkClass}"></button>
    </li>
  `;
};
