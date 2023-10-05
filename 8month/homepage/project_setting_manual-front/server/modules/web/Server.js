/**
 * @author : 하석형
 * @since : 2023.08.24
 * @dscription : Express 라이브러리 활용 HTTP Web Server 모듈입니다.
 */
const { BASE_DIR, PORT, API_SERVER_HOST } = require('../../../Global');
const Logger = require('../log/Logger');//Logger(필수)

const express = require('express');
const webServer = express();
const expressProxy = require('express-http-proxy');

//파일 시스템 관련 라이브러리
const FS = require('fs');
//stream: 특정 자원을 Streaming 하기 위한 라이브러리 => Transform: Streaming 중인 자원의 Data에 Data 수정 및 추가를 지원해주는 객체
const Transform = require('stream').Transform;
//Streaming 중인 자원에 새로운 데이터를 stream 공간에 추가하기 위한 라이브러리
const newLineStream = require('new-line');

/**
 * @author : 하석형
 * @since : 2023.08.24
 * @dscription : HTTP Server start
 */
webServer.listen(PORT, function () {
    Logger.logging(`★★★ Node.js를 활용한 Web Server 구동(Port:${PORT}) ★★★`);
})

/**
 * @author : 하석형
 * @since : 2023.08.24
 * @dscription : Intercepter 역할을 하는 미들웨어 기능
 */
webServer.use(function (request, response, next) {
    let ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress;
    Logger.logging(`[HTTP] ${request.url} (Method: ${request.method}, IP: ${ip})`);
    next();
});



/**
 * @author : 하석형
 * @since : 2023.08.24
 * @dscription : ROOT URL -> index.html
 */
webServer.get('/', function (request, response) {
    //response.sendFile을 통한 HTTP html reponse (html내용 Streaming)
    response.sendFile(`${BASE_DIR}/client/views/index.html`);
})

/**
 * @author : 하석형
 * @since : 2023.08.24
 * @dscription : 화면요청 URL 처리
 */
webServer.get('*.page', function (request, response, next) {
    //index.html 내용을 직접 Streaming하여 Response, Streaming 중간에 내용 수정
    //수정 내용 : URL 요청이 아닌, 브라우저에 표시된 URL만 변경하여, 해당하는 URL PATH의 Vue Component를 routing하기 위함
    const StreamTransform = new Transform();
    StreamTransform._transform = function (data, encoding, done) {
        let fileContent = data.toString();
        let replaceBeforeContent = `<script id="app-start-vue-page">const APP_USER_HTTP_REQUEST_URL = '/';</script>`;
        let replaceAfterContent = `<script id="app-start-vue-page">const APP_USER_HTTP_REQUEST_URL = '${request.params['0']}.page';</script>`;
        fileContent.replace(replaceBeforeContent, replaceAfterContent);
        this.push(fileContent);
        done();
    }
    //Streaming 진행
    FS.createReadStream(`${BASE_DIR}/client/views/index.html`).pipe(newLineStream()).pipe(StreamTransform).pipe(response);
})

/**
 * @author : 하석형
 * @since : 2023.08.24
 * @dscription : REST API 서버에 데이터 요청 보내기(Proxy)
 */
webServer.use('*.zz', expressProxy(API_SERVER_HOST, {
    proxyReqPathResolver: function (request) {
        console.log('request : ', request.url, request.params[0], request.params[1]);
        if ( request.url != "/" ) {
            return `${request.params['0']}.zz${request.url}`;    
        }
        return `${request.params['0']}.zz`;
    }
}));

/**
 * @author : 하석형
 * @since : 2023.08.24
 * @dscription : ROOT URL, Router's, 화면요청 URL 등.. 이 외 나머지 정적 자원에 대한 처리 기능
 */
webServer.get('*.*', function (request, response, next) {
    response.sendFile(`${BASE_DIR}${request.params['0']}.${request.params['1']}`);
})

/**
 * @author : 하석형
 * @since : 2023.08.24
 * @dscription : Global Error Handler (*맨 마지막에 적용해야됨)
 */
webServer.use(function (error, request, response, next) {
    const errorCode = !error.statusCode ? 500 : error.statusCode;
    response.status(errorCode).send('에러가 발생하였습니다. 관리자에게 문의바랍니다.');
    let message = `[Error:${errorCode}] ${request.url}/n ${error.stack}/n`;
    Logger.logging(message);
    //next();
})