class ContextExpression {
    constructor(input) {
        this.input = input
        this.output = 0
    }

    startWith(expression) {
        return this.input.toLowerCase().substr(0, expression.length) === expression;
    }
}

module.exports = ContextExpression;