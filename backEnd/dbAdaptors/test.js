// const mysql = require('mysql2/promise')

// const connection = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'sammy',
// 	password: 'password',
// 	database: 'myTrello'
// });

// connection.execute(`SELECT * FROM users`)

async function main() {
	// get the client
	const mysql = require('mysql2/promise');
	// create the connection
	const connection = await mysql.createConnection({ host: 'localhost', user: 'sammy', password: 'password', database: 'myTrello' });
	// query database
	const [rows, fields] = await connection.execute('SELECT * FROM users');
	connection.end();
	console.log(rows);
}

// main()

async function connect(params) {
	// get the client
	const mysql = require('mysql2/promise');
	// create the connection
	const connection = await mysql.createConnection({ host: 'localhost', user: 'sammy', password: 'password', database: 'myTrello' });
	return connection
}

async function get() {
	const connection = await connect()
	const [rows, fields] = await connection.execute('SELECT * FROM users');
	connection.end();
	return rows


	
}
const t = async () => { const t = await get()
console.log('myt',t)}
