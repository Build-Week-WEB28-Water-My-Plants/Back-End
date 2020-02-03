const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const router = require('express').Router()
const validateUserId = require('../middleware/validateUserId')
const auth = require('../middleware/authenticate')
const { jwtSecret } = require('../config/secrets')

const Users = require('../users/users-model')

router.get('/:id', validateUserId, (req, res) => {
  const id = req.params.id
  Users.findById(id)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'there was an error getting user'})
    })
})

router.post('/register', (req, res) => {
  console.log(req.body)
  let user = req.body
  const hash = bcrypt.hashSync(user.password, 10)
  user.password = hash
  console.log(user)
  Users.add(user)
    .then(saved => {
      res.status(201).json({ id: saved.id, username: saved.username})
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: 'error in server' })
    })
});

router.post('/login', (req, res) => {
  let { username, password } = req.body

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const { id } = user
        const token = signToken(user)
        res.status(200).json({ token, id })
      } else {
        res.status(401).json({ message: 'invalid credentials' })
      }
    })
    .catch(err => {
      res.status(500).json({ err: 'error in server' })
    })
});

router.put('/:id', auth, validateUserId, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Users.findById(id)
  .then(user => {
    if (user) {
      Users.update(changes, id)
      .then(updateduser => {
        res.json(updateduser);
      });
    } else {
      res.status(404).json({ message: 'Could not find user with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update user' });
  });
});

router.delete('/:id', auth, validateUserId, (req, res) => {
  const id = req.params.id;

  Users.remove(id)
  .then(deleted => {
    if (deleted) {
      res.json({ removed: `user with id ${id}` });
    } else {
      res.status(404).json({ message: 'Could not find user with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete user' });
  });
});

const signToken = user => {
  const payload = {
    sub: 'logged in token',
    id: user.id,
    username: user.username
  }

  const options = {
    expiresIn: '1d'
  }

  return jwt.sign(payload, jwtSecret, options)
}

module.exports = router;