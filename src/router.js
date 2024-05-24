const express = require('express');

const router = express.Router();

const wttsController = require('./controllers/wttsController');
const wttsMiddlewares = require('./middlewares/wttsMiddlewares');

/**
 * @swagger
 * /getWtts:
 *   get:
 *     summary: Obter informações Wtts
 *     description: Retorna informações JSON Wtts
 *     responses:
 *       200:
 *         description: Sucesso ao obter as informações Wtts
 */
router.get('/getWtts', wttsController.getJson);


/**
 * @swagger
 * /calcWtts:
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
 *     responses:
 *       200:
 *         description: Consumo calculado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
router.post('/postWtts', wttsController.calcWtts);

module.exports = router;