class Employee {
    constructor(name, salary, vacation) {
        this.name = name
        this.salary = salary
        this.vacation = vacation
    }

    accept(visitor) {
        visitor.visit(this)
    }
}

module.exports = Employee;