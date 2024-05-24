const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
    openapi: '3.0.0',
    info:{
        title: 'API de Cálculo de Consumo de Energia',
        version: '1.0.0',
        description: `
          A API de Cálculo de Consumo de Energia permite calcular o consumo de energia elétrica com base em dados fornecidos pelo usuário. 
          Os usuários podem enviar informações detalhadas sobre locais e equipamentos elétricos, e a API retorna o consumo de energia calculado. 
          Esta API é ideal para concessionárias de energia, desenvolvedores de aplicativos de gerenciamento de energia e consumidores que desejam monitorar e gerenciar seu consumo de energia.
          
          **Endpoints Principais:**
          - **GET /getJson:** Retorna um exemplo de estrutura JSON que pode ser usada como referência para enviar dados ao endpoint de cálculo de consumo.
          - **POST /calcWtts:** Calcula o consumo de energia com base nos dados fornecidos pelo usuário.
          
          **Exemplo de Estrutura de Dados:**
          \`\`\`json
          {
              "usuario": "string",
              "concessionaria": "string",
              "local": [
                  {
                      "nome": "quarto",
                      "equipamentos": [
                          {
                              "nome": "string",
                              "potencia": "string",
                              "horas": "string",
                              "dias": "string"
                          }
                      ]
                  }
              ]
          }
          \`\`\`
          
          **Benefícios:**
          - **Fácil Integração:** A API pode ser facilmente integrada em sistemas de gerenciamento de energia e aplicativos móveis.
          - **Flexível:** Permite o envio de dados detalhados e variados sobre locais e equipamentos.
          - **Precisão:** Retorna cálculos precisos de consumo de energia com base nas informações fornecidas.
        `,
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
