const firebaseConfig = {
  apiKey: "AIzaSyA7Eq9GieVap23s7OEtN6YSAVjs7jQ7BtU",
  authDomain: "userve-b1bdd.firebaseapp.com",
  projectId: "userve-b1bdd",
  storageBucket: "userve-b1bdd.firebasestorage.app",
  messagingSenderId: "385296004300",
  appId: "1:385296004300:web:344df09d1c944b54cabe69",
  measurementId: "G-4YLDFR9LR8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Auth reference
const auth = firebase.auth();