function towns(input) {
  const result = [];
  let [keys, ...data] = input;
  for (let element of data) {
    element = element.split("|");
    let [townInfo, latitudeInfo, longitudeInfo] = element.slice(1, -1);
    let townObj = {
      Town: townInfo.trim(),
      Latitude: Number(Number(latitudeInfo).toFixed(2).trim()),
      Longitude: Number(Number(longitudeInfo).toFixed(2).trim()),
    };
    result.push(townObj);
  }
  console.log(JSON.stringify(result));
}
towns([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
