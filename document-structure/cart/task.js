const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

products.forEach((product) => {
  const quantityValue = product.querySelector('.product__quantity-value');
  const buttonDec = product.querySelector('.product__quantity-control_dec');
  const buttonInc = product.querySelector('.product__quantity-control_inc');
  const buttonAdd = product.querySelector('.product__add');
  const productImage = product.querySelector('.product__image');

  buttonInc.addEventListener('click', () => {
    quantityValue.textContent = Number(quantityValue.textContent) + 1;
  });

  buttonDec.addEventListener('click', () => {
    const currentValue = Number(quantityValue.textContent);

    if (currentValue > 1) {
      quantityValue.textContent = currentValue - 1;
    }
  });

  buttonAdd.addEventListener('click', () => {
    const productId = product.dataset.id;
    const productCount = Number(quantityValue.textContent);
    const productImageSrc = productImage.getAttribute('src');

    const productInCart = cartProducts.querySelector(
      `.cart__product[data-id="${productId}"]`
    );

    if (productInCart) {
      const cartCount = productInCart.querySelector('.cart__product-count');
      cartCount.textContent = Number(cartCount.textContent) + productCount;
    } else {
      const cartProduct = document.createElement('div');
      cartProduct.className = 'cart__product';
      cartProduct.dataset.id = productId;

      cartProduct.innerHTML = `
        <img class="cart__product-image" src="${productImageSrc}">
        <div class="cart__product-count">${productCount}</div>
      `;

      cartProducts.appendChild(cartProduct);
    }
  });
});
