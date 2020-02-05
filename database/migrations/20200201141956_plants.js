
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
      .string('phone_number')
      .notNullable()
      .unique()
      .index()
  })
  
  .createTable('species', species => {
    species
      .increments()
      .unique()
    species
      .string('common_name', 255)
      .notNullable()
      .unique()
      .index()
    species
      .string('scientific_name', 255)
      .notNullable()
      .unique()
      .index()
    species
      .integer('h2o_frequency')
      .notNullable()
      .unsigned()
    species
      .string('image_url')
    species
      .text('image_binary')
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
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    plants
      .string('location', 255)
    plants
      .integer('user_id')
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    plants
      .string('created')
  })

}

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('plants')
    .dropTableIfExists('species')
    .dropTableIfExists('users')
}