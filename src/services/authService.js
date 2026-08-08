const userRepository = require('../repositories/userRepository');
const comparePassword = require('../utils/comparePassword');

const autenticate = async (username, password) => {
  const foundUser = await userRepository.findByUserName(username);

  if (!foundUser) {
    return null;
  }

  const match = await comparePassword(password, foundUser.password);

  if (!match) {
    return null;
  }

  return {
    username: foundUser.username,
    name: foundUser.name,
    userType: foundUser.userType,
  };
};

module.exports = {
  autenticate
}
