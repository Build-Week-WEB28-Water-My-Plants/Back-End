const Plants = require('./plants-model.js');
const db = require('../../database/db-config');

describe('plants model', function() {
  
  
  describe('test environment', function() {
    it('should use the testing environment', function() {
      expect(process.env.DB_ENV).toBe('testing');
    })
  })
  
  describe('add(plant)', function() {

    it('adds the new plant to the db', async function() {
      // call add passing a plant
      await Plants.add(
        { 
        nickname : 'Ted',
        species_id: 1,
        location: 'living room',
        user_id: 1, 
        }
      );

      // open the db and see that the plant is there
      const plants = await db('plants');

      expect(plants).toHaveLength(5);
    })
  })
    
  describe('remove(plant)', function() {
    it('removes the new plants from the db', async function() {
      // call remove passing a plant
      await Plants.remove(5);

      // open the db and see that the plant is there
      const plants = await db('plants');

      expect(plants).toHaveLength(4);
    })
  })
})


describe('species model', function() {
  
  
  describe('test environment', function() {
    it('should use the testing environment', function() {
      expect(process.env.DB_ENV).toBe('testing');
    })
  })
  
  describe('addSpecies()', function() {

    it('adds the new species to the db', async function() {
      // call addSpecies passing a species
      await Plants.addSpecies(
        { 
          common_name: 'small test plant',
          scientific_name: 'plantus testius minora',
          h2o_frequency: 3.5,
          image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Ficus_benjamina2.jpg/800px-Ficus_benjamina2.jpg',
          image_binary: '1010110101'
        }
      );

      // open the db and see that the species is there
      const species = await db('species');

      expect(species).toHaveLength(4);
    })
  })
    
  describe('removeSpecies()', function() {
    it('removes the new species from the db', async function() {
      // call remove passing a species
      await Plants.removeSpecies(4);

      // open the db and see that the species is there
      const species = await db('species');

      expect(species).toHaveLength(3);
    })
  })
})