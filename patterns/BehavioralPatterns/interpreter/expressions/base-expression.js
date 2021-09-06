class BaseExpression {
    static parseTuple(strTuple) {
        var values = strTuple.replace(/^\(|\)$/g, "").split("),(");
        values.forEach(function (val, index, array) {
            array[index] = val.split(",").map(Number);
        });
        return values[0];
    }
    static calc(context) {
        throw "Method isn't implemented!"
    }
}

module.exports = BaseExpression;