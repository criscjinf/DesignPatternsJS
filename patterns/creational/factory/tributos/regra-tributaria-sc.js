class RegraTributariaSC {
  aliquotaIcms() {
    return 12
  }

  obrigarInformarCPF(dados){
    return dados.valor >= 5000
  }
}

module.exports = RegraTributariaSC