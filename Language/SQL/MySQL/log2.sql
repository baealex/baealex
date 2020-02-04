CREATE TABLE gradetable (
    pk INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name CHAR(8) NOT NULL,
    ko TINYINT NOT NULL,
    en TINYINT NOT NULL,
    total SMALLINT DEFAULT 0,
    avg FLOAT DEFAULT 0.0
);

-------------------------------------------

INSERT INTO gradetable(name, ko, en) VALUES('김길동', 87, 94);

-------------------------------------------

INSERT INTO gradetable(name, ko, en) VALUES('배길동', 90, 15);

-------------------------------------------

UPDATE gradetable SET total=ko+en;

-------------------------------------------

UPDATE gradetable SET avg=total/2;

-------------------------------------------

DELETE FROM gradetable WHERE pk=1;

-------------------------------------------

DROP TABLE gradetable;