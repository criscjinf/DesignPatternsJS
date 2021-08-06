const { Nfe } = require('../../../commum/classes/nota_fiscal')


function NotaFiscalPrototype(proto) {
    this.proto = proto;

    this.clone = function () {
        var nota = new Nfe();

        nota.numero = proto.numero;
        nota.serie = proto.serie;

        return nota;
    };
}


module.exports = NotaFiscalPrototype;
