const InterfaceObserver = require("./interface/interface-observer");

class EditObserver extends InterfaceObserver {
    receiveNotification(event, value) {
        console.log(`Recebeu notificação ${event}: `, value)
    }
}

module.exports = EditObserver;