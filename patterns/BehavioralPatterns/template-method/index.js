const MySql = require("./mysql");
const PostgreSql = require("./postgresql");


function datastoreTest(datastoreClass) {
    let datastore = new datastoreClass();
    datastore.connect()
    datastore.select()
    datastore.disconnect()
}


datastoreTest(MySql)
datastoreTest(PostgreSql)
