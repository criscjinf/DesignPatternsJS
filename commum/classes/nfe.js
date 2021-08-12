const { NotaFiscal } = require('./nota_fiscal');


class Nfe extends NotaFiscal {

    getTipoNota() {
        return 'Nota Fiscal Eletrônica'
    }
}

module.exports = Nfe;