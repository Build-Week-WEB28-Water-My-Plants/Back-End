function validateUserId() {
  return function(req, res, next) {
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
}

module.exports = validateUserId