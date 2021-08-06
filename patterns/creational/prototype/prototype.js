const Nfe = require("../../../commum/classes/nfe");

function NotaFiscalPrototype(proto) {
    this.proto = proto;

    this.clone = function () {
        let nota = new Nfe();

        nota.numero = proto.numero;
        nota.serie = proto.serie;

        return nota;
    };
}


module.exports = NotaFiscalPrototype;
