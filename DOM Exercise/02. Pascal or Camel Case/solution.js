function solve() {
  const text = document.getElementById("text").value.toLowerCase().split(" ");
  const convension = document.getElementById("naming-convention").value;
  const outputEl = document.getElementById("result");
  let result = "";
  switch (convension) {
    case "Camel Case":
      result = text[0] + text.slice(1).map(w => w[0].toUpperCase() + w.slice(1)).join("")
      break;
    case "Pascal Case":
      result = text.map(w => w[0].toUpperCase() + w.slice(1)).join("")
      break;
    default:
      result = "Error!";
      break;
  }
  outputEl.textContent = result;
}
