class NfeValidatorDefault {
    clientInfoIsRequired(totalNfeAmount) {
        let isRequired = totalNfeAmount >= 10000
        return {
            isRequired: isRequired,
            erroMsg: isRequired ? 'Notas com valor total superior a R$ 10.000,00, por determinação da legislação estadual é necessário identificar o consumidor. Informe . Informe CPF/CNPJ, Nome e Endereço' : ''
        }
    }
}

module.exports = NfeValidatorDefault;