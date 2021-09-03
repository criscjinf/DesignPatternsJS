const DatastoreTemplate = require("./datastore-template");

class PostgreSql extends DatastoreTemplate {
    connect() {
        console.log('PostgreSQL connected')
    }
    select() {
        console.log('Select PostgreSQL Table')
    }
}

module.exports = PostgreSql;