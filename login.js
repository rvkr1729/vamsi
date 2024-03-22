function toggleForms() {
    var loginContainer = document.getElementById("login-container");
    var registerContainer = document.getElementById("register-container");
    
    if (loginContainer.style.display === "block") {
      loginContainer.style.display = "none";
      registerContainer.style.display = "block";
    } else {
      loginContainer.style.display = "block";
      registerContainer.style.display = "none";
    }
  }
  
  function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Perform simple validation
    if (username === "" || password === "") {
      document.getElementById("error-message").innerText = "Please enter both username and password.";
      return;
    }
    
    // Perform authentication (dummy example, replace with actual authentication logic)
    if (username === "admin" && password === "password") {
      // Successful login, redirect or do something here
      alert("Login successful!");
    } else {
      document.getElementById("error-message").innerText = "Invalid username or password.";
    }
  }
  
  function register() {
    var newUsername = document.getElementById("new-username").value;
    var newPassword = document.getElementById("new-password").value;
    
    // Perform simple validation
    if (newUsername === "" || newPassword === "") {
      document.getElementById("register-error-message").innerText = "Please enter both username and password.";
      return;
    }
    
    // Perform registration (dummy example, replace with actual registration logic)
    // Here, you might save the new username and password to a database
    alert("Registration successful! You can now login with your new account.");
  }
  