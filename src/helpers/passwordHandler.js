const bcrypt = require('bcryptjs');

const encrypt = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const compare = async (password, hashPassword) => {
  return await bcrypt.compare(password, hashPassword);
};

module.exports = { compare, encrypt };
