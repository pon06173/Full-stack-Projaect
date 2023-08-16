const http = require('http')
const express = require('express')
const app = express()
// npm i socket.io -S
const socketio = require('socket.io')
const cors = require('cors')
const path = require('path')

app.set('port', 3000)
app.set(express.json())
app.set(express.urlencoded({extends:false}))
app.use(express.static(path.join(__dirname, "public")))


const server = http.createServer(app)//소켓io 넣을때 같이 넣는다
const io = socketio(server)
server.listen(app.get('port'),()=>{
  console.log('Socket.io 서버 실행 중 http://localhost:' + app.get('port'))
})


io.sockets.on('connection', (socket)=>{
  console.log("클라이언트 접속 중")
  console.
})