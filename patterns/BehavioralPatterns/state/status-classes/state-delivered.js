const OrderStatus = require("./order-status-base");

class StateDelivered extends OrderStatus {
    constructor() {
        super('stateDelivered', StateDelivered);
    }
}

module.exports = StateDelivered;