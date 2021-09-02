const OrderStatus = require("./order-status-base");
const StateShipping = require("./state-shipping");

class StateWaitingForPayment extends OrderStatus {
    constructor() {
        super('stateWaitingForPayment', StateShipping);
    }
}

module.exports = StateWaitingForPayment;