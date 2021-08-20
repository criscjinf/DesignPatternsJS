class Book {
    constructor(data) {
        Object.defineProperties(this, {
            "title": { value: data['title'], writable: false },
            "author": { value: data['author'], writable: false },
            "genre": { value: data['genre'], writable: false },
            "pageCount": { value: data['pageCount'], writable: false },
            "publisherID": { value: data['publisherID'], writable: false }
        });
    }
}

module.exports = Book;
