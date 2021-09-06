const BaseExpression = require("./base-expression");

class Sum extends BaseExpression {
    static calc(context) {
        let values = this.parseTuple(context.input.substr(3, context.length))
        let result = 0
        if (values && values.length > 0) {
            result = values.reduce((total, value) => total + value, 0)
        }
        return result
    }
}

module.exports = Sum;