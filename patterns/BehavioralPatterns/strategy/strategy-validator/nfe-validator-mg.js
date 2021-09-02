class NfeValidatorMG {
    clientInfoIsRequired(totalNfeAmount) {
        let isRequired = totalNfeAmount >= 3000
        return {
            isRequired: isRequired,
            erroMsg: isRequired ? 'Notas com valor total superior a R$ 3.000,00, por determinação da legislação estadual é necessário identificar o consumidor. Informe CPF/CNPJ, Nome e Endereço' : ''
        }
    }
}

module.exports = NfeValidatorMG;