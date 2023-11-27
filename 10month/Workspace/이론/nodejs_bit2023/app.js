const http = require('http');
const express = require('express');
const app = express();
// 파일 입출력
const fs = require('fs');
// 크롤링
const axios = require('axios');
const cheerio = require('cheerio');
// axios 한글 깨짐 해결 하는 모듈
const iconv = require('iconv-lite');

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use('/download', express.static("download"))

const sleep = (ms) => {
    return new Promise(resolve=>{
        setTimeout(resolve,ms)
    })
}

let imgList = [];

app.get('/axios2', async (req, res) => {
    // Promise - 콜백 헬에 빠지는것을 방지(흐름제어) - 메소드체인.then([콜백])
    // Async - 리스트 형식으로 한다. [콜백, 콜백, 콜백 ...]
    imgList = [];
    for(var j=100; j<111; j++) {
        let getUrlVal = "https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=" + j;
        await axios.get(getUrlVal, {responseType:"arraybuffer"}).then(async(response) => {
            const htmlContent = response.data;
            let htmlCMD = iconv.decode(htmlContent,"EUC-KR").toString();
            // cheerio를 이용한 DOM셀렉터
            const $ = cheerio.load(htmlCMD);
            let imgData = $('div.section_headline div.sh_thumb > div > a > img');
            for(var i=0, cnt=0; i<imgData.length; i++) {
                if(imgData[i]) {
                    let imgUrl = imgData[i].attribs.src
                    //console.log(imgUrl.split('?')[0]);
                    let imgDataUrl = imgUrl.split('?')[0];
                    //console.log(imgDataUrl);
                    axios.get(imgDataUrl, {responseType: 'arraybuffer'}).then( (imgRes)=>{
                        //console.log(imgRes.data);
                        imgList.push("/public/download/"+j+"_"+cnt+".jpg");
                        fs.writeFile("/public/download/"+j+"_"+cnt+".jpg", imgRes.data, (err, data1)=>{
                            console.log(">>> 다운로드 완료 " + cnt++);
                        });
                    });
                    await sleep(100);
                }else {
                    break;
                }
                console.log("크롤링 중!", i);
            } // end of for
            console.log("크롤링 완료!");
            //res.end("<h1>Finished</h1>");
        });
    }
    res.redirect("/axios/img_list");
});

app.get("/axios/img_list", (req, res) => {
    req.app.render('img_list', {imgList}, (err, html) => {
        if(err) throw err;
        res.end(html);
    });
});

app.get('/axios', (req, res) => {
    // Promise - 콜백 헬에 빠지는것을 방지(흐름제어) - 메소드체인.then([콜백])
    // Async - 리스트 형식으로 한다. [콜백, 콜백, 콜백 ...]
    let getUrlVal = "https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=100";
    axios.get(getUrlVal, {responseType:"arraybuffer"})
                                            .then( (response) => {
        const htmlContent = response.data
        let htmlCMD = iconv.decode(htmlContent,"EUC-KR").toString();
        // cheerio를 이용한 DOM셀렉터
        const $ = cheerio.load(htmlCMD);
        //div.cluster_text > a
        let h1Data = $('div.cluster_body div.cluster_text a').text();
        console.log(h1Data.trim());
    });
    res.end();
});



app.get('/readFile', (req, res) => {
    // 파일 읽기
    fs.readFile('./package.json', (err, data)=>{
        if(err) throw err;
        res.end(data);
        console.log(data);
        console.log(data.toString());
    });
});

const server = http.createServer(app);
server.listen(3000, ()=>{
    console.log('run on server - http://localhost:3000');
});