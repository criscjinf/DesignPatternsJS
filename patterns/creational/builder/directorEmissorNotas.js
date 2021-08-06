// Classe Director - Responsável por coordenar a montagem do Objeto, dizendo quais são os passos necessários para criação do objeto desejado
function DirectorEmissorNotasFiscais() {
    this.constructor = function (nfeBuilder, dados) {
        nfeBuilder.gerarNfe(dados);
        nfeBuilder.carregaDadosCliente(dados);
        nfeBuilder.gerarItens(dados);
        nfeBuilder.totalizarNfe();
        nfeBuilder.emitirNfe();
        return nfeBuilder.get();
    }
}

module.exports = DirectorEmissorNotasFiscais;