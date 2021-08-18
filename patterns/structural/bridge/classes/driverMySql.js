const DriverBase = require('../interface/driverBase');

class DriverMySql extends DriverBase {
    getInsertSql(model) {
        return Object.keys(model.fields).map(key => model.fields[key]).reduce((script, value) => {
            return `${script}, ${value}`;
        }, 'MYSQL INSERT ');
    }
}
module.exports = DriverMySql;
