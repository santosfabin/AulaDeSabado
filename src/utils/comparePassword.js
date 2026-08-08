const bcrypt = require('bcrypt');

async function comparePassword(password, hashedPassword) {
  try {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
  } catch (err) {
    throw new Error('Erro ao comparar a senha: ' + err);
  }
}

module.exports = comparePassword;
