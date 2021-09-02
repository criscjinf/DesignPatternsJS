class NfeValidatorPE {
    clientInfoIsRequired(totalNfeAmount) {
        let isRequired = totalNfeAmount >= 1000
        return {
            isRequired: isRequired,
            erroMsg: isRequired ? 'Notas com valor total superior a R$ 1.000,00, por determinação da legislação estadual é necessário identificar o consumidor. Informe CPF/CNPJ, Nome e Endereço' : ''
        }
    }
}

module.exports = NfeValidatorPE;