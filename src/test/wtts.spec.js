const wttsService = require('../services/wttsService');

const wtts = {
    "usuario": 'Juscelino',
    "concessionaria": 0.74906,
    "local": [
        {
            "nome": "quarto",
            "equipamentos": [
                {
                    "nome": 'PC',
                    "potencia": '600',
                    "horas": '8',
                    "dias": '7'
                }
            ]
        }
    ]
}

describe('teste do objeto', () => {
    it('teste nome de usuario', () => {
        const { usuario } = wtts;

        expect(usuario).toBe("Juscelino")
    })

    it('teste valor conscessoria', () => {
        const { concessionaria } = wtts;

        expect(concessionaria).toBe(0.74906)
    })

    it('teste nome de local', () => {
        const { local } = wtts;

        expect(local[0].nome).toBe("quarto")
    })

    it('teste equipamento', () => {
        const { local } = wtts;
        const { equipamentos } = local[0];

        expect(equipamentos[0].nome).toBe("PC")
        expect(equipamentos[0].potencia).toBe("600")
        expect(equipamentos[0].horas).toBe("8")
        expect(equipamentos[0].dias).toBe("7")
    })
})

describe('teste do calculo', () => {
    const result = wttsService.calcConsumo(wtts);
    it('teste do calculo total', () => {
        const { totalGasto, totalValor, local } = result;

        expect(totalGasto).toBe("33.60")
        expect(totalValor).toBe("25.17")
    })

    it('teste do calculo por local', () => {
        const { local } = result;
        const { consumo, valorConsumo } = local[0];

        expect(consumo).toBe("33.60")
        expect(valorConsumo).toBe("25.17")
    })

    it('teste do calculo equipamento', () => {
        const { local } = result;
        const { equipamentos } = local[0];
        const { consumo, valorConsumo } = equipamentos[0];

        expect(consumo).toBe("33.60")
        expect(valorConsumo).toBe("25.17")
    })
})