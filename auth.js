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

const firebaseConfig = {
  apiKey: "AIzaSyBEc0xWj8d69t38JsiZ6fyVaLtaX_VlMkM",
  authDomain: "firedemo-77164.firebaseapp.com",
  projectId: "firedemo-77164",
  storageBucket: "firedemo-77164.appspot.com",
  messagingSenderId: "74526769988",
  appId: "1:74526769988:web:25e14c236a7f9f70c7cd11",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  // document.querySelector(".alert").style.display = "block";

  // //   remove the alert
  // setTimeout(() => {
  //   document.querySelector(".alert").style.display = "none";
  // }, 3000);

  // //   reset the form
  // document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
