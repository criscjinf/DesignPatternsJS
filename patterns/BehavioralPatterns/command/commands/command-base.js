class CommandBase {
    constructor(model) {
        this.model = model;
        this.backup = null;
    }

    saveBackup(id) {
        if (id && this.model) {
            let object = this.model.findOne(id)
            if (object) this.backup = { ...object }
        }
    }

    undo() {
        if (this.backup && this.model) this.model.upsert(this.backup)
    }


    execute(data) {
        throw 'Método "execute" não implementado'
    }

}

module.exports = CommandBase;