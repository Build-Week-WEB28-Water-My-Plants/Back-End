const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../config/secrets.js')

module.exports = (req, res, next) => {
  const token = req.headers.token;

  if(token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if(err) {
        res.status(401).json({ err: 'invalid token' })
      } else {
        req.user = { 
          id: decodedToken.id,
          username: decodedToken.username
        };

        next();
      }
    })
  } else {
    res.status(401).json({ err: 'you must be logged in to use this feature' })
  }
};