const FactoryNotas = require('./factories')

const params = {
    numero: 123,
    serie: 'A',
    cpfCli: '999.999.999-99',
    nomeCli: 'Allen',
    valor: 10000,
    uf: 'RS'
}

const nota1 = FactoryNotas.criarNota(params);
console.log(`${nota1.uf}: `, nota1)

params.uf = 'SC'
const nota2 = FactoryNotas.criarNota(params);
console.log(`${nota2.uf}: `, nota2)