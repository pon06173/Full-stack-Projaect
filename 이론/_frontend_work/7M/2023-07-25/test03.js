        // 문서의 모든 요소가 로드되면 자바스크립트 실행
        // 이벤트 핸들러 추가
        window.onload = function() {
          //console.log(">>>> 1");
          // CSS의 선택자 그대로 사용 가능
          var cardNodeList = document.querySelectorAll(".card");
          //console.dir(cardNodeList);

          // 스프레드 연산자를 이용해서 NodeList를 Array로 변환
          var cardArr = [...cardNodeList];
          //console.dir(cardArr);
          // colrs[1] == 'green'
          var colors = ['red','green','blue','orange','pink', 'navy'];
          cardArr.forEach((item, idx)=> {
              //console.log(item, idx);
              item.onclick = function() {
                  //console.log(this);
                  // forEach로 반복 했을때 idx 직접 사용 가능.
                  // alert(idx);
                  document.body.bgColor = colors[idx];
              }
          });
      }