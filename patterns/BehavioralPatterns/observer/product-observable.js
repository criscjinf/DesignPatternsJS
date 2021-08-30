const PublisherEventManager = require("./base/publisher-event-manager");

const PRODUCT_SET_NAME = 'setName';
const PRODUCT_SET_PRICE = 'setPrice';

class ProductObservable extends PublisherEventManager {
    constructor() {
        super()
        this.observers[PRODUCT_SET_NAME] = []
        this.observers[PRODUCT_SET_PRICE] = []

    }

    setName(name) {
        this.name = name
        this.notifyEvent(PRODUCT_SET_NAME, this.name)
    }

    setPrice(price) {
        this.price = price
        this.notifyEvent(PRODUCT_SET_PRICE, this.price)
    }
}

module.exports = { ProductObservable, PRODUCT_SET_NAME, PRODUCT_SET_PRICE };