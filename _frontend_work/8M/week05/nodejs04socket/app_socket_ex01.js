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

//서버측에서는 connection
//클라이언트에서는 connect
io.sockets.on('connection', (socket)=> {
    console.log("클라이언트 접속 중 : ", socket.rooms);
    socket.emit('welcome','welcome to server >' + socket.id)

    socket.on('hello', function(message) {
      console.log("from client : ", message)
    })
    
    socket.on('message', function(message) {
      console.log("from client : ", message)
      //client socket 으로 부터 받은 메세지를 바로 돌려준다.(에코)  
      // socket.emit('return message', message)//하나 보낼때
      
      // 모든 접속 된 소켓에 한꺼번에 뿌리는것(브로드케스트)
      io.sockets.emit('return message', message)//다중 보낼때
    })
});