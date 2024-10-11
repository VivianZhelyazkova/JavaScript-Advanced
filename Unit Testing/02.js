function cards(cards) {
    const validFaces = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K",
        "A",
    ];
    const validSuits = {
        S: "♠",
        H: "♥",
        D: "♦",
        C: "♣",
    };
    let result = [];
    for (let card of cards) {
        const face = card.slice(0, card.length - 1);
        const suit = card[card.length - 1];
        if (!validFaces.includes(face) || !(suit in validSuits)) {
            console.log(`Invalid card: ${card}`);
            return;
        } else {
            result.push(`${face}${validSuits[suit]}`);
        }
    }
    console.log(result.join(" "));
}

cards(["AS", "10D", "1H", "2C"]);
