CREATE TABLE bbs (
    pk INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(128) NOT NULL,
    content TEXT NULL
);

-------------------------------------------

INSERT INTO bbs(title, content) VALUES('안녕', '첫번째 글이야!');

-------------------------------------------

INSERT INTO bbs VALUES(2, '안녕', '두번째 글이야!');

-------------------------------------------

UPDATE bbs SET title='반가워' WHERE pk=2;