const fs = require('fs');

const content = '이 내용을 파일에 씁니다.';

fs.writeFile('output.txt', content, 'utf8', (err) => {
  if (err) {
    console.error('파일 쓰기 에러:', err.message);
    return;
  }
  console.log('파일 쓰기 완료');
});

console.log("::: 파일 쓰기 예제 :::");