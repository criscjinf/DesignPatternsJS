const DatastoreTemplate = require("./datastore-template");

class MySql extends DatastoreTemplate {
    connect() {
        console.log('MySql connected')
    }
    select() {
        console.log('Select MySql Table')
    }
}

module.exports = MySql;