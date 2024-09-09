function sameNums(num) {
  let numAsString = num.toString();
  let areSame = true;
  let sum = 0
  for (el of numAsString) {
    sum += Number(el)
    if (el != numAsString[0]) {
      areSame = false;
    }
  }
  console.log(areSame);
  console.log(sum);
}
sameNums(22222);
