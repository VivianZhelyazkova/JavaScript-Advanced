function cal(input) {
  const myObject = {};

  for (let i = 0; i < input.length; i += 2) {
    myObject[input[i]] = Number(input[i + 1]);
  }
  console.log(myObject);
}
cal(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
