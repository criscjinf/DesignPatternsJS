const FacadeEmissorDeNotas = require('./facadeGerarNota');

const dados = {
    "cpf": "99999999999",
    "items": [
        { "produto": 123456 },
        { "produto": 987654 }
    ]
}

const emissor = new FacadeEmissorDeNotas();

emissor.emitirNFCe(dados);

emissor.emitirCFe(dados);