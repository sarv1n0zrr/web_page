// Reference to Firebase Auth
const auth = firebase.auth();

// Login Functionality
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect to dashboard or any other page
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  });

// Registration Functionality
document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed up
        alert("Registration successful!");
        window.location.href = "login.html"; // Redirect to login page or any other page
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  });
