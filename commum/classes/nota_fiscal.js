class NotaFical {
    constructor(dados) {
        this.numero = dados['numero'] || null;
        this.serie = dados['serie'] || '';
        this.cpfCli = dados['cpfCli'] || '';
        this.nomeCli = dados['nomeCli'] || '';
        this.valorTotal = dados['valorTotal'] || null;
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