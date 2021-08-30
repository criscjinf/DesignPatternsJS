// Esta classe podemos comparar com as nossas models do sistema
// É somente ela quem saberá como o memento deve ser criado e restaurado

const InterfaceOriginator = require("./interfaces/interface-originator");
const UserMemento = require("./user-memento");

class UserOriginator extends InterfaceOriginator {
    constructor(name, age, country) {
        super()
        this.name = name
        this.age = age
        this.country = country
    }
    getMemento() {
        return new UserMemento(this)
    }

    restoreMemento(memento) {
        let backup = memento.backup
        this.name = backup.name
        this.age = backup.age
        this.country = backup.country
    }
}

module.exports = UserOriginator;