function extractNonDecreasingSubset(numbers) {
  return numbers.reduce((acc, curr) => {
    if (acc.length === 0 || curr >= acc[acc.length - 1]) {
      acc.push(curr);
    }
    return acc;
  }, []);
}

subset([20, 3, 2, 15, 6, 1]);
