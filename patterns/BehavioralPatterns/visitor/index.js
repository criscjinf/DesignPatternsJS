const Employee = require("./employee");
const ExtraSalaryVisitor = require("./visitors/extra-salary-visitor");
const ExtraVacationVisitor = require("./visitors/extra-vacation-visitor");

const employees = [
    new Employee("John", 10000, 10),
    new Employee("Mary", 20000, 21),
    new Employee("Boss", 250000, 51)
]

function salaryAndVacationImprovement() {
    let extraSalary = new ExtraSalaryVisitor()
    let extraVacation = new ExtraVacationVisitor()

    employees.forEach(employee => {
        console.log(`${employee.name}: $ ${employee.salary} and ${employee.vacation} vacation days`);

        employee.accept(extraSalary)
        employee.accept(extraVacation)

        console.log(`${employee.name}: $ ${employee.salary} and ${employee.vacation} vacation days`);
    })
}


salaryAndVacationImprovement()