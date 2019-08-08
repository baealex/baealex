var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'baealex',
	password: '1234',
	port: 3306,
	database: 'testcase'
});

connection.connect();

selectAll = () => {
	connection.query('SELECT PK, USER, CONTENT FROM CHAT', (err, rows, filds)=> {
		if(!err) {
			console.log(rows);
		} else {
			console.log(err);
		}
	});
};

selectAll();

/*
let name = '그라탕';
let content = '그래요 반가워요'

connection.query('INSERT INTO CHAT(USER, CONTENT) VALUES(\''+name+'\',\''+content+'\')', (err, rows, filds) => {
	if(!err) {
		console.log(rows);
	} else {
		console.log(err);
	}
});

selectAll();
*/

connection.end();
