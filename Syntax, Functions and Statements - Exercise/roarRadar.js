function roadRadar(speed, zone) {
  let speedLimit = 0;
  switch (zone) {
    case "motorway":
      speedLimit = 130;
      break;
    case "interstate":
      speedLimit = 90;
      break;
    case "city":
      speedLimit = 50;
      break;
    case "residential":
      speedLimit = 20;
  }
  if (speed <= speedLimit) {
    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
  } else {
    let speeding = speed - speedLimit;
    let infraction = "";
    if (speeding <= 20) {
      infraction = "speeding";
    } else if (speeding <= 40) {
      infraction = "excessive speeding";
    } else {
      infraction = "reckless driving";
    }
    console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${speedLimit} - ${infraction}`);
    
  }
}
roadRadar(21, 'residential');
