function solve() {
  const [generate, buy] = document.querySelectorAll("button");
 
  generate.addEventListener("click", () => {
    const items = JSON.parse(document.querySelector("textarea").value);
    const table = document.querySelector("table tbody");
    for (let item of items) {
      const newTR = document.createElement("tr");
      const imgTD = document.createElement("td");
      const image = document.createElement("img");
      image.setAttribute("src", item.img);
      imgTD.appendChild(image);

      const nameTD = document.createElement("td");
      nameTD.textContent = item.name;

      const priceTD = document.createElement("td");
      priceTD.textContent = item.price;

      const decFactorTD = document.createElement("td");
      decFactorTD.textContent = item.decFactor;

      const checkTD = document.createElement("td");
      const checkInput = document.createElement("input");
      checkInput.setAttribute("type","checkbox");
      checkTD.appendChild(checkInput);

      newTR.append(imgTD, nameTD, priceTD, decFactorTD, checkTD);
      table.appendChild(newTR);
    }
  });
  buy.addEventListener("click", () => {
    const rows = document.querySelectorAll("tbody tr");
    let itemsNames = [];
    let total = 0;
    let decFactor = 0;
    for (let row of rows) {
      const tdS = row.children;
      if (!tdS[tdS.length - 1].children[0].checked) {
        continue;
      }
      itemsNames.push(tdS[1].textContent);
      total += Number(tdS[2].textContent);
      decFactor += Number(tdS[3].textContent);
    }
    let avgDecFactor = decFactor / itemsNames.length;
    const result = `Bought furniture: ${itemsNames.join(", ")}\nTotal price: ${total.toFixed(2)}\nAverage decoration factor: ${avgDecFactor}`;
    const output = document.querySelectorAll("textarea")[1];
    output.value = result;
  });
}
