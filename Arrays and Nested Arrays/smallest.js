function smallest(input) {
  input.sort((a, b) => a - b);
  console.log(input[0], input[1]);
}
smallest([30, 15, 50, 5]);
