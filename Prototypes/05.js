function result() {
    class Employee {
        salary = 0;
        tasks = [];
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        work() {
            console.log(this.tasks.join("\n"));
        }
        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`)
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [`${this.name} is working on a simple task.`];
        }
    }
    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [
                `${this.name} is working on a complicated task.`,
                `${this.name} is taking time off work.`,
                `${this.name} is supervising junior workers.`,
            ];
        }
    }
    class Manager extends Employee {
        dividend = 0;
        constructor(name, age) {
            super(name, age);
            this.tasks = [
                `${this.name} scheduled a meeting.`,
                `${this.name} is preparing a quarterly report.`,
            ];
        }
        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
        }
    }
    return {
        Employee,
        Junior,
        Senior,
        Manager,
    };
}
