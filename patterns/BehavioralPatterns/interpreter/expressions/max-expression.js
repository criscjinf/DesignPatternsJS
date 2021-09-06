const BaseExpression = require("./base-expression")

class Max extends BaseExpression {
    static calc(context) {
        let values = this.parseTuple(context.input.substr(3, context.length))
        if (values && values.length > 0) {
            return values.reduce((maxValue, value) => maxValue = value > maxValue ? value : maxValue, -1)
        }

    }
}

module.exports = Max