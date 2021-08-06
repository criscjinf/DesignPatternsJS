const Cfe = require("../../../commum/classes/cfe");
const Nfe = require("../../../commum/classes/nfe");

const tipoNota = { Nfe, Cfe }

// Class seguindo o Pattern Factory
const factoryNotas = new function () {
    this.criarNota = function (tipo, dados) {
        const ClasseNota = tipoNota[tipo]

        return new ClasseNota(dados)
    }
}

module.exports = factoryNotas;