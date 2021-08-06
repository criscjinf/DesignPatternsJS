const { NotaFical } = require('./nota_fiscal');


class Nfe extends NotaFical {

    getTipoNota() {
        return 'Nota Fiscal Eletrônica'
    }
}

module.exports = Nfe;