// 비동기 http 요청 기술
// XMLHttpRequest
// jQuery.ajax()
// fetch 라이브러리
// axios 모듈

const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        const users = response.data;
        console.log('사용자 목록: ', users);
    })
    .catch((err)=>{
        console.error("요청 에러", err);
    });