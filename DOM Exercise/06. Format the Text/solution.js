function solve() {
  const text = document.querySelector("#input").value;
  const output = document.querySelector("#output");
  const sentances = text.split(". ");
  const paragraphs = Math.ceil(sentances.length / 3);

  for (let i = 0; i < paragraphs; i++) {
    let currPar = document.createElement("p");
    currPar.innerHTML = sentances.slice(i * 3, i * 3 + 3).join("\n");
    output.append(currPar);
  }
}
