const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).send('El token es requerido');

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send('Token invalido');
    }
    req.user = decoded;
    next();
  });
};

module.exports = auth;
