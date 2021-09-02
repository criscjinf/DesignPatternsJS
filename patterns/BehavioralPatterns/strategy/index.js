const FactoryNfeValidator = require("./factoryNfeValidator");
const NfeValidatorDefault = require("./strategy-validator/nfe-validator-default");
const NfeValidatorMG = require("./strategy-validator/nfe-validator-mg");
const NfeValidatorPE = require("./strategy-validator/nfe-validator-mt");
const NfeContext = require("./nfe-context");

function EmitirNota(data) {
    let nfe = new NfeContext(data)
    let validator;
    switch (data['uf']) {
        case 'MG':
            validator = new NfeValidatorMG;
            break;
        case 'PE':
            validator = new NfeValidatorPE;
            break;
        default:
            validator = new NfeValidatorDefault;
    }

    nfe.setValidator(validator)
    nfe.validate();
}

function EmitirNota2(data) {
    let nfe = new NfeContext(data)
    let validator = FactoryNfeValidator.getNfeValidator(data['uf'])
    nfe.setValidator(validator)
    nfe.validate()
}


dados = {
    id: 1,
    clientName: 'Cristiano Lemos',
    clientCpf: '',
    totalAmount: 10000,
    uf: 'RS'
}

EmitirNota2(dados)