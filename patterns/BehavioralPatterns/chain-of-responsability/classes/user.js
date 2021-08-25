class User {
    constructor(name, password, loggedIn) {
        this.name = name;
        this.password = password;
        this.loggedIn = loggedIn;
        this.permissionLevel = 0;
    }
}
module.exports = User;