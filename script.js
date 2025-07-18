
import { db } from "./firebase-config.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const form = document.getElementById("unfollowForm");
const reasonInput = document.getElementById("reason");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const reason = reasonInput.value.trim();
  if (!reason) return;

  try {
    await addDoc(collection(db, "unfollowReasons"), {
      message: reason,
      timestamp: serverTimestamp()
    });
    confirmation.classList.remove("hidden");
    form.reset();
  } catch (error) {
    alert("Error sending message: " + error.message);
  }
});
