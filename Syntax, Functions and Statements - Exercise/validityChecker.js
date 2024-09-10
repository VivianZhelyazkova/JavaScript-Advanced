function gnqs(x1, y1, x2, y2) {
  function isValid(a1, b1, a2, b2) {
    let result = Math.sqrt((a2 - a1) ** 2 + (b2 - b1) ** 2);
    let status = result % 1 === 0 ? "valid" : "invalid";
    console.log(`{${a1}, ${b1}} to {${a2}, ${b2}} is ${status}`);
  }
  isValid(x1, y1, 0,0)
  isValid(x2, y2, 0,0)
  isValid(x1, y1, x2, y2)
}
gnqs(2, 1, 1, 1);
