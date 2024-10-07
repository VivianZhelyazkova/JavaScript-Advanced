function add(n1) {
    let sum = n1;
    function inner(n2) {
        sum += n2;
        return inner;
    }
    inner.toString = function () {
        return sum;
    };
    return inner;
}
console.log(add(1).toString());
