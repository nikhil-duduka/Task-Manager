// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMA_HHTcH5fKWNahyrGEbjQ65oYZu0uYE",
  authDomain: "task-manager-de16e.firebaseapp.com",
  projectId: "task-manager-de16e",
  storageBucket: "task-manager-de16e.appspot.com",
  messagingSenderId: "641971331287",
  appId: "1:641971331287:web:5bd6873da859a9c71a1092",
  measurementId: "G-P5NJ7HEK3M"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };