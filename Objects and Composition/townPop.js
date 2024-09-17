function pop(data) {
  let cities = {};
  for (let el of data) {
    const [name, population] = el.split(" <-> ");
    if (!cities.hasOwnProperty(name)) {
      cities[name] = 0;
    }
    cities[name] += Number(population);
  }

  for (const key in cities) {
    console.log(`${key} : ${cities[key]}`);
  }
//   for (const [k,v] of Object.entries(cities)) {
// }
}
pop([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
