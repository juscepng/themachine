const express = require('express');

const router = express.Router();

const wttsController = require('./controllers/wttsController');

router.get('/getWtts', wttsController.getJson);

router.post('/postWtts', wttsController.calcWtts);

module.exports = router;