
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAvw_Osh01_kcQRg4WwhDTCgBFkWiPhCOE",
  authDomain: "shreya-nl.firebaseapp.com",
  projectId: "shreya-nl",
  storageBucket: "shreya-nl.firebasestorage.app",
  messagingSenderId: "948904051673",
  appId: "1:948904051673:web:3445958cf028e9e1c88fc8",
  measurementId: "G-S0RBCTNWXR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
