const { check } = require('express-validator');
const validateResult = require('../helpers/validateResult');

module.exports.validateCreateTask = [
  check('title')
    .isLength({ min: 3 })
    .withMessage('El título debe tener un largo mínimo de 3 caracteres.')
    .trim(),
  validateResult
];
