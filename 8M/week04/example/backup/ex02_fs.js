const fs = require('fs');

fs.readFile('sample.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('파일 읽기 에러:', err.message);
    return;
  }
  console.log('파일 내용:\n', data);
});
