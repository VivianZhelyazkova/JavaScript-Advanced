class Company {
    departments = {};

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department || salary < 0) {
            throw new Error("Invalid input!");
        }
        if (!(department in this.departments)) {
            this.departments[department] = [{ name, salary, position }];
        } else {
            this.departments[department].push({ name, salary, position });
        }

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDepartment;
        let maxAvgSalary = 0;
        for (let department in this.departments) {    
            let currSumSalary = 0
            for (let em of this.departments[department]) {
                currSumSalary += em.salary 
            }
            let currAvgSalary = currSumSalary / this.departments[department].length
            if (currAvgSalary > maxAvgSalary){
                maxAvgSalary = currAvgSalary
                bestDepartment = department
            }
        }
        let employees = this.departments[bestDepartment].toSorted((a,b) => {
            let a1 = a.salary
            let b1 = b.salary
            let a2 = a.name
            let b2 = b.name
            return b1 - a1 || a2.localeCompare(b2)
        })
        let result = `Best Department is: ${bestDepartment}\nAverage salary: ${maxAvgSalary.toFixed(2)}`
        for (let employee of employees){
            result += `\n${employee.name} ${employee.salary} ${employee.position}`;
            
        }
        return result
        
    }
}
