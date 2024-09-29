function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    const restaurants = JSON.parse(
      document.querySelector("#inputs textarea").value
    );
    const bestRestaurantNameEl = document.querySelector("#bestRestaurant p");
    const bestRestaurantWorkersEl = document.querySelector("#workers p");

    const restaurantsDict = {};

    for (let restaurant of restaurants) {
      const [resName, data] = restaurant.split(" - ");
      const workers = data.split(", ");
      if (!(resName in restaurantsDict)) {
        restaurantsDict[resName] = {};
      }

      for (let worker of workers) {
        const [workerName, salary] = worker.split(" ");

        restaurantsDict[resName][workerName] = salary;
      }
    }
    console.log(restaurantsDict);
    
  }
}
