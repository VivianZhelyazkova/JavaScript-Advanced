function fib() {
    let n1 = 0;
    let n2 = 1;

    return () => {
        let curN = n2;
        [n1, n2] = [n2, n1 + n2];
        return curN;
    };
}

const gg = fib();
console.log(gg());
console.log(gg());
console.log(gg());
console.log(gg());
console.log(gg());
console.log(gg());
console.log(gg());
