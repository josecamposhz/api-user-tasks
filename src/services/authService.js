const jwt = require('jsonwebtoken');
const httpStatus = require('http-status');
const userService = require('./userService');
const ApiError = require('../helpers/ApiError');
const passwordHandler = require('../helpers/passwordHandler');

const login = async ({ email, password }) => {
  const user = await userService.getUserByEmail(email);
  if (!user) {
    throw new ApiError('Credenciales inválidas', httpStatus.FORBIDDEN);
  }

  const { password: userPassword, ...payload } = user;

  const validPassowrd = await passwordHandler.compare(password, userPassword);

  if (!validPassowrd) {
    throw new ApiError('Credenciales inválidas', httpStatus.FORBIDDEN);
  }

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 24
  });

  return { user: payload, token };
};

const register = async (user) => {
  user.password = await passwordHandler.encrypt(user.password);
  const newUser = await userService.createUser(user);
  return newUser;
};

module.exports = {
  login,
  register
};
