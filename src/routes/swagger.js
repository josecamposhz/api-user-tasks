const { Router } = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const router = Router();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Docs',
      version: '1.0.0'
    }
  },
  apis: ['./src/routes/*.js'], // files containing annotations as above
  servers: [
    {
      url: 'http://localhost:3000/api',
      description: 'Development server'
    }
  ]
};

const swaggerDocument = swaggerJsdoc(options);

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;
