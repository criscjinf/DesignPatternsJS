const BuilderCfeSat = require('../../creational/builder/builderCfeSat');
const BuilderNFCe = require('../../creational/builder/builderNFCe');
const EmissorNotasFiscais = require('../../creational/builder/directorEmissorNotas');
const AdapterLog = require('../adapter/adapterLog');
const { DecoratorNfeToXml, DecoratorNfeComplementoGetTipoNota } = require('../decorator/decoratorNfeToXml');



class FacadeEmissorDeNotas {
    constructor() {
        this.diretorDeEmissao = new EmissorNotasFiscais();
    }

    emitirNFCe(dados) {
        const nfceBuilder = new BuilderNFCe();

        let nfe = this.diretorDeEmissao.constructor(nfceBuilder, dados);

        AdapterLog.message('Nota emitida! Montando Xml');

        DecoratorNfeToXml(nfe);

        nfe.decoratorNfeToXml();

    }

    emitirCFe(dados) {
        const cfeSatBuilder = new BuilderCfeSat();

        this.diretorDeEmissao.constructor(cfeSatBuilder, dados)

        AdapterLog.message('Nota emitida! Baixando cupom ...');

        AdapterLog.message('Enviando cupom para S3...');

    }
}

module.exports = FacadeEmissorDeNotas;