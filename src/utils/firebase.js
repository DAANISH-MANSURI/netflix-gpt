// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo_Q1IUQ6kS6AZlpiTHaxfGDnsKnFfJ98",
  authDomain: "inflix-gpt-215dd.firebaseapp.com",
  projectId: "inflix-gpt-215dd",
  storageBucket: "inflix-gpt-215dd.firebasestorage.app",
  messagingSenderId: "340192494269",
  appId: "1:340192494269:web:c2d5ee12f9e21261456dd4",
  measurementId: "G-7YHXD7G92C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(); // isko hmne central me rkh diya taki bar bar na likhna pde.