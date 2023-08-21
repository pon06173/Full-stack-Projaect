const express = require("express");
const app = express();
const http = require("http");
const formidable = require("formidable");
const fs = require("fs");
var bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// 포트
app.set("port", 5000);
// 뷰엔진 템플릿 설정
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// 정적 파일 제공 설정
app.use(express.static("public"));

// 라우트 설정
let memberList = [
  {
    no: 111,
    name: "김길동2",
    dept: "영업",
    position: "과장",
    email: "gildong@saram.com",
    photo: "/upload/img01.jpg",
  },
  {
    no: 110,
    name: "김길순2",
    dept: "관리",
    position: "사원",
    email: "bbbb@saram.com",
    photo: "/upload/img02.jpg",
  },
  {
    no: 99,
    name: "박길동2",
    dept: "관리",
    position: "부장",
    email: "aaaa@saram.com",
    photo: "/upload/img01.jpg",
  },
];

let noCnt = 6;

app.get("/member/list", (req, res) => {
  res.send(memberList);
});

app.get("/member/delete/:no", (req, res) => {
  //console.log('/member/delete/:no =>', Number(req.params.no));
  let idx = memberList.findIndex((member) => {
    return member.no === Number(req.params.no);
  });
  // no와 일치하는 항목 splice(idx, 1) 한다.
  memberList.splice(idx, 1);
  res.send(memberList);
});

app.get("/member/delete", (req, res) => {
  if (req.query.no) {
    if (typeof req.query.no === typeof []) {
      console.log(">>> ", req.query.no);
      req.query.no.forEach((no) => {
        let idx = memberList.findIndex((member) => {
          return member.no === Number(no);
        });
        // no와 일치하는 항목 splice(idx, 1) 한다.
        memberList.splice(idx, 1);
      });
    } else {
      console.log(req.query.no);
      let idx = memberList.findIndex((member) => {
        return member.no === Number(req.query.no);
      });
      // no와 일치하는 항목 splice(idx, 1) 한다.
      memberList.splice(idx, 1);
    }
  }
  res.send(memberList);
});

app.get("/member/update/:no", (req, res) => {
  //console.log('/member/delete/:no =>', Number(req.params.no));
  let idx = memberList.findIndex((member) => {
    return member.no === Number(req.params.no);
  });
  // no와 일치하는 항목 수정.
  var newMemberData = req.query;
  newMemberData.no = Number(req.params.no);
  newMemberData.photo = memberList[idx].photo;
  console.log(newMemberData);
  memberList[idx] = newMemberData;

  res.send(memberList);
});

app.post("/member/input", (req, res) => {
  var form = new formidable.IncomingForm();
  form.parse(req, async function (err, fields, files) {
    //console.log('1 >>> PARSE!', fields);
    //console.log(">>> filetoupload.length : ", files.filetoupload.length);
    fileList = [];
    for (var i = 0; i < files.filetoupload.length; i++) {
      var oldpath = files.filetoupload[i].filepath;
      //var newpath = 'C:/Users/User/upload/' + files.filetoupload[i].originalFilename;
      var filePath = "/upload/" + files.filetoupload[i].originalFilename;
      var newpath = __dirname + "/public" + filePath;
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
      no: noCnt++,
      name: fields.name[0],
      dept: fields.dept[0],
      position: fields.position[0],
      email: fields.email[0],
      photo: filePath,
    });
    res.redirect("/member/list");
  });
});

// 서버 실행
const server = http.createServer(app);
server.listen(app.get("port"), () => {
  console.log("Server is running at http://127.0.0.1:" + app.get("port"));
});
