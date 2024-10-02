function addItem() {
  const input = document.querySelector("#newItemText").value;
  const list = document.querySelector("#items");
  const newItem = document.createElement("li");
  newItem.textContent = input;
  list.appendChild(newItem);
  
}
