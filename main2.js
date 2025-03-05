let cart = [];
let wishlist = [];

function addToCart(productName, productPrice) {
  cart.push({ productName, productPrice });
  updateCartDisplay();
}

// function addToWishlist(productName) {
//   wishlist.push(productName);
//   alert(`${productName} added to Wishlist!`);
// }

function updateCartDisplay() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';

  if (cart.length === 0) {
    cartItems.innerHTML = 'Your cart is empty.';
  } else {
    cart.forEach(item => {
      const div = document.createElement('div');
      div.innerHTML = `${item.productName} - $${item.productPrice}`;
      cartItems.appendChild(div);
    });
  }
}

// function checkout() {
//   if (cart.length > 0) {
//     alert('Proceeding to Checkout');
//     // Redirect to checkout page or process payment
//   } else {
//     alert('Your cart is empty. Add some items to proceed.');
//   }
// }

// function shareProduct(productName) {
//   alert(`Sharing details for ${productName}`);
//   // Here you could integrate actual social media APIs for sharing
// }

// function applyPromoCode() {
//   const promoCode = document.getElementById('promo-code').value;
 
// }