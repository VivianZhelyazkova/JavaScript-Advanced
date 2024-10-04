function calculator() {
    let el1, el2, res;
    function init(selector1, selector2, resultEl) {
        el1 = document.querySelector(selector1);
        el2 = document.querySelector(selector2);
        res = document.querySelector(resultEl);
    }
    function add() {
        res.value = Number(el1.value) + Number(el2.value);
    }
    function subtract() {
        res.value = el1.value - el2.value;
    }
    return {
        init,
        add,
        subtract,
    };
}

const calculate = calculator();
calculate.init("#num1", "#num2", "#result");
