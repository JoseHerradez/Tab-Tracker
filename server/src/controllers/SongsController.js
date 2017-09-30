const {Song} = require('../models')

module.exports = {
  post (req, res) {
    Song.create(req.body)
      .then(song => {
        res.send(song.toJSON())
      })
      .catch(() => {
        res.status(500).send({
          error: 'An error has occured trying to create the song.'
        })
      })
  },
  index (req, res) {
    Song.findAll({
      limit: 10
    })
      .then(songs => {
        res.send(songs)
      })
      .catch(() => {
        res.status(500).send({
          error: 'An error has occured trying to fetch the songs.'
        })
      })
  },
  show (req, res) {
    Song.findById(req.params.songId)
      .then(song => {
        res.send(song)
      })
      .catch(() => {
        res.status(500).send({
          error: 'An error has occured trying to fetch the song with id ' + req.params.songId + '.'
        })
      })
  },
  put (req, res) {
    Song.update(req.body, {
      where: {
        id: req.params.songId
      }
    })
      .then(song => {
        res.send(req.body)
      })
      .catch(() => {
        res.status(500).send({
          error: 'An error has occured trying to update the song.'
        })
      })
  }
}
