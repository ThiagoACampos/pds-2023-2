const {
	getAllData,
	insertData,
	updateData,
	deleteData
} = require('../dbAdaptors/dbUtils')

async function getAllTasks() {
	// Validate something
	return await getAllData('tasks')
}

async function createTask(data) {
	// Validate something
	return await insertData('tasks', data)
}

async function updateTask(data) {
	// Validate something
	return await updateData('tasks', data)
}

async function deleteTask(data) {
	if (!data?.id) {
		throw new Error('Delete in DB missing id')
	}
	return await deleteData('tasks', data?.id)
}


module.exports = {
	getAllTasks,
	createTask,
	updateTask,
	deleteTask
}