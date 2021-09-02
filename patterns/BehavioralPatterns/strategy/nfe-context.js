class NfeContext {
    constructor(data) {
        this.id = data['id']
        this.clientName = data['clientName']
        this.clientCpf = data['clientCPF']
        this.totalAmount = data['totalAmount']
        this.nfeValidator = null;
    }
    setValidator(nfeValidator) {
        this.nfeValidator = nfeValidator;
    }

    validate() {
        let response = this.nfeValidator.clientInfoIsRequired(this.totalAmount)
        if (response.isRequired && !this.clientCpf) {
            console.log(response.erroMsg)
        } else {
            console.log('Informações do cliente não são necessárias')
        }
    }
}

module.exports = NfeContext;