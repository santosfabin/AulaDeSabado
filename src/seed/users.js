const userRepository = require('../repositories/userRepository');
const hashPassword = require('../utils/hashPassword');

const createDefaultsUsers = async () => {
  const passwordAdmin = await hashPassword('admin123');
  const passwordUser = await hashPassword('senha123');

  const users = [
    {
      username: 'admin',
      name: 'admin',
      email: 'admin@gmail.com',
      password: passwordAdmin,
      userType: ['admin', 'user'],
    },
    {
      username: 'usuer',
      name: 'Usuário comum legal',
      email: 'usuario@gmail.com',
      password: passwordUser,
      userType: ['user'],
    },
  ];

  for (const user of users) {
    try {
      const existingUser = await userRepository.findByUserName(user.username);

      if (!existingUser) {
        await userRepository.create(user);
      }
    } catch (err) {
      console.error('Erro ao criar usuário default: ', err);
    }
  }
};

module.exports = { createDefaultsUsers };
