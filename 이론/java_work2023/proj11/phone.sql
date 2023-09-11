-- H2 데이터베이스가 항상 실행 되어 있어야 한다.
-- h2는 수동으로 실행 해야 한다.
-- Eclipse에서 DB 실행 가능
-- Phone의 필드 구조와 같게 테이블을 만든다.
-- int no;
-- String name;
-- String phone;

drop table phone;

CREATE TABLE if not exists PHONE (
NO INT AUTO_INCREMENT PRIMARY KEY,
NAME VARCHAR2(50) NOT NULL,
PHONE VARCHAR2(20)
);

INSERT INTO PHONE(NAME, PHONE)
VALUES ('hong', 'hong@comstudy.org');

INSERT INTO PHONE(NAME, PHONE)
VALUES 
('kim', 'kim@comstudy.org'), 
('park', 'park@comstudy.org'),
('kang', 'kang@comstudy.org');

SELECT * FROM PHONE;
SELECT * FROM PHONE where no =1;
SELECT * FROM PHONE where name like '%k%';

UPDATE PHONE SET NAME='kang', PHONE='kang@comstudy.org'
WHERE NO=3;

DELETE FROM PHONE WHERE NO=3;