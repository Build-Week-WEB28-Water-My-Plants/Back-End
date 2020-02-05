const Users = require('./users-model.js');
const db = require('../../database/db-config');

describe('users model', function() {
  
  describe('test environment', function() {
    it('should use the testing environment', function() {
      expect(process.env.DB_ENV).toBe('testing');
    })
  })
  
  describe('add(user)', function() {

    it('adds the new user to the db', async function() {
      // call add passing a user
      await Users.add({ username: 'sam', password: 'password', phone_number: '(307)123-4567' });
      // open the db and see that the user is there
      const users = await db('users');

      expect(users).toHaveLength(4);
    })
  })

  describe('remove(user)', function() {
    it('removes the new users from the db', async function() {
      // call add passing a user
      await Users.remove(4);

      // open the db and see that the user is there
      const users = await db('users');

      expect(users).toHaveLength(3);
    })
  })
})
