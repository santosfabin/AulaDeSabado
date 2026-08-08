const db = require('../database/db');

const findAll = () => {
  return new Promise((resolve, reject) => {
    db.readAllData((err, data) => {
    if (err) {
      return reject(err);
    }

    const users = data.map(({ key, value }) => ({
      id: key,
      ...JSON.parse(value),
    }));

    resolve(users);
    });
  });
};

const findById = (id) => {
  return new Promise((resolve, reject) => {
    db.get(id, (err, data) => {
      if (err) {
        if (err.message && err.message.includes('NotFound')) {
          return resolve(null);
        }

        return reject(err);
      }

      resolve(JSON.parse(data));
    });
  });
};

const findByUserName = (username) => {
  return new Promise((resolve, reject) => {
    db.get(username, (err, data) => {
      if (err) {
        if (err.message && err.message.includes('NotFound')) {
          return resolve(null);
        }

        return reject(err);
      }

      resolve(JSON.parse(data));
    });
  });
};

const create = (user) => {
  return new Promise((resolve, reject) => {
    db.put(user.username, JSON.stringify(user), (err) => {
      if (err) {
        return reject(err);
      }

      resolve(user);
    });
  });
};

module.exports = {
  findAll,
  findById,
  findByUserName,
  create,
};
