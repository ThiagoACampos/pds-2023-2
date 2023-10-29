const mysql = require('mysql2/promise')

const connectionConfigs = {
	host: 'localhost',
	user: 'sammy',
	password: 'password',
	database: 'myTrello'
}


const { myTaskMock } = require('../entities/mock')

async function deleteData(table, id) {
	const connection = await mysql.createConnection(connectionConfigs)

	const queryString = getDeleteString(table)

	const response = await connection.query(queryString, id)
	connection.end()

	return response
}

async function insertData(table, data) {
	if(data?.id) delete data.id

	const connection = await mysql.createConnection(connectionConfigs)

	const queryString = getCreateString(table, data)

	const values = Object.values(data)

	const response = await connection.query(queryString, values)
	connection.end()

	return response
}

async function updateData(table, data) {
	const { id } = data
	if (id){
		delete data.id
	} else{
		throw new Error('UpdateData function.Data is missing id!')
	}

	const connection = await mysql.createConnection(connectionConfigs)

	const queryString = getUpdateString(table, data)

	const values = Object.values(data)
	values.push(id)

	const response = await connection.query(queryString, values)
	connection.end()

	return response
}


async function getAllData(table) {
	const connection = await mysql.createConnection(connectionConfigs)
	const [rows, fields] = await connection.execute(`SELECT * FROM ${table}`)
	connection.end()

	return rows
}

async function testFunction(params) {
	const rs = await insertData('tasks', myTaskMock)
	console.log('\n\n\n >>>>>>>>>>>>>>> my results <<<<<<<<<<<<<<<<<<<<<\n\n\n', rs)
}
// testFunction()

function getCreateString(table, data) {
	const keys = Object.keys(data)
	let tableKeys = `${table}(`
	let tableValues = 'VALUES ('

	keys.forEach((key, index) => {
		if (index != keys.length - 1) {
			tableKeys = tableKeys + key + ', '
			tableValues = tableValues + '?' + ', '
		} else {
			tableKeys = tableKeys + key + ')'
			tableValues = tableValues + '?' + ')'
		}

	});
	return `INSERT INTO ${tableKeys} ${tableValues}`
}

function getUpdateString(table, data) {
	const keys = Object.keys(data)
	let tableKeys = `${table}(`
	let setValues = 'SET '

	keys.forEach((key, index) => {
		if (index != keys.length - 1) {
			setValues = setValues + key + ' = ?, '
		} else {
			setValues = setValues + key + ' = ? '
		}

	});
	return `UPDATE ${table} ${setValues} WHERE id = ?`
}

function getDeleteString(table) {
	return `DELETE FROM ${table} WHERE id = ?`
}

module.exports = {
	insertData,
	deleteData,
	updateData,
	getAllData
}