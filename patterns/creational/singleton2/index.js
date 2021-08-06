const SingletonConfigs = require('./singletonConfigs');

const configs1 = SingletonConfigs.getInstance;
const configs2 = SingletonConfigs.getInstance;

console.log(configs1);
console.log(configs2);

console.log("É o mesmo objeto? " + (configs1 === configs2));

// var config3 = new SingletonConfigs()