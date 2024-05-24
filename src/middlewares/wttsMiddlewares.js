const validateJson = (req, res, next) => {
    const { body } = req;

    if (Object.keys(body).length === 0)
        return sendMessage(res, 'Body não foi encontrado.')

    if (!body.usuario)
        return sendMessage(res, 'Usuário não foi encontrado.')

    if (!body.concessionaria)
        return sendMessage(res, 'Concessionaria não foi encontrada.')

    if (!validNumber(body.concessionaria))
        return sendMessage(res, 'O valor da concessionária informado não e válido.')

    if (body.local.length == 0)
        return sendMessage(res, 'Local não foi encontrado.')

    body.local.forEach(local => {
        if (!local.nome) {
            return sendMessage(res, 'Nome do local não foi encontrado.')
        }
        else {
            const { equipamentos } = local;

            if (equipamentos.length == 0) {
                return sendMessage(res, 'Equipamentos não foi encontrado.')
            } else {
                equipamentos.forEach(equipamento => {
                    for (let e in equipamento) {
                        if (!equipamento[e])
                            return sendMessage(res, `O(a) ${e} do equipamento não foi encontrado.`)

                        if (e != 'nome') {
                            if (!validNumber(equipamento[e]))
                                return sendMessage(res, `O valor do(a) ${e} do equipamento não é valido.`)
                        }
                    }
                });
            }
        }
    })

    next()
}

const sendMessage = (res, message) => {
    return res.status(400).json({ error: message })
}

const validNumber = (value) => {
    return !isNaN(value) && value > 0;
}

module.exports = {
    validateJson
}