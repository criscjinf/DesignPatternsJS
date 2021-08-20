const BookCatalog = require('./bookCatalog');


const data = {
    "title": "Harry harry potter and the philosopher's stone",
    "uthor": "J. K. Rowling",
    "genre": "Fantasy",
    "pageCount": 223,
    "publisher": "Bloomsbury",
    "id": 1,
    "shelf": "A3",
    "rented": true

}

const book1 = new BookCatalog(data)

data['id'] = 2
data['shelf'] = 'B5'
data['rented'] = false

const book2 = new BookCatalog(data)

console.log(`É o mesmo livro? ${book1.book === book2.book}`);

console.log(`É o mesmo livro do catalogo? ${book1 === book2}`);

console.log(book1, book2)