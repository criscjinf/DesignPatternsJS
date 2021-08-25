const BaseUserHandler = require("./base-user-handler");
const api = require("../../../../commum/api/api");

class LoadUserPermissionLevelHandler extends BaseUserHandler {
    handle(user) {
        user.permissionLevel = api.getUserPermissionLevel(user);
        return super.handle(user);
    }
}

module.exports = LoadUserPermissionLevelHandler;