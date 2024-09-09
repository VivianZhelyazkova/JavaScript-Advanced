function walk(steps, footprint, speed) {
  let distance = steps * footprint;
  let speedMetersPerSecond = (speed * 1000) / 3600;
  let restTime = Math.floor(distance / 500) * 60;
  let time = distance / speedMetersPerSecond;
  let totalTime = time + restTime;
  let hours = Math.floor(totalTime / 3600);
  let minutes = Math.floor((totalTime % 3600) / 60);
  let seconds = Math.ceil(totalTime % 60);
  console.log(
    `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  );
}
walk(4000, 0.6, 5);
