/**
 * @author : 하석형
 * @since : 2023.08.24
 * @dscription : Queue(선입선출) 자료형 객체 입니다.
 */
class Queue {
    constructor() {
        this._arr = [];
    }

    //입력
    push (item) {
        this._arr.push(item);
    }

    //출력 후, 제거
    pop () {
        return this._arr.shift();
    }

    //출력 대기 중인 item return
    peek () {
        return this._arr[0];
    }

    //확인
    showQueue () {
        console.log('Queue : ', this._arr);
    }
}

module.exports = Queue;