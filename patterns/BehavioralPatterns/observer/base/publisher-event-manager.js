class PublisherEventManager {
    constructor() {
        this.observers = {}
    }

    register(event, observer) {
        this.observers[event].push(observer)
    }

    unregister(event, observer) {
        this.observers[event].remove.filter(item => item !== observer)
    }

    notifyEvent(event, value) {
        this.observers[event].forEach(item => item.receiveNotification(event, value));
    }

}

module.exports = PublisherEventManager;