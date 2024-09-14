document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const country = document.getElementById('country').value.trim();
        const address = document.getElementById('address').value.trim();
        const city = document.getElementById('city').value;
        const paymentMethod = document.querySelector('input[name="payment"]:checked');
        const shippingMethod = document.querySelector('input[name="shipping"]:checked');

        let isValid = true;
        let errorMessage = '';

        // Full Name validation
        if (name === '') {
            errorMessage += 'Full Name is required.\n';
            isValid = false;
        }

        // Phone number validation (simple pattern for Egyptian phone numbers)
        const phonePattern = /^01[0-9]{9}$/;
        if (!phonePattern.test(phone)) {
            errorMessage += 'Please enter a valid phone number (e.g., 0123456789).\n';
            isValid = false;
        }

        // Country validation
        if (country === '') {
            errorMessage += 'Country is required.\n';
            isValid = false;
        }

        // Address validation
        if (address === '') {
            errorMessage += 'Address is required.\n';
            isValid = false;
        }

        // City (Governorate) validation
        if (city === '') {
            errorMessage += 'Please select a city (governorate).\n';
            isValid = false;
        }

        // Payment method validation
        if (!paymentMethod) {
            errorMessage += 'Please select a payment method.\n';
            isValid = false;
        }

        // Shipping method validation
        if (!shippingMethod) {
            errorMessage += 'Please select a shipping method.\n';
            isValid = false;
        }

        // If the form is valid, show a success message
        if (isValid) {
            alert('Your order has been successfully placed!');
            // Uncomment below to actually submit the form if needed
            // this.submit();
        } else {
            // If the form is invalid, display error message
            alert(errorMessage);
        }
    });
});