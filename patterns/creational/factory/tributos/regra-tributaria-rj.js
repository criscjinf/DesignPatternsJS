class RegraTributariaRJ {
  aliquotaIcms() {
    return 16
  }

  obrigarInformarCPF(dados){
    return dados.valor >= 1000
  }
}

module.exports = RegraTributariaRJ