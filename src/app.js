const express = require('express');
const router = require('./router');

const app = express();
const swaggerSetup = require('./swagger')


swaggerSetup(app);

app.use(express.json());
app.use(router);

// app.listen(3333, () => {
//     console.log('Servidor rodando na porta 3333');
// })

module.exports = app;