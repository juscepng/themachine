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
 * /postWtts:
 *   post:
 *     summary: Calcular Wtts
 *     description: Calcula Wtts
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               // Defina aqui os campos esperados no corpo da requisição para o cálculo do Wtts
 *     responses:
 *       200:
 *         description: Sucesso ao calcular Wtts
 *       400:
 *         description: Requisição inválida
 */
router.post('/postWtts', wttsController.calcWtts);

module.exports = router;