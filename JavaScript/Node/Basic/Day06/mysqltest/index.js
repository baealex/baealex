var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'baealex',
	password: '1234',
	prot: 3306,
	database: 'testcase'
});

connection.connect();

connection.query('SELECT * FROM MEMO', (err, rows, filds)=> {
	if(!err) {
		console.log(rows);
	} else {
		console.log(err);
	}
});

connection.end();
