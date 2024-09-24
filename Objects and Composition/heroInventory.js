function hero(input) {
  const heroes = [];
  for (const data of input) {
    let [name, level, items] = data.split(" / ");
    items = items ? items.split(", ") : [];
    level = Number(level);
    heroes.push({ name, level, items });
  }
  console.log(JSON.stringify(heroes));
}
hero([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
