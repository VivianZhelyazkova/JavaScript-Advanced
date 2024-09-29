function generateReport() {
  const checkboxes = Array.from(
    document.querySelectorAll('input[type="checkbox"]')
  );
  const data = {};
  for (let checkbox of checkboxes) {
    if (checkbox.checked) {
      let index = checkboxes.indexOf(checkbox) + 1;
      data[checkbox.name] = Array.from(
        document.querySelectorAll(`tbody td:nth-child(${index})`)
      ).map((el) => el.textContent);
    }
  }
  const result = [];
  for (let i = 0; i < data[Object.keys(data)[0]].length; i++) {
    let currEmployee = {};
    for (let key in data) {
      currEmployee[key] = data[key][i];
    }
    result.push(currEmployee);
  }

  const output = document.querySelector("#output");
  output.value = JSON.stringify(result);
}
