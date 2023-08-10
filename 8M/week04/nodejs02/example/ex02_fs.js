const fs = require('fs');

fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('파일 읽기 에러:', err.message);
        return;
    }
  console.log('파일 내용:\n', data);
});

// 만약 비동기라면 파일 읽기 전에 이 부분이 실행 될 것이다.
console.log("파일 입출력 테스트");