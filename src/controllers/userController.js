const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await userService.getAllUsers();
    res.send({ status: 'OK', data: allUsers });
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    res.send({ status: 'OK', data: user });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById
};
