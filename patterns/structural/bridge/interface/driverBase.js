// Esta classe não é uma interface real, apenas estou utilizando para ilustrar a validação do método getInsertSql

class DriverBase {
    getInsertSql(model) {
        throw 'Método não implementado'
    }
    persist(model) {
        console.log(this.getInsertSql(model));
    }
}

module.exports = DriverBase;
