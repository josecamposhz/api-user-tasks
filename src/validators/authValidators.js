const { check } = require('express-validator');
const validateResult = require('../helpers/validateResult');

module.exports.validateRegister = [
  check('firstName')
    .isLength({ min: 3 })
    .withMessage('El nombre debe tener un largo minimo de 3 caracteres.')
    .trim(),
  check('lastName')
    .isLength({ min: 3 })
    .withMessage('El apellido debe tener un largo minimo de 3 caracteres.')
    .trim(),
  check('email').isEmail().withMessage('Debe ingresar un email válido.').trim(),
  check('password')
    .isLength({ min: 6 })
    .withMessage('La contraseña debe tener minímo 6 carácteres.')
    .trim(),
  validateResult
];

module.exports.validateLogin = [
  check('email').isEmail().withMessage('Debe ingresar un email válido.').trim(),
  check('password')
    .isLength({ min: 6 })
    .withMessage('La contraseña debe tener minímo 6 carácteres.')
    .trim(),
  validateResult
];
