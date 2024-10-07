function sort(numbers, str) {
    switch (str) {
        case "asc":
            numbers.sort((a, b) => a - b);
            break;
        case "desc":
            numbers.sort((a, b) => b - a);
            break;
    }
    return numbers;
}
sort([14, 7, 17, 6, 8], "asc");
