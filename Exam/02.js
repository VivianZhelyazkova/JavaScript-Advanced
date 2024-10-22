class Hotel {
    roomAvailability = {};
    supplyStock = {};
    constructor(initialBudget) {
        this.initialBudget = initialBudget;
    }

    restockSupplies(supplies) {
        let result = [];
        for (let supply of supplies) {
            let [name, quantity, price] = supply.split(" ");
            price = Number(price);
            if (this.initialBudget < price) {
                result.push(
                    `There was not enough money to restock ${quantity} ${name}`
                );
            } else {
                this.initialBudget -= price;
                if (name in this.supplyStock) {
                    this.supplyStock[name] += quantity;
                } else {
                    this.supplyStock[name] = quantity;
                }
                result.push(`Successfully stocked ${quantity} ${name}`);
            }
        }
        return result.join("\n");
    }

    addRoomType(roomType, neededSupplies, pricePerNight) {
        if (roomType in this.roomAvailability) {
            return `The ${roomType} is already available in our hotel, try something different.`;
        }
        this.roomAvailability[roomType] = { neededSupplies, pricePerNight };
        return `Great idea! Now with the ${roomType}, we have ${
            Object.keys(this.roomAvailability).length
        } types of rooms available, any other ideas?`;
    }
    showAvailableRooms() {
        if (Object.keys(this.roomAvailability).length === 0) {
            return `Our rooms are not ready yet, please come back later...`;
        }
        let result = [];
        for (let room in this.roomAvailability) {
            result.push(
                `${room} - $ ${this.roomAvailability[room].pricePerNight}`
            );
        }
        return result.join("\n");
    }

    bookRoom(roomType) {
        if (!(roomType in this.roomAvailability)) {
            return `There is no ${roomType} available, would you like to book another room?`;
        }
        const reqSups = this.roomAvailability[roomType].neededSupplies;
        for (let supp of reqSups) {
            let [name, quantity] = supp.split(" ");
            quantity = Number(quantity)
            
            if (!(name in this.supplyStock) || this.supplyStock[name] < quantity) {
                return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`;
            }
        }
        return `Your booking for ${roomType} has been confirmed! The price is $${this.roomAvailability[roomType].pricePerNight} per night.`
    }
}

