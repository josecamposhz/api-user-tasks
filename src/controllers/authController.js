const httpStatus = require('http-status');
const authService = require('../services/authService');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const data = await authService.login({ email, password });

    return res.status(httpStatus.OK).send(data);
  } catch (error) {
    next(error);
  }
};

const register = async (req, res, next) => {
  try {
    const data = await authService.register(req.body);
    res.status(httpStatus.CREATED).send(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
  register
};
