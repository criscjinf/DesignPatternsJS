function DecoratorNfeToXml(nota) {
    nota.decoratorNfeToXml = function () {
        console.log('Exportando para xml!');
    }
}

function DecoratorNfeComplementoGetTipoNota(nota) {
    let tipoNota = nota.getTipoNota;
    nota.getTipoNota = function () {
        return `${tipoNota()} decorator`;
    }
}

module.exports = { DecoratorNfeToXml, DecoratorNfeComplementoGetTipoNota };