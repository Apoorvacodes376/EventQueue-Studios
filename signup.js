document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const pass = document.getElementById('password').value;
        const confirmPass = document.getElementById('confirmPassword').value;

        if (pass !== confirmPass) {
            alert("Passwords do not match!");
            return;
        }

        alert("Account created successfully! Please log in.");
        window.location.href = "login.html";
    });
});