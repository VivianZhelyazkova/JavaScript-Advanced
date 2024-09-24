function carFactory(order) {
  const car = {};
  const enginesMap = {
    "Small engine": { power: 90, volume: 1800 },
    "Normal engine": { power: 120, volume: 2400 },
    "Monster engine": { power: 200, volume: 3500 },
  };
  const carriageMap = {
    hatchback: { type: "hatchback", color: order.color },
    coupe: { type: "coupe", color: order.color },
  };
  car.model = order.model;
  if (order.power <= 90) {
    car.engine = enginesMap["Small engine"];
  } else if (order.power <= 120) {
    car.engine = enginesMap["Normal engine"];
  } else {
    car.engine = enginesMap["Monster engine"];
  }
  car.carriage = carriageMap[order.carriage];
  let wheelSize =
    order.wheelsize % 2 !== 0 ? order.wheelsize : order.wheelsize - 1;
  car.wheels = Array(4).fill(wheelSize);
  return car;
}
carFactory({
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
});
