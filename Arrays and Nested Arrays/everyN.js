function nElement(list, step) {
  const result = list.reduce((acc, curr, i) => {
    if (i % step === 0) {
      acc.push(curr);
    }
    return acc;
  }, []);
  console.log(result);

  //for (let i = 0; i < list.length; i += step) {
  //  result.push(list[i]);
  //}
  //return result;
}
nElement(["5", "20", "31", "4", "20"], 2);
