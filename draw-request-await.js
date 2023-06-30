const fetch = require('node-fetch')

const host = 'http://localhost:3000'

const maekUrl = (x, y, color) => `${host}/place?x=${x}&y=${y}&color=${color}`

const options = { method: 'PUT' }
const sleep = (msec) => new Promise((resolve) => setTimeout(resolve, msec))
const color = 'red'

async function main() {
  for (let i = 0; i < 200; i++) {
    await fetch(maekUrl(i, 20, color), options)
    await sleep(1000)
  }
}

main()
