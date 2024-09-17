document.addEventListener('DOMContentLoaded', function () {
    const cartItemsContainer = document.getElementById('cart-items');
    
    // Retrieve the cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // If the cart is empty, display a message
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
    } else {
        cartItemsContainer.innerHTML = ''; // Clear the empty message
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `<p>${item.name} - $${item.price}</p>`;
            cartItemsContainer.appendChild(cartItem);
        });
    }
});
