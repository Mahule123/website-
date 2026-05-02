const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name || !mobile || !email) {
        alert('Please fill in all fields');
        return;
    }

    const mobilePattern = /^[0-9]{10,15}$/;
    if (!mobilePattern.test(mobile)) {
        alert('Please enter a valid mobile number');
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        alert('Please enter a valid email address');
        return;
    }

    const userData = {
        name,
        mobile,
        email,
        loggedAt: new Date().toISOString()
    };

    if (window.DB && typeof window.DB.saveUser === 'function') {
        window.DB.saveUser(userData);
    }

    // Redirect to home page
    window.location.href = 'home.html';
});