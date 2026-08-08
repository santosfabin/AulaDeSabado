const { SECRET_KEY } = require('../config');
const jwt = require('jsonwebtoken');

function authController(req, res, next) {
  const session = req.cookies.session_id;

  if (!session) {
    return res.status(401).json({
      error: 'Não autorizado',
    });
  }

  jwt.verify(session, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        error: 'Token inválido',
      });
    }

    req.user = decoded;
    next();
  });
}

module.exports = authController;
