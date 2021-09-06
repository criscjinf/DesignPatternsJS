const ContextExpression = require("./context-expression");
const ExpressionInterpreter = require("./expression-interpreter");


function ExecutarExpressão(expression) {
    let context = new ContextExpression(expression)
    console.log(ExpressionInterpreter.interpret(context))
}


ExecutarExpressão('Max(1, 2, 3, 20, 10, 60)')
ExecutarExpressão('Sum(1, 2, 3, 20, 10)')