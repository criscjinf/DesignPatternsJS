const factoryNotas = require('./factories')

const params = {
    numero: 123,
    serie: 'A',
    cpfCli: '999.999.999-99',
    nomeCli: 'Allen',
    valorTotal: 20.98,
}

const nfe = factoryNotas.criarNota("Nfe", params);
const cfe = factoryNotas.criarNota("Cfe", params);

console.log(nfe.getTipoNota())
console.log(cfe.getTipoNota())