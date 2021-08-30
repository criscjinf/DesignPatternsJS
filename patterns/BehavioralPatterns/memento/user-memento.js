const InterfaceMemento = require("./interfaces/interface-memento");

class UserMemento extends InterfaceMemento {
    constructor(user) {
        super()
        this.backup = { ...user } // Salva o estado atual do objeto em uma nova referência de memória
    }

    getBackup() {
        return this.backup
    }

}

module.exports = UserMemento;