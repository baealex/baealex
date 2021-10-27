CREATE TABLE bbs ( 
  bbsno   NUMBER(7)     NOT NULL,
  wname   VARCHAR(20)   NOT NULL,
  title   VARCHAR(100)  NOT NULL,
  content VARCHAR(4000) NOT NULL,
  passwd  VARCHAR(15)   NOT NULL,
  viewcnt NUMBER(5)     DEFAULT 0,
  wdate   DATE          NOT NULL,
  grpno   NUMBER(7)     DEFAULT 0,
  indent  NUMBER(2)     DEFAULT 0,
  ansnum  NUMBER(5)     DEFAULT 0,
  PRIMARY KEY (bbsno)  
); 

SELECT MAX(bbsno) FROM bbs;

SELECT NVL(MAX(bbsno),0)+1 FROM bbs;

INSERT INTO bbs(bbsno, wname, title, content, passwd, wdate, grpno) VALUES((SELECT NVL(max(bbsno), 0)+1 FROM bbs), '박길동', '게시판제목2', '게시판내용2', '1234', sysdate, (SELECT NVL(max(grpno), 0)+1 FROM bbs));

SELECT * FROM bbs;

-- List
SELECT bbsno, wname, title, viewcnt, wdate, grpno, indent, ansnum FROM bbs ORDER BY bbsno DESC;

-- Search
SELECT bbsno, wname, title, viewcnt, wdate, grpno, indent, ansnum FROM bbs WHERE wname LIKE '%d%' ORDER BY bbsno DESC;
SELECT bbsno, wname, title, viewcnt, wdate, grpno, indent, ansnum FROM bbs WHERE title LIKE '%2%' ORDER BY bbsno DESC;
SELECT bbsno, wname, title, viewcnt, wdate, grpno, indent, ansnum FROM bbs WHERE wname LIKE '%d%' OR title LIKE '%2%' ORDER BY bbsno DESC;

UPDATE bbs SET viewcnt = viewcnt + 1 WHERE bbsno = 1;

DELETE FROM bbs WHERE bbsno = 10003 AND passwd = ''OR '1'='1';

INSERT INTO bbs(bbsno, wname, title, content, passwd, wdate, grpno, indent, ansnum)
VALUES((SELECT NVL(max(bbsno), 0)+1, 'baealex', 'hi', 'nice to meet you', '1234', sysdate, (SELECT bbsno WHERE FROM bbs));

-- Pagination
SELECT bbsno, wname, title, viewcnt, wdate, grpno, indent, ansnum,  r FROM(
    SELECT bbsno, wname, title, viewcnt, wdate, grpno, indent, ansnum, rownum as r FROM ( 
        SELECT bbsno, wname, title, viewcnt, wdate, grpno, indent, ansnum FROM bbs ORDER BY grpno DESC, ansnum ASC 
    )
) where r >= 1 and r <= 10;

SELECT bbsno, wname, title, viewcnt, wdate, grpno, indent, ansnum,  r FROM(
SELECT bbsno, wname, title, viewcnt, wdate, grpno,
indent, ansnum, rownum as r FROM (
SELECT bbsno, wname,
title, content, viewcnt, wdate, grpno, indent, ansnum FROM bbs
ORDER BY grpno DESC, ansnum
)
) where r >= 1 and r <= 10;