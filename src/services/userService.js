const userRepository = require('../repositories/userRepository');
const hashPassword = require('../utils/hashPassword');

const getAllUsers = async () => {
  return userRepository.findAll();
};
const createUser = async (username, email, password) => {
  const existingUser = await userRepository.findByUserName(username);

  if (existingUser) {
    throw new Error('Usuário já existente');
  }

  const hashedPassword = await hashPassword(password);

  const newUser = {
    username,
    email,
    userType: ['user'],
    password: hashedPassword,
  };

  await userRepository.create(newUser);

  const user = { ...newUser };
  delete user.password;

  return user;
};

const getUserById = async (userId) => {
  const user = await userRepository.findById(userId);

  if (!user) {
    return null;
  }

  const userWithOutPassword = { ...user };
  delete userWithOutPassword.password;

  return userWithOutPassword;
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
};
