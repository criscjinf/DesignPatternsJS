const Nfe = require('../../../commum/classes/nfe');
const { DecoratorNfeToXml, DecoratorNfeComplementoGetTipoNota } = require('./decoratorNfeToXml');

const params = {
    numero: 123,
    serie: 'A',
    cpfCli: '999.999.999-99',
    nomeCli: 'Allen',
    valorTotal: 20.98,
}

let nfe = new Nfe(params);

// DecoratorNfeToXml(nfe);
DecoratorNfeComplementoGetTipoNota(nfe);

console.log(nfe.getTipoNota())
// nfe.decoratorNfeToXml();