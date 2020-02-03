
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'user1', password: 'password', phone_number: '(123)456-7890'},
        {id: 2, username: 'user2', password: 'password', phone_number: '(098)765-4321'},
        {id: 3, username: 'user3', password: 'password', phone_number: '(800)123-4567'}
      ]);
    });
};