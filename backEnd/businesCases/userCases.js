const {
	getAllData,
	insertData,
	updateData,
	deleteData
} = require('../dbAdaptors/dbUtils')

async function getAllUsers() {
	// Validate something
	return await getAllData('users')
}

async function createUser(data) {
	// Validate something
	return await insertData('users', data)
}

async function updateUser(data) {
	// Validate something here
	return await updateData('users', data)
}

async function deleteUser(data) {
	if (!data?.id) {
		throw new Error('Delete in DB missing id')
	}
	return await deleteData('users', data?.id)
}


module.exports = {
	createUser,
	deleteUser,
	updateUser,
	getAllUsers
}