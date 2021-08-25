const ManagerDbCommand = require('./manager-db-command');
const CommandCreateSale = require('./commands/command-create-sale');
const CommandCreateSaleItem = require('./commands/commnad-create-sale-item');
const CommandInventoryWriteOff = require('./commands/command-inventory-write-off');
const ModelBase = require('./model/model-base');
const PAYLOAD = require('./constants');
const { inventory } = require('./constants');


const modelSales = new ModelBase();
const modelSalesItems = new ModelBase();
const modelInventory = new ModelBase();

function LoadInventory() {
    modelInventory.create(PAYLOAD.inventory[0]);
    modelInventory.create(PAYLOAD.inventory[1]);
    modelInventory.create(PAYLOAD.inventory[2]);
    console.log('Estoque inicial: ', modelInventory.data)
}


function registrarVenda(sale, indentificador) {
    const payloadSale = { ...sale };
    const payloadItems = sale.items;
    delete payloadSale['items']
    const manager = new ManagerDbCommand();
    try {
        manager.execute(new CommandCreateSale(modelSales), payloadSale)

        payloadItems.forEach((item) => {
            manager.execute(new CommandCreateSaleItem(modelSalesItems), item)
            manager.execute(new CommandInventoryWriteOff(modelInventory), item)
        })
    } finally {
        console.log(`Posição de inventário após venda ${indentificador}: `, modelInventory.data)
    }
}


function run() {
    LoadInventory();
    registrarVenda(PAYLOAD.sales[2], 1);
    registrarVenda(PAYLOAD.sales[2], 2);
}

run();
