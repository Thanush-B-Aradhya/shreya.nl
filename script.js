function submitResponse() {
  const response = document.getElementById("response").value.trim();
  if (response === "") return alert("Please write something!");

  const timestamp = new Date().toISOString(); // Human-readable timestamp

  db.ref("responses").push({
    message: response,
    time: timestamp
  }).then(() => {
    alert("Thank you for responding 🙏");
    document.getElementById("response").value = "";
  }).catch((error) => {
    alert("Error saving response: " + error);
  });
}
