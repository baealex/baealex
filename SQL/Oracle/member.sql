CREATE TABLE member (
    id VARCHAR(10) NOT NULL,
    passwd VARCHAR(20) NOT NULL,
    mname VARCHAR(20) NOT NULL,
    tel VARCHAR(15) NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    zipcode VARCHAR(7) NULL,
    address1 VARCHAR(150) NULL,
    address2 VARCHAR(50) NULL,
    job VARCHAR(20) NOT NULL,
    mdate DATE NOT NULL,
    fname VARCHAR(50) DEFAULT 'member.jpg',
    grade CHAR(1) DEFAULT 'H',
    PRIMARY KEY(id)
);

INSERT INTO member(id, passwd, mname, tel, email, zipcode, address1, address2, job, mdate, fname, grade)
VALUES('user1', '1234', 'developer1', '123-1234', 'email1@mail.com', '123-123', 'Incheon', 'Namdong', 'A01', sysdate, 'man.jpg', 'H');

INSERT INTO member(id, passwd, mname, tel, email, zipcode, address1, address2, job, mdate, fname, grade)
VALUES('user2', '1234', 'developer2', '123-1234', 'email2@mail.com', '123-123', 'Incheon', 'Namdong', 'A01', sysdate, 'man.jpg', 'H');

INSERT INTO member(id, passwd, mname, tel, email, zipcode, address1, address2, job, mdate, fname, grade)
VALUES('user3', '1234', 'developer3', '123-1234', 'email3@mail.com', '123-123', 'Incheon', 'Namdong', 'A01', sysdate, 'myface.jpg', 'H');

-- ID Check
SELECT id FROM member WHERE id='user1';

-- Mail Check
SELECT email FROM member WHERE email='email3@mail.com';

-- User Info
SELECT id, passwd, mname, tel, email, zipcode, address1, address2, job, mdate, fname, grade FROM member WHERE id='user1';

-- Image Change
UPDATE member SET fname='' WHERE id='user1';

-- Passwd Change
UPDATE member SET passwd='1234' WHERE id='';

-- User Info change
UPDATE member SET passwd='TEST', tel='123-123', email='email10', zipcode='TEST', address1='Suwon', address2='Pardargu', job='TEST' WHERE id='user3';

-- Delete user
DELETE FROM member WHERE id='user3';

-- Login
SELECT id FROM member WHERE id='user1' AND passwd='1234';

-- List
SELECT id, mname, tel, email, zipcode, address1, address2, fname, r from(
    SELECT id, mname, tel, email, zipcode, address1, address2, fname, rownum r from(
        SELECT id, mname, tel, email, zipcode, address1, address2, fname FROM member WHERE mname LIKE '%d%' ORDER BY mdate DESC
    )
)WHERE r >= 1 AND r <= 5;

SELECT * FROM member;
