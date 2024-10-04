function processor(input) {
    let collection = [];
    const commandsMap = {
        add: add,
        remove: remove,
        print: print,
    };
    for (let el of input) {
        const [com, value] = el.split(" ");

        commandsMap[com](value);
    }
    function add(value) {
        collection.push(value);
    }
    function remove(value) {
        collection = collection.filter(item => item !==value);
    }
    function print() {
        console.log(collection.join(","));
    }
}
processor(["add hello", "add again", "remove hello", "add again", "print"]);
