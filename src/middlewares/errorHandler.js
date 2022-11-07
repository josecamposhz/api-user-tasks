const httpStatus = require('http-status');

const errorHandler = (error, req, res, next) => {
  return res
    .status(error?.status || httpStatus.INTERNAL_SERVER_ERROR)
    .send({
      message: error?.message || httpStatus[httpStatus.INTERNAL_SERVER_ERROR]
    });
};

module.exports = errorHandler;
