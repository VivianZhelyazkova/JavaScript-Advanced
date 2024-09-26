function toggle() {
  const buttonEl = document.querySelector(".button");
  const textEl = document.querySelector("#extra");
  const initialDisplay = textEl.style.display;
  if (initialDisplay == "block") {
    buttonEl.textContent = "More";
    textEl.style.display = "none";
  } else {
    buttonEl.textContent = "Less";
    textEl.style.display = "block";
  }
}
