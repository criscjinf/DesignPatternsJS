const CommandBase = require('./command-base');

class CommandCreateSaleItem extends CommandBase {
    execute(data) {
        if (data['id'] === 10) throw 'Erro ao executar comando'
        this.saveBackup(data['id'])
        this.model.upsert(data);
    }
}

module.exports = CommandCreateSaleItem;