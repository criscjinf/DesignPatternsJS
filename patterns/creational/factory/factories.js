const RegraTributariaRJ = require("./tributos/regra-tributaria-rj")
const RegraTributariaRS = require("./tributos/regra-tributaria-rs")
const RegraTributariaSC = require("./tributos/regra-tributaria-sc")


const regrasTributarias = { RegraTributariaRJ, RegraTributariaRS, RegraTributariaSC }

// Class seguindo o Pattern Factory
class FactoryNotas {
    static calculaIcms(nota) {
        return Math.round(nota.valor * nota.aliquotaIcms) /100
    }
    
    static criarNota = (dados) => {
        const ClasseRegras = regrasTributarias[`RegraTributaria${dados.uf}`]
        const regrasUF = new ClasseRegras()
        const nota = {...dados}

        nota.aliquotaIcms = regrasUF.aliquotaIcms()
        nota.icms = FactoryNotas.calculaIcms(nota)

        if (regrasUF.obrigarInformarCPF(dados) && (!dados.cpf)) {
            throw new Error(`Nota fiscal com valor muito elevado para o estado de ${dados.uf}. Obrigatório informar o CPF.`)
        }

        return nota
    }
}

module.exports = FactoryNotas;