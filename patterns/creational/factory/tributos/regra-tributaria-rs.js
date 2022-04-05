class RegraTributariaRS {
  aliquotaIcms() {
    return 18
  }

  obrigarInformarCPF(dados){
    return dados.valor >= 10000
  }
}

module.exports = RegraTributariaRS