const BasicIterable = require('./Iterators/basic-iterable');
const MyFavoriteAuthors = require('./Iterators/my-favorite-authors-iterator');
const BasicGenerator = require('./Generators/basic-generator');
const { StepByStepGenerator, consStepByStepGenerator } = require('./Generators/generator-step-by-step');

function iteratorBasico() {
    let iter = new BasicIterable();
    for (value of iter) {
        console.log('Iterator: ', value)
    }
}

function generatorBasico() {
    let gen = new BasicGenerator();

    for (value of gen) {
        console.log('Generator: ', value)
    }
}

function iteratorDeObjetoComposto() {
    let authors = new MyFavoriteAuthors();
    for (author of authors) {
        console.log(author);
    }

    console.log(...authors) // Permite realizar spred do objeto
}

function acessarMetodosDoIteradorDoObjeto() {
    let authors = new MyFavoriteAuthors()[Symbol.iterator]();
    console.log('Primeira posição: ', authors.next())
    console.log('Segunda posição: ', authors.next())
}

function generatorPassoAPasso() {
    let gen = new StepByStepGenerator()[Symbol.iterator]();

    gen.next()
    gen.next()
    gen.next()
}

iteratorBasico();
// generatorBasico();

// iteratorDeObjetoComposto();

// acessarMetodosDoIteradorDoObjeto();

// generatorPassoAPasso();