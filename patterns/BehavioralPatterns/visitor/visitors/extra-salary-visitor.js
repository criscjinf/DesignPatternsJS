class ExtraSalaryVisitor {
    visit(employee) {
        employee.salary = employee.salary * 1.1 // 10% de aumento
    }
}

module.exports = ExtraSalaryVisitor;