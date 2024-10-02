function lockedProfile() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", onClick);
  });
  function onClick(event) {
    const button = event.target;
    const buttonParent = button.parentElement;
    const isLocked = buttonParent.querySelector('input[value="lock"]').checked;
    if (isLocked) {
      return;
    }

    const hiddenTextEl = buttonParent.querySelector("div");
    if (button.textContent === "Hide it") {
      button.textContent = "Show more";
      hiddenTextEl.style.display = "none";
    } else {
      button.textContent = "Hide it";
      hiddenTextEl.style.display = "inline";
    }
  }
}
