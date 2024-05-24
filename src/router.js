const express = require('express');

const router = express.Router();

const wttsController = require('./controllers/wttsController');
const wttsMiddlewares = require('./middlewares/wttsMiddlewares')

router.get('/getWtts', wttsController.getJson);

router.post('/postWtts', wttsMiddlewares.validateJson, wttsController.calcWtts);

module.exports = router;