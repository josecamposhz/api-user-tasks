const httpStatus = require('http-status');
const taskService = require('../services/taskService');

const getAllTasks = async (req, res, next) => {
  try {
    const data = await taskService.getAllTasks();
    res.status(httpStatus.OK).send(data);
  } catch (error) {
    next(error);
  }
};

const getUserTasks = async (req, res, next) => {
  try {
    const data = await taskService.getUserTasks(req.user.id);
    res.status(httpStatus.OK).send(data);
  } catch (error) {
    next(error);
  }
};

const getTaskById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await taskService.getTaskById(id);
    res.status(httpStatus.OK).send(data);
  } catch (error) {
    next(error);
  }
};

const createTask = async (req, res, next) => {
  try {
    const data = await taskService.createTask(req.body, req.user.id);
    res.status(httpStatus.CREATED).send(data);
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const data = await taskService.updateTask(req.body, req.params.id);
    res.status(httpStatus.OK).send(data);
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const data = await taskService.deleteTask(req.params.id);
    res.status(httpStatus.OK).send(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTasks,
  getUserTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
