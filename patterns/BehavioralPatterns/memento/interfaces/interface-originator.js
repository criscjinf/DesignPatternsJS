// Classe apenas para simbolizar o uso de interface no JS
// Nesta classe teremos os métodos obrigatórios para os nossos originators;

class InterfaceOriginator {
    getMemento() {
        throw "getMemento method isn't implemented!"
    }

    restoreMemento() {
        throw "restoreMemento method isn't implemented!"
    }

}

module.exports = InterfaceOriginator;