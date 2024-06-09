import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEc0xWj8d69t38JsiZ6fyVaLtaX_VlMkM",
  authDomain: "firedemo-77164.firebaseapp.com",
  projectId: "firedemo-77164",
  storageBucket: "firedemo-77164.appspot.com",
  messagingSenderId: "74526769988",
  appId: "1:74526769988:web:25e14c236a7f9f70c7cd11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Creating Account...");
      window.location.href = "index.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
});
