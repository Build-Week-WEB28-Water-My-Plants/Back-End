const Plants = require('../plants/plants-model')

module.exports = function(req, res, next) {
  const id = req.params.id
  Plants.findById(id)
    .then(plant => {
      if (!plant) {
        res.status(400).json({ message: `plant id of ${id} invalid` })
      } else {
        next()
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'could not retrieve id' })

    })
}