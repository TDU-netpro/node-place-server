const socketio = require('socket.io')

const makeWebsocket = (server) => {
  const io = socketio(server)
  io.on('connection', (socket) => {
    console.log('a user connected')

    socket.on('my-event-a', (message) => {
      console.log(`from client. ${message}`)
    })
  })

  return (req, res, next) => {
    req.io = io
    next()
  }
}

module.exports = makeWebsocket
