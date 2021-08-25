const BaseUserHandler = require("./base-user-handler");

class UserOpenConfigHandler extends BaseUserHandler {
    handle(user) {
        if (user.permissionLevel) {
            console.log('Abrindo form de configurações');
            return super.handle(user)
        }
        console.log('Acesso negado!')
        return user
    }
}

module.exports = UserOpenConfigHandler;