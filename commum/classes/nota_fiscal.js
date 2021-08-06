class Nfe {
    constructor() {
        this.numero = null;
        this.serie = '';
        this.cpfCli = '';
        this.nomeCli = '';
        this.valorTotal = null;
        this.items = []
    }

    params() {
        console.log("numero: " + this.numero,
            ", serie: " + this.serie);
    };
};

class ItemsNfe {
    constructor() {
        this.nItem = null;
        this.nDesc = '';
        this.nValor = null;
        this.nPercIcms = null;
        this.nIcms = null;
    }
};

module.exports = { Nfe, ItemsNfe };