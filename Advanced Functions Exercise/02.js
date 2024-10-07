function info(...args) {
    const countDict = {};
    const sortedDict = {};
    for (let el of args) {
        console.log(`${typeof el}: ${el}`);
        if (typeof el in countDict) {
            countDict[typeof el] += 1;
        } else {
            countDict[typeof el] = 1;
        }
    }
    const keysSorted = Object.keys(countDict).sort(function (a, b) {
        return countDict[b] - countDict[a];
    });
    keysSorted.forEach(key => sortedDict[key] = countDict[key]);
    for (let k in sortedDict) {
        console.log(`${k} = ${sortedDict[k]}`);
    }
}
info({ name: "bob" }, 3.333, 9.999);
