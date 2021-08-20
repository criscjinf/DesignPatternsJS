const SingletonFlyweightFactory = require('./flyweightFactory');

class BookCatalog {
    constructor(data) {
        this.book = SingletonFlyweightFactory.getInstance.getBook(data)
        this.id = data['id']
        this.shelf = data['shelf']
        this.rented = data['rented']
    }
}

module.exports = BookCatalog;