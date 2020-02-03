
exports.up = function(knex) {
  return knex.schema
  .createTable('users', users => {
    users
      .increments()
    users
      .string('username', 255)
      .notNullable()
      .unique()
      .index()
    users
      .string('password', 255)
      .notNullable()
    users
      .string('phone_number', 255)
      .notNullable()
      .unique()
      .index()
  })

  .createTable('plants', plants => {
    plants
      .increments()
    plants
      .string('nickname', 255)
      .notNullable()
      .index()
    plants
      .integer('species_id')
      .notNullable()
      .references('id')
      .inTable('species')
      .index()
    plants
      .integer('h2o_frequency')
      .notNullable()
      .unsigned()
    plants
      .string('image_url')
    plants
      .string('location', 255)
    plants
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
  })

  .createTable('species', species => {
    species
      .increments()
    species
      .string('common_name', 255)
      .notNullable()
      .unique()
      .filter()
    species
      .string('scientific_name', 255)
      .notNullable()
      .unique()
      .filter()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('species')
    .dropTableIfExists('plants')
    .dropTableIfExists('users')
}