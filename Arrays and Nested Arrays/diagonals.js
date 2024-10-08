function diagonals(matrix) {
  let leftDiagonal = 0;
  let rightDiagonal = 0;
  for (let i = 0; i < matrix.length; i++) {
    leftDiagonal += matrix[i][i];
    rightDiagonal += matrix[i][matrix.length - 1 - i];
  }

  console.log(leftDiagonal, rightDiagonal);
}
diagonals([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
