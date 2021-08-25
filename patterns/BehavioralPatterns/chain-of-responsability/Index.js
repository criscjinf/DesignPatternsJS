const LoadUserPermissionLevelHandler = require('./handlers/login-user-handler');
const UserOpenConfigHandler = require('./handlers/user-open-config-handler');
const User = require('./classes/user');

let userAnonimo = new User('anonimo', '', false);
let userCris = new User('cristiano', '999999', true);

let handler = new LoadUserPermissionLevelHandler();

handler.setNextHandler(new UserOpenConfigHandler());

handler.handle(userCris);