function validateSpeciesId() {
  return function(req, res, next) {
  const id = req.params.id
    Species.findById(id)
      .then(species => {
        if (!species) {
          res.status(400).json({ message: `species id of ${id} invalid` })
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

module.exports = validateSpeciesId