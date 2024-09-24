function extractText() {
  const list = document.getElementById("items");
  const result = [];
  for (let el of list.children) {
    result.push(el.textContent);
  }
  const output = document.getElementById("result");
  output.textContent = result.join("\n");
}
