const InterfaceObserver = require("./interface/interface-observer");

class EditObserver extends InterfaceObserver {
    constructor(editName) {
        super()
        this.editName = editName;
    }
    receiveNotification(event, value) {
        console.log(`${this.editName} recebeu notificação ${event}: `, value)
    }
}

module.exports = EditObserver;