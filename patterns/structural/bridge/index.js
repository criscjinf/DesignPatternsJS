const BridgeDbConnection = require("./bridgeDbConnection");
const User = require("./models/user");
const DriverMySql = require("./classes/driverMySql");
const DriverSqlServer = require("./classes/driverSqlServer");

// -- Instância da classe de conexão que poderia ser implementada no inicio da aplicação, definindo qual Drive de Database utilizar
// const drive = new DriverMySql();
const drive = new DriverSqlServer();
const connection = new BridgeDbConnection(drive);


const user = new User();
user.fields['nome'] = 'Cristiano Lemos';
user.fields['cpf'] = '999.999.999-99';
connection.persist(user);