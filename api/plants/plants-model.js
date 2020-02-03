const db = require('../../database/db-config')

module.exports = {
  findById,
  findByUser,
  findBySpecies,
  add,
  remove,
  update
}

function findById(id) {
  return db('plants as p')
    .where('p.id', id)
    .join('species as s', 'p.species_id', 's.id')
    .select('*')
}

function findByUser(user_id) {
  return db('plants as p')
    .where('p.user_id', user_id)
    .join('species as s', 'p.species_id', 's.id')
    .select('*')
}

function findBySpecies(species_id) {
  return db('plants')
    .where('species_id', species_id)
}

function add(plant) {
  return db('plants')
    .insert(plant)
    .then(([user_id]) => {
      return findByUser(user_id)
    })
}

function update(changes, id) {
  return db('plants')
    .where('id', id)
    .update(changes)
    .then(() => {
      return findById(id)
    })
}

function remove(id) {
  return db('plants')
    .where('id', id)
    .del()
}