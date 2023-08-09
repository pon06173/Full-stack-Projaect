function task1(fullfill, reject) {
  console.log('Task1 시작');
  setTimeout(function() {
      console.log('Task1 끝');
      fullfill('Task1 결과');
  }, 300);
}

function fullfilled(result) {
  console.log('fullfiled : ', result);
}

function rejected(err) {
  console.log('rejected : ', err);
}

new Promise(task1).then(fullfilled, rejected);
