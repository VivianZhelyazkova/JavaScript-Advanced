function pie(pies, start, end) {
  let startIndex = pies.indexOf(start);
  let endIndex = pies.indexOf(end);
  let result = [];
  for (let i = startIndex; i <= endIndex; i++) {
    result.push(pies[i]);
  }
  console.log(result);
}
pie(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],
  "Key Lime Pie",
  "Lemon Meringue Pie"
);
