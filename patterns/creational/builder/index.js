const BuilderCfeSat = require('./builderCfeSat');
const BuilderNFCe = require('./builderNFCe');
const EmissorNotasFiscais = require('./directorEmissorNotas');


function EmitirNota() {
    const cfeSatBuilder = new BuilderCfeSat();
    const nfceBuilder = new BuilderNFCe();
    const nfeEmissor = new EmissorNotasFiscais();

    const dados = {
        "cpf": "99999999999",
        "items": [
            { "produto": 123456 },
            { "produto": 987654 }
        ]
    }

    nfeEmissor.constructor(nfceBuilder, dados)
    nfeEmissor.constructor(cfeSatBuilder, dados)
}


EmitirNota()