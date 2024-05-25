const express = require('express');

const router = express.Router();

const wttsController = require('./controllers/wttsController');
const wttsMiddlewares = require('./middlewares/wttsMiddlewares');

/**
 * @swagger
 * /api/v1/exemplo:
 *   get:
 *     summary: Obter exemplo de estrutura JSON
 *     description: Retorna um exemplo de estrutura JSON que pode ser usada como referência para enviar dados ao endpoint de cálculo de consumo.
 *     responses:
 *       200:
 *         description: Sucesso ao obter o exemplo de estrutura JSON
 */
router.get('/api/v1/exemplo', wttsController.getJson);


/**
 * @swagger
 * /api/v1/consumo/calcular:
 *   post:
 *     summary: Calcula o consumo de watts
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuario:
 *                 type: string
 *                 example: "string"
 *               concessionaria:
 *                 type: string
 *                 example: "string"
 *               local:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     nome:
 *                       type: string
 *                       example: "string"
 *                     equipamentos:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           nome:
 *                             type: string
 *                             example: "string"
 *                           potencia:
 *                             type: string
 *                             example: "string"
 *                           horas:
 *                             type: string
 *                             example: "string"
 *                           dias:
 *                             type: string
 *                             example: "string"
 *     Responses:
 *       200:
 *         description: Consumo calculado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.post('/api/v1/consumo/calcular', wttsMiddlewares.validateJson, wttsController.calcWtts);

module.exports = router;