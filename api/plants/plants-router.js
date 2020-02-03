const router = require('express').Router()
const auth = require('../middleware/authenticate')
const Plants = require('./plants-model')
const validateUserId = require('../middleware/validateUserId')
const validateSpeciesId = require('../middleware/validateSpeciesId')
const validatePlantId = require('../middleware/validatePlantId')

// get plants by user_id
router.get('/user/:id', auth, validateUserId, (req, res) => {
  const id = req.params.id
  Plants.findByUser(id)
  .then(plants => {
        res.status(200).json(plants)
      })
      .catch(err => {
        res.status(500).json({ err: 'error getting plants' })
      })
})

// get plants by species_id
router.get('/species/:id', auth, validateSpeciesId, (req, res) => {
  const id = req.params.id
  Plants.findBySpecies(id)
    .then(plants => {
      res.status(200).json(plants)
    })
    .catch(err => {
      res.status(500).json({ err: 'error getting plants' })
    })
})

// create plant
router.post('/', auth, (req, res) => {
  const newPlant = req.body
  Plants.add(newPlant)
    .then(plant => {
      res.status(201).json(plant)
    })
    .catch(err => {
      res.status(500).json({ err: 'error creating plant' })
    })
})

// create species
router.post('/species', (req, res) => {
  const newSpecies = res.body
  Plants.addSpecies(newSpecies)
    .then(species => {
      res.status(201).json(species)
    })
    .catch(err => {
      res.status(500).json({ err: 'error creating species' })
    })
})

// update plant
router.put('/plants/:id', auth, validatePlantId, (req, res) => {
  const id = req.params.id
  const changes = req.body
  Plants.update(changes, id)
    .then(plant => {
      res.status(200).json(plant)
    })
    .catch(err => {
      res.status(500).json({ err: 'error updating plant' })
    })
})

// delete plant
router.delete('/plants/:id', auth, validatePlantId, (req, res) => {
  const id = req.params.id
  Plants.remove(id)
    .then(deleted => {
      res.status(200).json({ message: `plant with id ${id} deleted` })
    })
    .catch(err => {
      res.status(500).json({ err: `problem deleting plant` })
    })
})

module.exports = router