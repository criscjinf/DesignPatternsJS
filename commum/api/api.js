// Classe construída apenas com o intuíto de simular consultas e requisições a uma api
const api = (function () {
    return {
        clienteGet() {
            return {
                "cpf": "99999999999",
                "nome": "Cliente Teste",
                "fone": "(51) 99999-9999"
            }
        },

        gravarNota(nfe, emissor) {
            console.log(`Nota ${nfe["numero"]} gravada com sucesso`);
            console.log(emissor);
            console.log(nfe);
        },

        getProximoNumeroNfe() {
            return 123
        },

        getProduto(codigo) {
            return {
                "codigo": codigo,
                "descricao": "suco",
                "icms": 17,
                "valor": 8.90
            }
        },

        validateAccess(token) {
            return token === 'asd654qwe321zxc987'
        },

        postLog(url, token, msg) {
            if (this.validateAccess(token)) {
                console.log(url, msg);
            }
        },

        getUserPermissionLevel(user) {
            return user.loggedIn ? 1 : 0
        }
    }
})();

module.exports = api;