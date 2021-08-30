// Classe zeladora dos mementos: Nesta classe não devem haver nenhuma alteração nos mementos
// ela apenas deve manter os mementos criados 

class Caretaker {
    constructor() {
        this.mementos = {}
    }
    add(key, memento) {
        this.mementos[key] = memento;
    }
    get(key) {
        return this.mementos[key]
    }
}

module.exports = Caretaker;