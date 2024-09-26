function subtract() {
  const [first, second] = document.querySelectorAll(
    '#wrapper input[type="text"]'
  );
  const result = document.querySelector("#result");
  result.textContent = Number(first.value) - Number(second.value);
}
