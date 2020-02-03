const db = require('../database/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove
};

function find() {
  return db('users').select('id', 'username');
}

function findBy(filter) {
  return db('users').where(filter);
}

function add(user) {
  return db('users').insert(user).then(([id]) => {
    return findById(id)
  })
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

function update(changes, id) {
  return db('users')
    .where('id', id)
    .update(changes)
    .then(() => {
      return findById(id)
    })
}

function remove(id) {
  return db('users')
    .where('id', id)
    .del()
}