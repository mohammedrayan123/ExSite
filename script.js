// Add to Cart functionality
document.addEventListener('DOMContentLoaded', function () {
    const cartButtons = document.querySelectorAll('.add-to-cart');
    
    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-product');
            const productPrice = button.getAttribute('data-price');

            // Retrieve the cart from localStorage, or create an empty one if it doesn't exist
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Check if the product is already in the cart
            const existingProduct = cart.find(item => item.name === productName);

            if (existingProduct) {
                // If the product already exists, you can update the quantity or skip (optional)
                alert(`${productName} is already in the cart.`);
            } else {
                // Add the product to the cart array
                cart.push({ name: productName, price: productPrice });
                alert(`${productName} added to the cart.`);
            }

            // Update localStorage with the new cart
            localStorage.setItem('cart', JSON.stringify(cart));
        });
    });
});
