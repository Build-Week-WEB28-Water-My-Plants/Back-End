
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('plants').del()
    .then(function () {
      // Inserts seed entries
      return knex('plants').insert([
        {
          id: 1,
          nickname : 'Steve',
          species_id: 1,
          location: 'living room',
          user_id: 1,
          created_at: Date(Date.now()).toString()
        },
        {
          id: 2,
          nickname : 'Howard',
          species_id: 2,
          location: 'bedroom',
          user_id: 1,
          created_at: Date(Date.now()).toString()
        },
        {
          id: 3,
          nickname : 'Lucille',
          species_id: 3,
          location: 'kitchen',
          user_id: 2,
          created_at: Date(Date.now()).toString()
        },
        {
          id: 4,
          nickname : 'Betty',
          species_id: 3,
          location: 'living room',
          user_id: 3,
          created_at: Date(Date.now())
        },
      ]);
    });
};
