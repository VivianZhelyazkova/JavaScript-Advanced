function cooking(someNum, ...operations) {
  let num = Number(someNum);
  for (const operation of operations) {
    switch (operation) {
      case "chop":
        num /= 2;
        break;
      case "dice":
        num = Math.sqrt(num);
        break;
      case "spice":
        ++num;
        break;
      case "bake":
        num *= 3;
        break;
      case "fillet":
        num *= 0.8;
        break;
    }
    console.log(num);
  }
}
cooking('9', 'dice', 'spice', 'chop', 'bake','fillet');
