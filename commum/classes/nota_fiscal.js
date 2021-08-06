class NotaFical {
    constructor(dados) {
        this.numero = dados ? dados['numero'] : null;
        this.serie = dados ? dados['serie'] : '';
        this.cpfCli = dados ? dados['cpfCli'] : '';
        this.nomeCli = dados ? dados['nomeCli'] : '';
        this.valorTotal = dados ? dados['valorTotal'] : null;
        this.items = []
    }

    params() {
        console.log("numero: " + this.numero,
            ", serie: " + this.serie);
    };

    getTipoNota() {
        return 'Nota base'
    }

};

class ItemNotaFiscal {
    constructor() {
        this.nItem = null;
        this.nDesc = '';
        this.nValor = null;
        this.nPercIcms = null;
        this.nIcms = null;
    }
};

module.exports = { NotaFical, ItemNotaFiscal };