function calc(area, vol, figuresJson) {
  result = [];
  const figures = JSON.parse(figuresJson);
  for (let figure of figures) {
    result.push({ area: area.bind(figure)(), volume: vol.bind(figure)() });
  }

  return result;
}

function area() {
  return Math.abs(this.x * this.y);
}
function vol() {
  return Math.abs(this.x * this.y * this.z);
}

calc(
  area,
  vol,
  `[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]`
);
