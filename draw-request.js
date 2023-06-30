const fetch = require('node-fetch')

const host = 'https://dccb-133-14-221-203.ngrok-free.app'

const maekUrl = (x, y, color) => `${host}/place?x=${x}&y=${y}&color=${color}`

const options = { method: 'PUT' }

for (let i = 0; i < 200; i++) {
  const color = 'blue'
  fetch(maekUrl(i, i, color), options)
}
