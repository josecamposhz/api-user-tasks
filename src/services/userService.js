const httpStatus = require('http-status');
const { User } = require('../models');
const ApiError = require('../helpers/ApiError');

const getAllUsers = async () => {
  const allUsers = await User.findAll({
    attributes: { exclude: ['password'] }
  });
  return allUsers;
};

const getUserById = async (userId) => {
  const user = await User.findByPk(userId, { raw: true });
  if (!user) {
    throw new ApiError('Not found', httpStatus.NOT_FOUND);
  }
  return user;
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email }, raw: true });
  return user;
};

const createUser = async (data) => {
  const newUser = await User.create(data);
  return newUser;
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser
};
