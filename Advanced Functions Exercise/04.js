function robot() {
    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };
    const recepies = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    };
    function restock(microelement, quantity) {
        ingredients[microelement] += Number(quantity);
        return "Success";
    }
    function prepare(recipe, quantity) {
        let currIngredients = recepies[recipe];
        let ingredientsCopy = { ...ingredients };
        for (let el in currIngredients) {
            if (ingredientsCopy[el] >= currIngredients[el] * quantity) {
                ingredientsCopy[el] -= currIngredients[el] * quantity;
            } else {
                return `Error: not enough ${el} in stock`;
            }
        }
        ingredients = ingredientsCopy;
        return "Success";
    }
    function report() {
        let result = "";
        for (let i in ingredients) {
            result += ` ${i}=${ingredients[i]}`;
        }
        return result.trimStart();
    }
    const procceros = {
        restock,
        prepare,
        report,
    };
    return (command) => {
        const [com, value, quantity] = command.split(" ");
        return procceros[com](value, quantity);
    };
}

const gg = robot();


console.log(gg("restock carbohydrate 11"));
console.log(gg("restock flavour 22"));
console.log(gg("report"));
console.log(gg("prepare apple 1"));

console.log(gg("report"));
