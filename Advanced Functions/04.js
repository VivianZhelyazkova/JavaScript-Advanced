function filter(data, criteria) {
    let employees = JSON.parse(data);
    const [key, value] = criteria.split("-");
    if (criteria !== "all") {
        employees = employees.filter((person) => person[key] === value);
    }
    let result = employees.map(
        (employee, index) =>
            `${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`
    );
    console.log(result.join("\n"));
}

filter(
    `[{"id": "1","first_name": "Ardine","last_name": "Bassam","email": "abassam0@cnn.com","gender": "Female"}, 
    {"id": "2","first_name": "Kizzee","last_name": "Jost","email": "kjost1@forbes.com","gender": "Female"},
    {"id": "3","first_name": "Evanne","last_name": "Maldin","email": "emaldin2@hostgator.com","gender": "Male"}]`,
    "all"
);
