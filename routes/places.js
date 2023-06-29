var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
  res.send(req.app.get('grids') || {})
})
const CANVAS_SIZE = 100

router.put('/', function (req, res, next) {
  const { x, y, color } = req.query
  console.log(x, y, color)
  if (
    !(
      0 <= x &&
      x < CANVAS_SIZE &&
      0 <= y &&
      y < CANVAS_SIZE &&
      typeof color === 'string'
    )
  ) {
    res.send('invalid params').end()
  }
  const grids = req.app.get('grids') || {}
  if (!grids[x]) grids[x] = {}
  grids[x][y] = color
  req.app.set('grids', grids)

  res.send('received')
})

module.exports = router
