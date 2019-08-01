CREATE TABLE employee(
    employeeno CHAR(6) NOT NULL,
    name VARCHAR(10) NOT NULL,
    tel VARCHAR(14) NOT NULL,
    part VARCHAR(10) NOT NULL,
    job VARCHAR(10) NOT NULL,
    mgr CHAR(6) NULL,
    CONSTRAINT employee_pk_employeeno PRIMARY KEY (employeeno)
);

CREATE TABLE pay(
    payno NUMBER(7) NOT NULL,
    pay NUMBER(8) NOT NULL,
    month CHAR(6) NOT NULL,
    employeeno CHAR(6) NOT NULL,
    CONSTRAINT pay_pk_payno PRIMARY KEY (payno),
    CONSTRAINT pay_fk_employeeno FOREIGN KEY (employeeno) REFERENCES employee(employeeno)
);

CREATE SEQUENCE pay_seq
    START WITH 1
    INCREMENT BY 1
    MAXVALUE 9999999
    CACHE 2
    NOCYCLE;
    
INSERT INTO employee(employeeno, name, tel, part, job) VALUES('IT-001', '나대표', '02-111-1111', '임원', '대표');
INSERT INTO employee(employeeno, name, tel, part, job,mgr) VALUES('IT-002', '김과장', '02-222-2222', '개발부', '과장','IT-001');
INSERT INTO employee(employeeno, name, tel, part, job,mgr) VALUES('IT-003', '박과장', '02-222-2222', '기획부', '과장','IT-001');
INSERT INTO employee(employeeno, name, tel, part, job,mgr) VALUES('IT-004', '홍길동', '03-333-3333', '개발부', '사원','IT-002');
INSERT INTO employee(employeeno, name, tel, part, job,mgr) VALUES('IT-005', '홍길순', '03-333-3333', '개발부', '사원','IT-002');
INSERT INTO employee(employeeno, name, tel, part, job,mgr) VALUES('IT-006', '김길동', '03-333-3333', '기획부', '사원','IT-003');
INSERT INTO employee(employeeno, name, tel, part, job,mgr) VALUES('IT-007', '박길순', '03-333-3333', '기획부', '사원','IT-003');

SELECT employeeno, name, tel, part, job,mgr FROM employee;

INSERT INTO pay(payno, pay, month, employeeno) VALUES(pay_seq.nextval, 6000000, '200201', 'IT-001');
INSERT INTO pay(payno, pay, month, employeeno) VALUES(pay_seq.nextval, 3000000, '200801', 'IT-002');
INSERT INTO pay(payno, pay, month, employeeno) VALUES(pay_seq.nextval, 3000000, '200801', 'IT-003');
INSERT INTO pay(payno, pay, month, employeeno) VALUES(pay_seq.nextval, 2300000, '200802', 'IT-004');
INSERT INTO pay(payno, pay, month, employeeno) VALUES(pay_seq.nextval, 2400000, '200802', 'IT-005');
INSERT INTO pay(payno, pay, month, employeeno) VALUES(pay_seq.nextval, 2500000, '200802', 'IT-006');
 
SELECT payno, pay, month, employeeno FROM pay;

SELECT e.employeeno, e.name, e.tel, e.part, e.job, p.payno, p.pay, p.month, p.employeeno FROM employee e, pay p WHERE e.employeeno = p.employeeno;
SELECT e.employeeno, e.name, e.tel, e.part, e.job, p.payno, p.pay, p.month, p.employeeno FROM employee e INNER JOIN pay p ON e.employeeno = p.employeeno;
SELECT e.employeeno, e.name, e.tel, e.part, e.job, p.payno, p.pay, p.month, p.employeeno FROM employee e, pay p WHERE e.employeeno = p.employeeno AND e.name = '홍길동';
SELECT e.employeeno, e.name, e.tel, e.part, e.job, p.payno, p.pay, p.month, p.employeeno FROM employee e INNER JOIN pay p ON e.employeeno = p.employeeno WHERE e.name = '홍길동';

CREATE TABLE salgrade(
    grade CHAR(1) NOT NULL,
    losal NUMBER NOT NULL,
    hisal NUMBER NOT NULL,
    CONSTRAINT salgrade_pk_grade PRIMARY KEY(grade)
);

INSERT INTO salgrade(grade, losal, hisal) VALUES('1', 1500000, 2500000);
INSERT INTO salgrade(grade, losal, hisal) VALUES('2', 2600000, 3500000);
INSERT INTO salgrade(grade, losal, hisal) VALUES('3', 3600000, 4500000);
INSERT INTO salgrade(grade, losal, hisal) VALUES('4', 4600000, 5500000);
INSERT INTO salgrade(grade, losal, hisal) VALUES('5', 5600000, 6500000);

SELECT e.name, p.pay, s.grade FROM employee e, salgrade s, pay p WHERE e.employeeno = p.employeeno AND p.pay >= s.losal AND p.pay <= s.hisal;
SELECT e.name, p.pay, s.grade FROM employee e, salgrade s, pay p WHERE p.pay BETWEEN s.losal AND s.hisal;

SELECT e.name || '의 담당 매니저는 ' || m.name || '입니다.' FROM employee e, employee m WHERE e.mgr = m.employeeno;

SELECT e.employeeno, e.name, e.tel, e.part, e.job, p.payno, p.pay, p.month, p.employeeno FROM employee e, pay p WHERE e.employeeno(+) = p.employeeno;
SELECT e.employeeno, e.name, e.tel, e.part, e.job, p.payno, p.pay, p.month, p.employeeno FROM employee e RIGHT OUTER JOIN pay p ON(e.employeeno = p.employeeno);
SELECT e.employeeno, e.name, e.tel, e.part, e.job, p.payno, p.pay, p.month, p.employeeno FROM employee e FULL OUTER JOIN pay p ON(e.employeeno = p.employeeno);