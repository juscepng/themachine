const validateJson = (req, res, next) => {
    const { body } = req;

    if (Object.keys(body).length === 0) return res.status(400).json({ error: 'Body não foi encontrado.' })

    if (!body.usuario) return res.status(400).json({ error: 'Usuário não foi encontrado.' })

    if (!body.concessionaria) return res.status(400).json({ error: 'Concessionaria não foi encontrado.' })

    if (body.local.length == 0) return res.status(400).json({ error: 'Local não foi encontrado.' })

    body.local.forEach(local => {
        if (!local.nome) {
            return res.status(400).json({ error: 'Nome do local não foi encontrado.' })
        }
        else {
            const { equipamentos } = local;

            if (equipamentos.length == 0) {
                return res.status(400).json({ error: 'Equipamentos não foi encontrado.' })
            } else {
                equipamentos.forEach(equipamento => {
                    for (let e in equipamento) {
                        if (!equipamento[e]) return res.status(400).json({ error: `O(a) ${e} do equipamento não foi encontrado.` })
                    }
                });
            }
        }
    })

    next()
}

module.exports = {
    validateJson
}