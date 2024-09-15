function biggest(input) {
  let result = Math.max(...input.flat());
  console.log(result);
}
biggest([
  [3, 5, 7, 12],
  [-1, 4, 33, 2],
  [8, 3, 0, 4],
]);
