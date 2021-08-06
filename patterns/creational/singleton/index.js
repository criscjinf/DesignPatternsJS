const Singleton = require('./singleton');

function run() {

    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance();

    var instance3 = Singleton.createInstance();

    console.log("Same instance(1 X 2)? " + (instance1 === instance2));
    console.log("Same instance(2 X 3)? " + (instance3 === instance2));
}

run()