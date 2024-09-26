function sumTable() {
  let sum = 0;
  const firstTable = document.querySelector("table");
  const lastColumns = firstTable.querySelectorAll("td:last-child");
  let result = Array.from(lastColumns).pop();
  for (let el of lastColumns) {
    sum += Number(el.textContent);
  }
  result.textContent = sum;
}
