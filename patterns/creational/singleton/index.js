const SingletonConfigs = require('./singletonConfigs');

const configs1 = SingletonConfigs.getInstance;
const configs2 = SingletonConfigs.getInstance;

configs2.load();
console.log(configs1);
console.log(configs2);

console.log(`É o mesmo objeto? ${configs1 === configs2}`);

console.log(`ID Loja config 1: ${configs1.id_loja}`);

console.log('Mudando ID da Loja na config 2')
configs2.id_loja = 20;

console.log(`ID Loja config 1: ${configs1.id_loja}`);

// var config3 = new SingletonConfigs()