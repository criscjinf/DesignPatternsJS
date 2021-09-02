class OrderStatus {
    constructor(name, nextStatus) {
        this.name = name
        this.nextStatus = nextStatus
    }
    next() {
        return new this.nextStatus();
    }
}

module.exports = OrderStatus;