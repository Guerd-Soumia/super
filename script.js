// Import the functions you need from the Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMHDwMXUVLGvvk_dpQNVWYDoY-9mEQ7AI",
  authDomain: "innovatex-43178.firebaseapp.com",
  projectId: "innovatex-43178",
  storageBucket: "innovatex-43178.appspot.com",
  messagingSenderId: "467160676611",
  appId: "1:467160676611:web:62470363ffe9dc5ef45136",
  measurementId: "G-LE656ZPML2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Function to submit form data to Firestore
async function submitForm(formData) {
  try {
    const docRef = await addDoc(collection(db, "submissions"), formData);
    console.log("Document written with ID: ", docRef.id);
    window.location.href = "success.html"; // Redirect to success page
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("An error occurred. Please try again.");
  }
}

// Handle form submission
document.getElementById('registration-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    graduate: document.getElementById('graduate').value,
    skills: document.getElementById('skills').value,
    linkedin: document.getElementById('linkedin').value,
  };

  submitForm(formData);
});// Import the functions you need from the Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMHDwMXUVLGvvk_dpQNVWYDoY-9mEQ7AI",
  authDomain: "innovatex-43178.firebaseapp.com",
  projectId: "innovatex-43178",
  storageBucket: "innovatex-43178.appspot.com",
  messagingSenderId: "467160676611",
  appId: "1:467160676611:web:62470363ffe9dc5ef45136",
  measurementId: "G-LE656ZPML2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Function to submit form data to Firestore
async function submitForm(formData) {
  try {
    const docRef = await addDoc(collection(db, "submissions"), formData);
    console.log("Document written with ID: ", docRef.id);
    window.location.href = "success2.html"; // Redirect to success page
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("An error occurred. Please try again.");
  }
}

// Handle form submission
document.getElementById('registration-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    graduate: document.getElementById('graduate').value,
    skills: document.getElementById('skills').value,
    linkedin: document.getElementById('linkedin').value,
  };

  submitForm(formData);
});
// Handle "Go Back" button click
document.getElementById('goBackButton').addEventListener('click', function () {
  const targetPage = this.getAttribute('data-target'); // Get the target page from the data-target attribute
  if (targetPage) {
    window.location.href = targetPage; // Navigate to the specified page
  } else {
    history.back(); // Fallback: Go to the previous page if no target is specified
  }
});// Signup validation
document.querySelector("form[action='../backend/register.php']").addEventListener("submit", function(event) {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    // Basic email format check
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email.");
        event.preventDefault();
        return;
    }

    // Password length check
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        event.preventDefault();
        return;
    }
});

// Login validation
document.querySelector("form[action='../backend/login.php']").addEventListener("submit", function(event) {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    // Basic email format check
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email.");
        event.preventDefault();
        return;
    }

    // Password length check
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        event.preventDefault();
        return;
    }
});

// Forgot password validation
document.querySelector("form[action='forgot_password.php']").addEventListener("submit", function(event) {
    const email = document.querySelector("#email").value;

    // Basic email format check
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email.");
        event.preventDefault();
        return;
    }
});
// Show the sticky note when the page loads
window.onload = function () {
  const stickyNote = document.getElementById("sticky-note");
  stickyNote.style.display = "block";

  // Hide the sticky note after 5 seconds
  setTimeout(() => {
    stickyNote.style.display = "none";
  }, 5000); // 5000 milliseconds = 5 seconds
};

// Show the sticky note when the lamp icon is clicked
document.getElementById("lamp-icon").addEventListener("click", function () {
  const stickyNote = document.getElementById("sticky-note");
  stickyNote.style.display = "block";

  // Hide the sticky note after 5 seconds
  setTimeout(() => {
    stickyNote.style.display = "none";
  }, 5000); // 5000 milliseconds = 5 seconds
});// Debugging: Check if the script is running
console.log("Script loaded!");

// Show the sticky note when the page loads
window.onload = function () {
  const stickyNote = document.getElementById("sticky-note");
  if (stickyNote) {
    console.log("Sticky note found!");
    stickyNote.style.display = "block";

    // Hide the sticky note after 10 seconds
    setTimeout(() => {
      stickyNote.style.display = "none";
    }, 10000); // 10000 milliseconds = 10 seconds
  } else {
    console.error("Sticky note not found!");
  }
};

// Show the sticky note when the lamp icon is clicked
const lampIcon = document.getElementById("lamp-icon");
if (lampIcon) {
  lampIcon.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the link from navigating
    const stickyNote = document.getElementById("sticky-note");
    if (stickyNote) {
      console.log("Lamp icon clicked! Showing sticky note.");
      stickyNote.style.display = "block";

      // Hide the sticky note after 10 seconds
      setTimeout(() => {
        stickyNote.style.display = "none";
      }, 10000); // 10000 milliseconds = 10 seconds
    } else {
      console.error("Sticky note not found!");
    }
  });
} else {
  console.error("Lamp icon not found!");
}