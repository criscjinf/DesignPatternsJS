class BaseUserHandler {
    constructor() {
        this.nextHandler = null;
    }

    setNextHandler(handler) {
        this.nextHandler = handler;
        return handler;
    }

    handle(user) {
        if (this.nextHandler) return this.nextHandler.handle(user);
        return user;
    }
}

module.exports = BaseUserHandler;