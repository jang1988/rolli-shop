function calcCartPrice() {

  const cartItems = document.querySelectorAll('.cart-item');

  const totalPriceEl = document.querySelector('.total-price');

  const deliveryCost = document.querySelector('.delivery-cost');

  const cartDelivery = document.querySelector('[data-cart-delivery]');
  
  let totalPrice = 0;

  cartItems.forEach(function (item) {
     
    const emountEl = item.querySelector('[data-counter]');
    const priceEl = item.querySelector('.price__currency');
    const currentPrice = parseInt(emountEl.innerText) * parseInt(priceEl.innerText);

    totalPrice += currentPrice;
    

  })

  totalPriceEl.innerText = totalPrice;

  if (totalPrice > 0) {
    cartDelivery.classList.remove('none');
  } else {
    cartDelivery.classList.add('none');
  }

  if (totalPrice >= 600) {
    deliveryCost.classList.add('free');
    deliveryCost.innerText = 'БЕСПЛАТНО'
  } else {
    deliveryCost.classList.remove('free');
    deliveryCost.innerText = '250 ₽'
  }

}