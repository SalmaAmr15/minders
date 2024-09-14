document.getElementById('checkout-btn').addEventListener('click', function() {
    window.location.href = 'checkout.html';
});
document.addEventListener('DOMContentLoaded', function() {
    const increaseButtons = document.querySelectorAll('.quantity-increase');
    const decreaseButtons = document.querySelectorAll('.quantity-decrease');
    const quantityInputs = document.querySelectorAll('.quantity-input');
    const totalPriceElements = document.querySelectorAll('.total-price');
    const productPrice = 64.00; // static price for the product

    // Function to update the total price for each product
    function updateTotalPrice(quantity, totalPriceElement) {
        const totalPrice = (productPrice * quantity).toFixed(2);
        totalPriceElement.textContent = `$${totalPrice}`;
        updateCartSummary(); // Update the summary after every quantity change
    }

    // Handle quantity increase
    increaseButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            let quantity = parseInt(quantityInputs[index].value);
            if (quantity < 10) { // Limit max quantity to 10
                quantityInputs[index].value = quantity + 1;
                updateTotalPrice(quantity + 1, totalPriceElements[index]);
            }
        });
    });

    // Handle quantity decrease
    decreaseButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            let quantity = parseInt(quantityInputs[index].value);
            if (quantity > 1) { // Minimum quantity is 1
                quantityInputs[index].value = quantity - 1;
                updateTotalPrice(quantity - 1, totalPriceElements[index]);
            }
        });
    });

    // Handle input change for direct input in quantity field
    quantityInputs.forEach((input, index) => {
        input.addEventListener('input', function() {
            let quantity = parseInt(input.value);
            if (isNaN(quantity) || quantity < 1) {
                input.value = 1;
            }
            if (quantity > 10) {
                input.value = 10;
            }
            updateTotalPrice(parseInt(input.value), totalPriceElements[index]);
        });
    });

    // Function to update the cart summary
    function updateCartSummary() {
        let totalItems = 0;
        let totalCost = 0;
        let totalWithFees = 45.00;
        quantityInputs.forEach((input, index) => {
            const quantity = parseInt(input.value);
            totalItems += quantity;
            totalCost += productPrice * quantity;
            totalWithFees += totalCost;
        });

        document.getElementById('total-items').textContent = totalItems;
        document.getElementById('subtotal').textContent = `$ ${totalCost.toFixed(2)}`;
        document.getElementById('total-with-shipping').textContent = `$ ${totalWithFees.toFixed(2)}`;
    }

    // Initial calculation on page load
    updateCartSummary();

    // Handle removal of items
    const removeButtons = document.querySelectorAll('.remove-item');
    removeButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const row = button.closest('tr');
            row.remove();
            updateCartSummary();
        });
    });

    // Checkout button
    const checkoutBtn = document.getElementById('checkout-btn');
    checkoutBtn.addEventListener('click', function() {
        const total = document.getElementById('subtotal').textContent;
        alert(`Proceeding to checkout. Total amount: ${total}`);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Define static cart data
    const staticCartData = [{
        name: 'RoseMarry oil',
        price: 64.00,
        quantity: 1
    }];

    // Check if cart items exist in localStorage
    if (!localStorage.getItem('cartItems')) {
        // Initialize localStorage with static data if empty
        localStorage.setItem('cartItems', JSON.stringify(staticCartData));
    }

    // Update cart UI based on stored cart items
    function updateCartUI() {
        const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
        const cartElement = document.getElementById("cart-items");
        cartElement.innerHTML = ""; // Clear existing items

        cart.forEach((item, index) => {
            cartElement.innerHTML += `
                <div class="cart-item">
                    <p>${item.name}</p>
                    <p>$${item.price.toFixed(2)}</p>
                    <input type="number" value="${item.quantity}" onchange="updateQuantity(${index}, this.value)">
                    <button class="remove-item">Remove</button>
                </div>
            `;
        });

        updateCartSummary(); // Ensure summary is updated after cart items are displayed
    }

    // Update quantity for an item
    window.updateQuantity = function(index, newQuantity) {
        const cart = JSON.parse(localStorage.getItem("cartItems"));
        cart[index].quantity = parseInt(newQuantity);
        localStorage.setItem("cartItems", JSON.stringify(cart));
        updateCartUI();
    }

    // Initialize the cart UI on page load
    updateCartUI();
});