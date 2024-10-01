function addItem() {
  const inputEl = document.querySelector("#newItemText");
  const list = document.querySelector("#items");
  const newItem = document.createElement("li");
  newItem.textContent = inputEl.value;
  const anchor = document.createElement("a");
  anchor.textContent = "[Delete]";
  anchor.setAttribute("href", "#");
  anchor.addEventListener("click", () => anchor.parentElement.remove());
  list.appendChild(newItem);
  newItem.appendChild(anchor);
  inputEl.value = "";
}
