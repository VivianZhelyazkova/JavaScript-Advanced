function rotate(arr, num) {
  for (i = 1; i <= num; i++) {
    let last = arr.pop();
    arr.unshift(last);
  }
  console.log(arr.join(" "));
}
rotate(["Banana", "Orange", "Coconut", "Apple"], 15);
