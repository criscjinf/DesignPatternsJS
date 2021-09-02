const StateWaitingForPayment = require("./status-classes/state-waiting-for-payment")

class Order {
    constructor() {
        this.state = new StateWaitingForPayment();
    }

    nextState() {
        this.state = this.state.next();
    }
}

module.exports = Order;