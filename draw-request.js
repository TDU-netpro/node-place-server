const fetch = require('node-fetch')

const host = 'http://localhost:3000'

const maekUrl = (x, y, color) => `${host}/place?x=${x}&y=${y}&color=${color}`

const options = { method: 'PUT' }

for (let i = 0; i < 200; i++) {
  const color = 'orange'
  fetch(maekUrl(i, i, color), options).catch((err) =>
    console.error('error:' + err)
  )
}
