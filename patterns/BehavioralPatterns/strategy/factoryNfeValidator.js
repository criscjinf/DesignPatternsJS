const NfeValidatorDefault = require("./strategy-validator/nfe-validator-default");
const NfeValidatorMG = require("./strategy-validator/nfe-validator-mg");
const NfeValidatorPE = require("./strategy-validator/nfe-validator-mt");

const listValidators = {
    NfeValidatorMG,
    NfeValidatorPE
}

class FactoryNfeValidator {
    static getNfeValidator(uf) {
        let Validator = listValidators[`NfeValidator${uf}`]
        if (!Validator) Validator = NfeValidatorDefault

        return new Validator()
    }
}

module.exports = FactoryNfeValidator;