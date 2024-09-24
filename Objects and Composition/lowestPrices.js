function lowestPrices(input) {
  const result = {};
  for (let el of input) {
    let [town, product, price] = el.split(" | ");
    price = Number(price);
    if (!result[product] || result[product].price > price) {
      result[product] = { town, price };
    }
  }
  for (let product in result) {
    console.log(`${product} -> ${result[product].price} (${result[product].town})`);
  }
}
lowestPrices([
  "Sample Town | Sample Product | 1006",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
