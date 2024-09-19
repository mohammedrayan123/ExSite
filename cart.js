document.addEventListener('DOMContentLoaded', function () {
    const cartItemsContainer = document.getElementById('cart-items');
    const clearCartButton = document.getElementById('clear-cart');
    
    // Retrieve the cart from localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Display cart items
    function displayCart() {
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
    }

    // Initial display of cart items
    displayCart();

    // Add event listener to clear cart button
    clearCartButton.addEventListener('click', function () {
        // Clear the cart in localStorage
        localStorage.removeItem('cart');
        
        // Clear the cart array
        cart = [];
        
        // Update the cart display
        displayCart();
        
        alert('Cart has been cleared.');
    });
});
