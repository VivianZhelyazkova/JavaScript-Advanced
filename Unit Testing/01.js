function subSum(arr, start, end) {
    if (!Array.isArray(arr)) {
        return NaN;

    }
    if (start < 0) {
        start = 0;
    }
    if (end > arr.length - 1) {
        end = arr.length - 1;
    }
    if (arr.length === 0) {
        return 0;
    }
    let sum = arr.slice(start, end + 1).reduce((a, b) => Number(a) + Number(b));
    return sum;
}

subSum([], -4, 300);
