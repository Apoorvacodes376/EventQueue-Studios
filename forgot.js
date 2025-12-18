document.addEventListener('DOMContentLoaded', () => {
    const forgotForm = document.getElementById('forgotForm');

    forgotForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        alert("A reset link has been sent to: " + email);
        window.location.href = "login.html";
    });
});