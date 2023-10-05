const { LOG_BASE_DIR, SERVICE_STATUS } = require('../../../Global');
const fs = require('fs');
const Queue = require('../util/Queue');

/**
 * @author : 하석형
 * @since : 2023.08.24
 * @dscription : Log 생성기 모듈 입니다.
 */
const Logger = (function () {

    /* let testInterval = setInterval(() => {
        const date = new Date();
        var now = `${date.getFullYear()}.${(date.getMonth()+1)}.${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()}`;
        console.log('now :', now);
    }, 1000) */

    //로그 쓰기 전, 대기 저장소
    const eventQueue = new Queue();
    //로그 쓰는 중인지 아닌지 상태값
    let isLogging = false;

    /**
     * @author : 하석형
     * @since : 2023.08.24
     * @dscription : Log 처리
     */
    const logging = (message) => {
        const date = new Date();
        let year = date.getFullYear();
        let month = prefixZero((date.getMonth() + 1), 2);
        let day = prefixZero(date.getDate(), 2);
        let hour = prefixZero(date.getHours(), 2);
        let minute = prefixZero(date.getMinutes(), 2);
        let second = prefixZero(date.getSeconds(), 2);
        let millisecond = prefixZero(date.getMilliseconds(), 3);

        //로그에 쓰일 정보
        const logMessage = {
            message: message,
            datetime: `${year}.${month}.${day} ${hour}:${minute}:${second}.${millisecond}`,
            logFolderDir: `${LOG_BASE_DIR}/${year}${month}`,//log 폴더 경로
            logFileName: `log-${year}${month}${day}.log`//log 파일명
        }

        //로그 쓰는 중이면, 대기 저장소에 등록
        if (isLogging == true) {
            eventQueue.push(logMessage);
        } else {//로그 쓰는 중이 아니면, 로그 쓰는 중인 상태로 변경 후, 로그 쓰기
            isLogging = true;

            try {
                //log 폴더 생성
                if (!fs.existsSync(logMessage.logFolderDir)) {
                    fs.mkdirSync(logMessage.logFolderDir, { recursive: true/*재귀적 폴더 생성*/ });
                }

                //log 파일 Full Path
                let logFileFullPath = `${logMessage.logFolderDir}/${logMessage.logFileName}`;
                //log 내용
                let logContent = `[${logMessage.datetime}] ${logMessage.message}`;

                //log 내용 쓰기
                writeLogFile(logFileFullPath, logContent);
            } catch (error) {
                console.log('logging error : ', error);
            } finally {
                isLogging = false;
            }
        }
    }

    /**
     * @author : 하석형
     * @since : 2023.08.24
     * @dscription : Log 내용 쓰기
     */
    const writeLogFile = (path, content) => {
        if (SERVICE_STATUS == 'development') {
            console.log(content);
        }
        
        //파일 쓰기
        fs.appendFileSync(path, `${content}\n`, 'utf8');

        //로그 쓰기 저장소에서 로그 메세지 꺼내기
        let logMessage = eventQueue.pop();
        //메세지가 존재하면 => Log 내용 쓰기 (재귀 호출)
        if (logMessage != undefined) {
            //log 파일 Full Path
            let logFileFullPath = `${logMessage.logFolderDir}/${logMessage.logFileName}`;
            //log 내용
            let logContent = `[${logMessage.datetime}] ${logMessage.message}`;
            //Log 내용 쓰기 (재귀 호출)
            writeLogFile(logFileFullPath, logContent);
        } else {
            return;
        }
    }

    /**
     * @author : 하석형
     * @since : 2023.08.24
     * @dscription : 특정 길이만큼 앞에 '0' 붙이기
     */
    const prefixZero = (target, length) => {
        let zero = '';
        let suffix = target;
        let result = '';

        if ((typeof target) === "number") {
            suffix = target.toString();
        }
        if (suffix.length < length) {
            for (i = 0; i < length - suffix.length; i++) {
                zero += '0';
            }
        }
        result = zero + suffix;
        return result;
    }


    return {
        logging: logging
    }

})();

//Module Export
module.exports = Logger;