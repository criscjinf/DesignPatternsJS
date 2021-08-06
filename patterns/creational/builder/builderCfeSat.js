const { ItemNotaFiscal } = require('../../../commum/classes/nota_fiscal');
const Cfe = require("../../../commum/classes/cfe");
const api = require('../../../commum/api/api');

//Classe Builder - Responsável pela construção do Objeto em sí
class BuilderCfeSat {
    constructor() {
        this.nfe = null;
    }

    gerarNfe(dados) {
        this.nfe = new Cfe()
        this.nfe.numero = api.getProximoNumeroNfe()
        this.nfe.serie = "1";
    }

    carregaDadosCliente(dados) {
        let cliente = api.clienteGet(dados['cpf'])
        this.nfe.cpfCli = cliente.cpf
        this.nfe.nomeCli = cliente.nome
    }

    gerarItens(dados) {
        let items = dados['items'];
        items.forEach(item => {
            let produto = api.getProduto(item["produto"])
            let itemNfe = new ItemNotaFiscal();

            itemNfe.nItem = produto["codigo"];
            itemNfe.nDesc = produto["descricao"];
            itemNfe.nValor = produto["valor"];
            itemNfe.nPercIcms = produto["icms"];
            itemNfe.nIcms = (produto['valor'] * produto['icms']) / 100;

            this.nfe.items.push(itemNfe);
        });
    }

    totalizarNfe() {
        this.nfe.valorTotal = this.nfe.items.reduce((total, item) => {
            return total + item['nValor']
        }, 0);

    }

    emitirNfe() {
        api.gravarNota(this.nfe, 'Enviado para o SAT')
    }

    get() {
        return this.nfe
    }

};

module.exports = BuilderCfeSat;