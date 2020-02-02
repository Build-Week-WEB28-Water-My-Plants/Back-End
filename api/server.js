const express = require('express')

const usersRouter = require('./users/users-router.js')
const plantsRouter = require('./plants/plants-router.js')

const server = express()

server.use(express.json())
server.use('/api/users', usersRouter)
server.use('/api/plants', plantsRouter)

module.exports = server