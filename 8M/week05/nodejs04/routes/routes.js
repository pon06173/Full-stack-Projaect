const router = require("./calc");
const express = require("express")

router.get("/home", (req, res)=>{
  res.app.render("home", {title:"홈페이지132"}, (err, html)=>{
      if(err) throw(err)
      res.end(html)

  })
});

//임시 로그인 정보
let user = {
  id: "user01",
  password: "1234",
  name: "김길동"
}

router.post("/member/login", (req,res)=>{
  // console.log("Post 요청 받음: /member/Login")

  //req.body는 body-parser 미들웨어 설정 해 사용.
  // res.send(req.body)

  // req.body 정보와 user 정보 비교
  if(req.body.id === user.id && req.body.password === user.password){
      // 페이지를 이동 하더라도 로그인 정보를 사용하기 위해 session 사용
      //res.send(user.name + "님 환영합니다!")
      // 주의 : res.send(), res.end(), res.redirect() 중 한번 사용.
      // 로그인 성공 시 session에 사용자 정보 저장.
      user.authorized = true;
      req.session.user = user
      // /member/info 페이지로 이동
      res.redirect("/member/info")
  } else {
      // 로그인 실패 하면 다시 로그인 페이지로 이동
      res.redirect("/loginForm.html")
  }
})

router.get("/member/info", (req, res)=>{
  // session에 저장된 로그인 정보 확인.
  // url이 변경 되어도 session 정보는 그대로 남아 있다.
  console.log(req.session)
  //javascript 문법에서 null은 false로 처리 된다
  //req.session.user.name !== null
  if(req.session.user.name){
  const wel = res.send(req.session.user.name + "님 환영합니다!")
  const backButton = '<a href="/loginForm.html">돌아가기</a>';

      res.send(wel + " " + backButton);
} else {
  //로그인 정보가 없다면 다시 loginForm.html로 이동한다.
  res.redirect("/loginForm.html")
}
})

router.get('/calc/plus/:value1/:value2', (req, res) => {
  res.send(':::: Calc - plus ::::');
});

router.get('/calc/minus/:value1/:value2', (req, res) => {
  res.send(':::: Calc - minus ::::');
});

router.get('/calc/multi/:value1/:value2', (req, res) => {
  res.send(':::: Calc - multi ::::');
});

router.get('/calc/div/:value1/:value2', (req, res) => {
  res.send(':::: Calc - div ::::');
});


module.exports = router;