const Users = require('../users/users-model')

module.exports = function(req, res, next) {
  const id = req.params.id
  Users.findById(id)
    .then(user => {
      if (!user) {
        res.status(400).json({ message: `user id of ${id} invalid` })
      } else {
        next()
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'could not retrieve id' })
    })
}
