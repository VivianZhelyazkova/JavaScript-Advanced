function addItem() {
  const text = document.getElementById("newItemText");
  const value = document.getElementById("newItemValue");
  const menu = document.getElementById("menu");
  const newEl = document.createElement("option");
  newEl.value = value.value;
  newEl.textContent = text.value;
  menu.appendChild(newEl);
  text.value = "";
  value.value = "";
}
