const NotaFiscalPrototype = require('./prototype');
const { Nfe } = require('../../../commum/classes/nota_fiscal')


function run() {
    let i = 0;
    let proto = new Nfe();
    proto.numero = 1;
    proto.serie = 'A';

    let prototype = new NotaFiscalPrototype(proto);
    let notaRS = prototype.clone();
    notaRS.params();

    console.log(`É o mesmo objeto? ${proto === notaRS}`)
}

run()