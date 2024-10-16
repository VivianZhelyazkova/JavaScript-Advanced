function tickets(arr, str) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    result = [];
    for (let ticket of arr) {
        const [destination, price, status] = ticket.split("|");
        result.push(new Ticket(destination, Number(price), status));
    }
    if (str !== "price") {
        result.sort((a, b) => a[str].localeCompare(b[str]));
    }else{
        result.sort((a, b) => b-a);
    }
    return result
}
tickets(
    [
        "Philadelphia|94.20|available",
        "New York City|95.99|available",
        "New York City|95.99|sold",
        "Boston|126.20|departed",
    ],
    "price"
);
