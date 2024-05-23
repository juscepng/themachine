const calcConsumo = (wtts) => {
    const { usuario, concessionaria, local } = wtts;

    const localCalc = calcularConsumoLocal(local, concessionaria);

    const result = montarRetorno(usuario, localCalc)

    return result;
}

const calcularConsumoLocal = (locais, concessionaria) => {
    locais.forEach(local => {
        let totalLocais = 0;
        local.equipamentos.forEach(equipamento => {
            equipamento = calcularEquipamentos(equipamento, concessionaria)
            totalLocais += Number(equipamento.consumo)
        })

        local.consumo = duasCasas(totalLocais)
        local.valorConsumo = duasCasas(totalLocais * concessionaria)
    });

    return locais
}

const calcularEquipamentos = (equipamento, concessionaria) => {
    let { dias, horas, potencia } = equipamento;
    equipamento.consumo = duasCasas((dias * horas * potencia) / 1000)
    equipamento.valorConsumo = duasCasas(equipamento.consumo * concessionaria)

    return equipamento;
}

const calcularConsumoTotal = (obj) => {
    let totalConsumo = 0
    let totalValor = 0

    obj.forEach(local => {
        totalConsumo += Number(local.consumo)
        totalValor += Number(local.valorConsumo)
    })

    return {
        totalGasto: duasCasas(totalConsumo),
        totalValor: duasCasas(totalValor)
    }
}

const montarRetorno = (user, locais) => {
    let { totalGasto, totalValor } = calcularConsumoTotal(locais)

    return {
        usuario: user,
        local: locais,
        totalGasto: totalGasto,
        totalValor: totalValor
    }
}

const duasCasas = (value) => {
    return value.toFixed(2)
}

module.exports = {
    calcConsumo
}