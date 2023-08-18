// app.js
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

// {'hong':socket, 'kim':socket ...}
const userMap = {};

io.sockets.on('connection', (socket)=>{
    //console.log("socket connection : ", socket.id);
    socket.on('login', (data)=>{
        //console.log(data);
        socket.userId = data.userId;
        socket.userName = data.userName;
        userMap[data.userId] = socket;
        //console.log(userArr[data.userId].id);
        //console.log(io.sockets.to(userArr[data.userId].id));
        //io.sockets.to(socket.id).emit('test', {hello:'world'});
        //io.sockets.to(userArr[data.userId].id).emit('test', {hello:'world'});
        //userArr[data.userId].emit('test', {hello:'world'});

        let userIdArr = Object.keys(userMap);
        let userList = [];
        userIdArr.forEach((key) => {
            userList.push({
                userId : key,
                userName: userMap[key].userName
            });
        });
        io.sockets.emit('welcomeMsg', {
            message: data.userName + "님이 입장 했습니다.",
            userList: userList
        });
    });

    socket.on('message', (msgData)=>{
        // msgData에는 내는 사람, 받는 사람, 메세지, 날짜, 시간 ...
        // 받는 사람이 전체(All)일 경우 브로드케스트로 ..
        // 그 외에는 1:1로 채팅 되도록 한다.
        if(msgData.recepient === 'All') {
            msgData.cenderName = userMap[msgData.sender].userName;
            msgData.recepientName = 'All';
            io.sockets.emit('message', msgData);
            // socket.broadcast.emit('message', msgData);
        } else {
            // 1:1 채팅 기능
            if (userMap[msgData.recepient]) {
                msgData.cenderName = userMap[msgData.sender].userName;
                msgData.recepientName = userMap[msgData.recepient].userName;
                userMap[msgData.recepient].emit('message', msgData);
            } else {
                console.log(`User ${msgData.recepient} not found.`);
            //io.sockets.to(userArr[msgData.recepient].id).emit('test', {hello:'world'});
        }}
    });

    socket.on('disconnecting', function() {
        console.log("disconnect 되었다.", socket.id);
        let userIdArr = Object.keys(userMap);
        let userList = [];
        let currentUser = "";
        userIdArr.forEach((key) => {
            if(userMap[key].id === socket.id) {
                currentUser = userMap[key].userName;
            }
            if(userMap[key].id !== socket.id) {
                userList.push({
                    userId : key,
                    userName: userMap[key].userName
                });
            }
        });
        io.sockets.emit('welcomeMsg', {
            message: currentUser + "님이 퇴장 했습니다.",
            userList: userList
        });
    });
});