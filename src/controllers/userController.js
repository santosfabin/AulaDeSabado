const userServices = require('../services/userService');

const getAllUsers = async (req, res) => {
  try {
    const users = await userServices.getAllUsers();
    return res.json(users);
  } catch (err) {
    console.error('DEBUG erro ao buscar usuários:', err);
    return res.status(404).json({ error: 'Erro ao buscar usuários', err });
  }
};

const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await userServices.createUser(username, email, password);

    return res.status(201).json(user);
  } catch (err) {
    if (err.message === 'Usuário já existente') {
      return res.status(404).json({ error: 'Usuário já existente' });
    }
    return res.status(500).json({
      error: 'Erro ao criar usuário',
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await userServices.getUserById(req.params.id);

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    return res.json({ user });
  } catch (err) {
    return res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
};