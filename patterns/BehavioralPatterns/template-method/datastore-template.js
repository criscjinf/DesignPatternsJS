class DatastoreTemplate {
    connect() {
        throw "Method isn't implemented!"
    }
    select() {
        throw "Method isn't implemented!"
    }

    disconnect() {
        console.log('Database disconnected')
    }
}

module.exports = DatastoreTemplate;
