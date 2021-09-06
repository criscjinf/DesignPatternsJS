const Max = require("./expressions/max-expression");
const Sum = require("./expressions/sum-expression");

const expressions = {
    Sum,
    Max
}

class ExpressionInterpreter {
    static interpret(context) {
        const exprClass = Object.keys(expressions).find(expression => context.startWith(expression.toLowerCase()));
        const expr = exprClass ? expressions[exprClass] : undefined

        if (expr) return expr.calc(context)
    }
}

module.exports = ExpressionInterpreter;