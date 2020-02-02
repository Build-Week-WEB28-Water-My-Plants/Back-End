
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
      .string('species', 255)
      .notNullable()
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
}

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('plants')
    .dropTableIfExists('users')
}
