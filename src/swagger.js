const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
    openapi: '3.0.0',
    info:{
        title: 'Wtts API',
        version: '1.0.0',
        description: 'API para calculo de consumo de energia',
    },
    servers: [
        {
            url: 'http://localhost:3333',
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./src/router.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
