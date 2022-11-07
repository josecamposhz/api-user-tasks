const httpStatus = require('http-status');
const { validationResult } = require('express-validator');

const validateResult = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error) {
    const errors = error.array();
    res.status(httpStatus.UNPROCESSABLE_ENTITY).send({ errors, message: errors[0].msg });
  }
};

module.exports = validateResult;
