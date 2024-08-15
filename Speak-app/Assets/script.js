document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    
    if (!form) {
        console.error('Form with ID "signupForm" not found.');
        return;
    }

    function validateInput(input) {
        const errorElement = document.getElementById(`${input.id}Error`);
        let isValid = true;
        let errorMessage = '';

        // Custom validation logic
        if (input.id === 'email') {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(input.value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address.';
            }
        } else if (input.id === 'mobile') {
            const mobilePattern = /^\d{10}$/;
            if (!mobilePattern.test(input.value)) {
                isValid = false;
                errorMessage = 'The input must be exactly 10 digits long, and no characters are allowed.';
            }
        } else if (input.id === 'password') {
            // Password validation logic
            const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!passwordPattern.test(input.value)) {
                isValid = false;
                errorMessage = 'Password must be at least 8 characters, with an uppercase, a lowercase, a digit, and a special character.';
            }
        } else if (input.id === 'confirm-password') {
            const password = document.getElementById('password').value;
            if (input.value !== password) {
                isValid = false;
                errorMessage = 'This field should match the Password field exactly.';
            }
        }

        // Show or hide error message
        if (errorElement) {
            if (!isValid) {
                input.classList.add('error');
                errorElement.textContent = errorMessage;
            } else {
                input.classList.remove('error');
                errorElement.textContent = '';
            }
        }

        return isValid;
    }

    // Validate inputs on blur
    form.querySelectorAll('input').forEach(input => {
        input.addEventListener('blur', () => validateInput(input));
    });

    // Validate all inputs on form submission
    form.addEventListener('submit', (e) => {
        let formIsValid = true;
        form.querySelectorAll('input').forEach(input => {
            if (!validateInput(input)) {
                formIsValid = false;
            }
        });

        if (!formIsValid) {
            e.preventDefault(); 
        } else {
            alert('Submit Successfully');
        }
    });
});
