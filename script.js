import { db } from './firebase-config.js';
import {
  collection,
  addDoc,
  serverTimestamp
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

window.submitMessage = async function () {
  const messageInput = document.getElementById("messageInput");
  const message = messageInput.value.trim();
  if (!message) return alert("Please enter a message");

  try {
    await addDoc(collection(db, "shreya_replies"), {
      message,
      timestamp: serverTimestamp()
    });
    alert("Message sent!");
    messageInput.value = "";
  } catch (err) {
    console.error(err);
    alert("Failed to send");
  }
};
