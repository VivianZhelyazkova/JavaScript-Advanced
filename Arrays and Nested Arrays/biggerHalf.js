function biggerHalf(input) {
  input.sort((a, b) => a - b);
  let result = input.slice(Math.floor(input.length / 2));
  console.log(result);
}


biggerHalf([3, 19, 14, 7, 2, 19, 6]);
