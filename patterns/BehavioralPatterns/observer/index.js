const EditObserver = require("./edit-observer");
const { ProductObservable, PRODUCT_SET_NAME, PRODUCT_SET_PRICE } = require("./product-observable");


let product = new ProductObservable();
let editName = new EditObserver('editName1');
let editName2 = new EditObserver('editName2');
let editPrice = new EditObserver('editPrice');

product.register(PRODUCT_SET_NAME, editName)
product.register(PRODUCT_SET_NAME, editName2)
product.register(PRODUCT_SET_PRICE, editPrice)

console.log('VAI ALTERAR O NOME')
product.setName('Chocolate Milka')
console.log('-----------------------')

console.log('VAI ALTERAR O PREÇO')
product.setPrice(20);
product.setPrice(30);


console.log('Removendo edit1 da lista')
product.unregister(PRODUCT_SET_NAME, editName)

console.log('Nova alteração de nome')
product.setName('La Creme (Cacau Show)')