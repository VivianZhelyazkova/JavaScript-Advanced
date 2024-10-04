function deleteByEmail() {
  const listOfEmails = Array.from(document.querySelectorAll("td:nth-child(2)"));
  const input = document.querySelector('input[name="email"]').value;
  const resultEl = document.querySelector("#result");
  let isFound = false;
  for (let email of listOfEmails) {
    if (input === email.textContent) {
      isFound = true;
      email.parentElement.remove();
      resultEl.textContent = "Deleted.";
    }
  }
  if (!isFound) {
    resultEl.textContent = "Not found.";
  }
}
