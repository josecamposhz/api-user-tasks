const httpStatus = require('http-status');
const { Task } = require('../models');
const ApiError = require('../helpers/ApiError');

const getAllTasks = async () => {
  const allTasks = await Task.findAll();
  return allTasks;
};

const getUserTasks = async (userId) => {
  const tasks = await Task.findAll({ where: { userId } });
  return tasks;
};

const getTaskById = async (taskId) => {
  const task = await Task.findByPk(taskId);
  if (!task) {
    throw new ApiError('Not found', httpStatus.NOT_FOUND);
  }
  return task;
};

const createTask = async (data, userId) => {
  const newTask = await Task.create({ ...data, userId });
  return newTask;
};

const updateTask = async (data, id) => {
  const task = await Task.findByPk(id);
  if (!task) {
    throw new ApiError('Not found', httpStatus.NOT_FOUND);
  }

  await Task.update(data, { where: { id } });

  const allTasks = await Task.findAll();
  return allTasks;
};

const deleteTask = async (id) => {
  const task = await Task.findByPk(id);
  if (!task) {
    throw new ApiError('Not found', httpStatus.NOT_FOUND);
  }

  await Task.destroy({ where: { id } });

  const allTasks = await Task.findAll();
  return allTasks;
};

module.exports = {
  getAllTasks,
  getUserTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
