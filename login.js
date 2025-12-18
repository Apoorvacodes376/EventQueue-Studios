document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const emailInput = document.getElementById('email').value.trim();
        const passwordInput = document.getElementById('password').value;

        if (!emailInput || !passwordInput) {
            alert('Please enter both email and password.');
            return;
        }

        console.log(`Attempting login for EventQueue user: ${emailInput}`);

        // Simulation logic
        if (passwordInput === "eventpass123") { 
            alert(`Login successful! Welcome back to EventQueue, ${emailInput}.`);
            // window.location.href = "index.html"; 
        } else {
            alert("Login failed. Please check your credentials.");
        }

        document.getElementById('password').value = '';
    });
});