const http = require('http');
const express = require('express');
const app = express();
// npm i socket.io -S
const socketio = require('socket.io');
const cors = require('cors');
const path = require('path');

app.set('port', 3000);
app.set(express.json());
app.set(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, "public")));


const server = http.createServer(app);
const io = socketio(server);
server.listen(app.get('port'), ()=>{
    console.log('Socket.io 서버 실행 중 http://localhost:'+ app.get('port'))
});

io.sockets.on('connection', (socket)=> {
  console.log("all socket connection...")
})

var chat = io.of('/chat').on('connection', (socket)=> {
  console.log("chat conneciton ...")
  socket.emit('a message', {hello: 'chat world'})
})

var news = io.of('/news').on('connection', (socket)=> {
  console.log("news conneciton ...")
  socket.emit('item', {hello: 'news world'})
})