const { NotaFiscal } = require('./nota_fiscal');


class Cfe extends NotaFiscal {

    getTipoNota() {
        return 'Cupom Fiscal Eletrônico'
    }
}

module.exports = Cfe;