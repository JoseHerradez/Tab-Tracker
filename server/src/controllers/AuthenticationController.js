const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  register (req, res) {
    User.create(req.body)
      .then(user => {
        res.send(user.toJSON())
      })
      .catch(() => {
        res.status(400).send({
          error: 'This email address is already in use.'
        })
      })
  },
  login (req, res) {
    const {email, password} = req.body

    User
      .findOne({
        where: {
          email: email
        }
      })
      .then(user => {
        if (!user) {
          return res.status(403).send({
            error: 'The login information was incorrect.'
          })
        }

        const isPasswordValid = user.comparePassword(password)
        if (!isPasswordValid) {
          return res.status(403).send({
            error: 'The login information was incorrect.'
          })
        }

        const userJson = user.toJSON()
        res.send({
          user: userJson,
          token: jwtSignUser(userJson)
        })
      })
      .catch(() => {
        res.status(500).send({
          error: 'An error has occured trying to log in.'
        })
      })
  }
}
