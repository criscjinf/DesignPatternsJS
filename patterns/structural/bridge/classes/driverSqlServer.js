const DriverBase = require('../interface/driverBase');

class DriverSqlServer extends DriverBase {
    getInsertSql(model) {
        return Object.keys(model.fields).map(key => model.fields[key]).reduce((script, value) => {
            return `${script}, ${value}`;
        }, 'SQL Server INSERT');
    }
}
module.exports = DriverSqlServer;