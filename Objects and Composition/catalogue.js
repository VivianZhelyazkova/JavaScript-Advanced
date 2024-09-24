function cata(input) {
  const sorted = input.sort();
  const result = {};
  for (let product of sorted) {
    let [item, price] = product.split(" : ");
    if (!result[product[0]]) {
      result[product[0]] = [`  ${item}: ${price}`];
    } else {
      result[product[0]].push(`  ${item}: ${price}`);
    }
  }
  for (let letter in result) {
    console.log(letter);
    console.log(result[letter].join("\n"));
  }
}
cata([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
