function process(input) {
  let result = [];
  input.forEach((element, i) => {
    if (i % 2 !== 0) {
      result.push(element * 2);
    }
  });
  console.log(result.reverse().join(" "));
  
}
