const loginBtn = document.querySelector('#login-btn');
const registerBtn = document.querySelector('#register-btn');

// Handle button clicks
loginBtn.addEventListener('click', () => {
  window.location.href = 'login.html'; 
});

registerBtn.addEventListener('click', () => {
  window.location.href = 'register.html'; 
});