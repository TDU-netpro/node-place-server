const PORT = 3000

const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const placeRouter = require('./routes/places')
const allowCrossDomain = require('./middlewares/allowCrossDomain')
const makeWebsocket = require('./middlewares/websocket')

const http = require('http')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(allowCrossDomain)

const server = http.createServer(app)

app.use(makeWebsocket(server))
app.use('/place', placeRouter)

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
