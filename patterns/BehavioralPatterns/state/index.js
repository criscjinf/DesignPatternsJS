const Order = require("./order");

let order = new Order();

console.log(order.state.name)
order.nextState()

console.log(order.state.name)
order.nextState()

console.log(order.state.name)