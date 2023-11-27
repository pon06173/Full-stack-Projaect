const express = require('express');
const app = express();
const http = require('http');
const formidable = require('formidable');
const fs = require('fs');
var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// 포트 
app.set('port', 5000);
// 뷰엔진 템플릿 설정
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// 정적 파일 제공 설정
app.use(express.static('public'));

// 라우트 설정
let memberList = [
    {no:1, name:"김길동2", dept:"영업", position:"과장", email:"gildong@saram.com", photo:"/upload/img01.png"},
    {no:2, name:"김길순2", dept:"관리", position:"사원", email:"bbbb@saram.com", photo:"/upload/img02.jpg"},
    {no:3, name:"박길동2", dept:"관리", position:"부장", email:"aaaa@saram.com", photo:"/upload/img01.png"},
    {no:4, name:"이순신2", dept:"사업", position:"책임", email:"cccc@saram.com", photo:"/upload/img01.png"},
    {no:5, name:"일지매2", dept:"영업", position:"과장", email:"test01@saram.com", photo:"/upload/img01.png"}
];

let noCnt = 6;

app.get('/member/list', (req, res) => {
    res.send(memberList);
});

app.post('/member/input', (req, res) => {
    var form =  new formidable.IncomingForm();
    form.parse(req, async function (err, fields, files) {
        //console.log('1 >>> PARSE!', fields);
        //console.log(">>> filetoupload.length : ", files.filetoupload.length);
        fileList = [];
        for(var i=0; i<files.filetoupload.length; i++) {
            var oldpath = files.filetoupload[i].filepath;
            //var newpath = 'C:/Users/User/upload/' + files.filetoupload[i].originalFilename;
            var filePath = '/upload/' + files.filetoupload[i].originalFilename;
            var newpath = __dirname + '/public' + filePath;
            // filelist에서 사용 될 이미지 목록
            //fileList.push(filePath);
            
            // Error: EXDEV: cross-device link not permitted
            // 이동이 아닌 복사하고 이전 파일 제거.
            await fs.copyFile(oldpath, newpath, function (err) {
                if (err) throw err;
                //res.write('File uploaded and moved!');
                //res.end();
            });
        } // end of for
        //console.log(">>>> fields : ", fields);
        memberList.push({
            no:noCnt++, 
            name:fields.name[0], 
            dept:fields.dept[0], 
            position:fields.position[0], 
            email:fields.email[0], 
            photo:filePath
        });
        res.redirect("/member/list");
    });
});

// 서버 실행
const server = http.createServer(app);
server.listen(app.get('port'), () => {
    console.log("Server is running at http://127.0.0.1:"+ app.get('port'));
});


// 참고 : 구글 검색 "formidable npm"
// https://www.npmjs.com/package/formidable