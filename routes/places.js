const express = require('express')
const router = express.Router()

const CANVAS_SIZE = 1000

router.get('/', function (req, res, next) {
  res.send(req.app.get('grids') || {})
})

const checkRange = (x) => 0 <= x && x < CANVAS_SIZE

router.put('/', function (req, res, next) {
  const { x, y, color } = req.query

  // サーバー側で受け取った値の確認
  console.log(x, y, color)

  // バリデーション
  if (!(checkRange(x) && checkRange(y) && typeof color === 'string')) {
    res.send('invalid params').end()
  }

  const grids = req.app.get('grids') || {}
  if (!grids[x]) grids[x] = {}
  grids[x][y] = color

  // データ更新
  req.app.set('grids', grids)

  // socket.io emit
  req.io.emit('place', { x, y, color })

  // レスポンス
  res.send('received')
})

module.exports = router
