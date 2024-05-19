const wttsService = require('../services/wttsService');

const getJson = (req, resp) => {
    return resp.status(200).json(
        {
            "usuario": 'string',
            "concessionaria": 'string',
            "local": [
                {
                    "nome": "quarto",
                    "equipamentos": [
                        {
                            "nome": 'string',
                            "potencia": 'string',
                            "horas": 'string',
                            "dias": 'string'
                        }
                    ]
                }
            ]
        }
    )
}

const calcWtts = (req, resp) => {
    const calcWtts = wttsService.calcConsumo(req.body)

    return resp.status(200).json(calcWtts)
}

module.exports = {
    getJson,
    calcWtts
}