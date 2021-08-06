const { NotaFical } = require('./nota_fiscal');


class Cfe extends NotaFical {

    getTipoNota() {
        return 'Cupom Fiscal Eletrônico'
    }
}

module.exports = Cfe;