// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvw_Osh01_kcQRg4WwhDTCgBFkWiPhCOE",
  authDomain: "shreya-nl.firebaseapp.com",
  projectId: "shreya-nl",
  storageBucket: "shreya-nl.firebasestorage.app",
  messagingSenderId: "948904051673",
  appId: "1:948904051673:web:3445958cf028e9e1c88fc8",
  measurementId: "G-S0RBCTNWXR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
