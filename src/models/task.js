'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      Task.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'userId'
      });
    }
  }
  Task.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      status: DataTypes.ENUM(['To do', 'In progress', 'Done'])
    },
    {
      sequelize,
      modelName: 'Task'
    }
  );
  return Task;
};
