const flyweightBook = require('./flyweightBook');

let _instance = Symbol();
let _singletonEnforcer = Symbol();

class SingletonFlyweightFactory {
    constructor(enforce) {
        if (enforce !== _singletonEnforcer) {
            throw ('Não utilize o constructor desta classe, ao invés disto utilize o getInstance.');
        }
        this.listFlyweight = []
    }

    getBook(data) {
        let book = this.listFlyweight.find(item => item.title === data['title'])
        if (!book) {
            book = new flyweightBook(data)
            this.listFlyweight.push(book)
        }

        return book
    }

    static get getInstance() {
        if (!this[_instance]) {
            this[_instance] = new SingletonFlyweightFactory(_singletonEnforcer);
        }
        return this[_instance];
    }
}

module.exports = SingletonFlyweightFactory;