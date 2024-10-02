function factory(input) {
    const objects = {};
    function create(name) {
        objects[name] = {};
    }
    function inherit(name, par) {
        objects[name] = Object.create(objects[par]);
    }
    function set(name, key, value) {
        objects[name][key] = value;
    }
    function print(name) {
        let result = [];
        for (let prop in objects[name]) {
            result.push(`${prop}:${objects[name][prop]}`);
        }
        console.log(result.join(","));
    }
    for (let el of input) {
        const parts = el.split(" ");
        if (parts[0] === "create" && parts.length === 2) {
            const [com, name] = parts;
            create(name);
        } else if (parts[0] === "create" && parts.length === 4) {
            const [com, name, _, parName] = parts;
            inherit(name, parName);
        } else if (parts[0] === "set") {
            const [com, name, key, value] = parts;
            set(name, key, value);
        } else {
            const [com, name] = parts;
            print(name);
        }
    }
}

factory([
    "create c1",
    "create c2 inherit c1",
    "set c1 color red",
    "set c2 model new",
    "print c1",
    "print c2",
]);
