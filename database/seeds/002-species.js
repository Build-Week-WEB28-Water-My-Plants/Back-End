
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('species').del()
    .then(function () {
      // Inserts seed entries
      return knex('species').insert([
        {
          id: 1,
          common_name: 'ficus',
          scientific_name: 'ficus benjamina',
          h2o_frequency: 3.5,
          image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Ficus_benjamina2.jpg/800px-Ficus_benjamina2.jpg'
        },
        {
          id: 2,
          common_name: 'peace lily',
          scientific_name: 'spathiphyllum',
          h2o_frequency: 7,
          image_url: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjpxMXyw7TnAhWvHzQIHQpYAiIQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.amazon.in%2FCappl-Peace-Plant-Spathiphyllum-Green%2Fdp%2FB01NBVBIDF&psig=AOvVaw0ZvgxbeG_pgoRlxhP-bXMg&ust=1580790028407708'
        },
        {
          id: 3,
          common_name: 'orchid',
          scientific_name: 'orchidaceae',
          h2o_frequency: 4,
          image_url: 'https://www.ikea.com/gb/en/images/products/orchidaceae-potted-plant__0657275_PE709722_S5.JPG?f=s'
        },
      ]);
    });
};
