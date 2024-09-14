function kNumbers(n, k) {
  result = [1, 1];
  for (let i = 2; i < n; i++) {
    let nextNumber = 0;
    if (result.length < k) {
      nextNumber = result.reduce((a, b) => a + b);
    } else {
      let startIndex = i - k;
      nextNumber = result.slice(startIndex).reduce((a, b) => a + b);
    }
    result.push(nextNumber);
  }
  console.log(result);
}
kNumbers(8, 2);
