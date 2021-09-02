const StateDelivered = require("./state-delivered");
const OrderStatus = require("./order-status-base");


class StateShipping extends OrderStatus {
    constructor() {
        super('shipping', StateDelivered);
    }
}

module.exports = StateShipping;