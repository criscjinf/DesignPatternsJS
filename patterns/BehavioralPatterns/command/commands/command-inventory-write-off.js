const CommandBase = require('./command-base');



class CommandInventoryWriteOff extends CommandBase {
    execute(data) {
        this.saveBackup(data['id_product']);
        let productInventory = this.model.findOne(data['id_product']);

        if (productInventory && productInventory['quantity'] >= data['quantity']) {
            productInventory['quantity'] -= data['quantity'];
            this.model.upsert(productInventory);
        } else {
            throw `Produto "${data['description']}" sem estoque suficiente. Remova do pedido para concluir a venda!`
        }
    }
}

module.exports = CommandInventoryWriteOff;