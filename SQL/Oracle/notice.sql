DROP TABLE notice;

CREATE TABLE notice (
    no NUMBER(10) NOT NULL,
    id VARCHAR(20) NOT NULL,
    title VARCHAR(1000) NOT NULL,
    content CLOB NOT NULL,
    passwd VARCHAR(20) NOT NULL,
    wdate DATE NOT NULL,
    viewcnt NUMBER(10) DEFAULT 0,
    PRIMARY KEY(no)
);

SELECT * FROM notice;

SELECT NVL(MAX(no),0) + 1 FROM notice;

INSERT INTO notice(no, id, title, content, passwd, wdate) VALUES((SELECT NVL(MAX(no),0) + 1 FROM notice), 'admin', 'break tomorrow', 'then study home', '1234', sysdate);

SELECT no, id, title, TO_CHAR(wdate,'yyyy-mm-dd'), r FROM (
    SELECT no, id, title, wdate, rownum r FROM(
        SELECT no, id, title, wdate FROM notice
        -- WHERE title LIKE '%tomo%' OR content LIKE '%stu%'
        ORDER BY no DESC
    )
) WHERE r>=6 AND r<=10;

SELECT COUNT(no) FROM notice WHERE no = 1 AND passwd = '1234';

UPDATE notice SET title = '1', content = '222' WHERE no = 1;

SELECT no FROM notice WHERE no=1 AND passwd='1234';