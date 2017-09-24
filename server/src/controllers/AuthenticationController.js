const {User} = require('../models')

module.exports = {
  register (req, res) {
    User.create(req.body)
      .then((user) => {
        res.send(user.toJSON())
      })
      .catch(() => {
        res.status(400).send({
          error: 'This email address is already in use.'
        })
      })
  }
}
