const express = require('express')
const cors = require('cors')
// const helmet = require('helmet')

const usersRouter = require('./users/users-router.js')
const plantsRouter = require('./plants/plants-router.js')
const logger = require('./middleware/logger')

const server = express()

server.use(express.json())
// server.use(helmet())
server.use(cors())
server.use(logger)

server.use('/api/users', usersRouter)
server.use('/api/plants', plantsRouter)

server.get('/', (req, res) => {
    res.status(200).json({ message: 'server up and running' })
})

server.get('/api', (req, res) => {
  res.status(200).json({ message: 'server up and running' })
})

module.exports = server