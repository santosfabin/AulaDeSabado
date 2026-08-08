const authService = require('../services/authService');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');

const getLogin = async (req, res) => {
  const user = req.user;
  return res.json(user);
};

const autenticade = async (req, res) => {
  const { username, password } = req.body;
  const errorMsg = 'Usuário ou senha inválidos';

  if (!username || !password) {
    res.cookie('session_id', '', { expires: new Date(0) });
    return res.status(400).json({ error: errorMsg });
  }

  try {
    const user = await authService.autenticate(username, password);

    if (!user) {
      res.cookie('session_id', '', { expires: new Date(0) });
      return res.status(400).json({ error: errorMsg });
    }

    const sessionToken = jwt.sign(user, SECRET_KEY);

    res.cookie('session_id', sessionToken, { maxAge: 3600000 });
    return res.json(user);
  } catch (error) {
    console.error('DEBUG erro no login:', error);
    res.cookie('session_id', '', { expires: new Date(0) });
    return res.status(400).json({ error: errorMsg });
  }
};

const logout = async (req, res) => {
  res.cookie('session_id', '', { expires: new Date(0) });
  return res.json({ message: 'Logout realizado com sucesso.' });
};

module.exports = {
  getLogin,
  autenticade,
  logout,
};
