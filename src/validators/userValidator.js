const validateCreateUser = (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ error: 'Nome, email e senha são obrigatórios' });
  }

  next();
};

module.exports = { validateCreateUser };
