function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
  
    // Simple validation: Check if both username and password are provided
    if (username.trim() === '' || password.trim() === '') {
      errorMessage.textContent = 'Please enter both username and password.';
    } else {
      // Example: You can perform additional checks or send data to a server for authentication
      // For now, just show a success message
      errorMessage.textContent = 'Login successful!';
      errorMessage.style.color = '#4caf50';  // Green color for success
    }
  }
  