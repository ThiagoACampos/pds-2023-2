const {
	getAllData,
	insertData,
	updateData,
	deleteData,
	getOneData
} = require('../dbAdaptors/dbUtils')

async function getAllTasks() {
	// Validate something
	return await getAllData('tasks')
}

async function getOneTask(id) {
	return await getOneData('tasks', id)
}

async function createTask(data) {
	data.status = 'To Do'

	return await insertData('tasks', data)
}

async function updateTask(data) {
	let getOldValue = await getOneTask(data?.id)
	const previewStatus = getOldValue[0].status

	if (previewStatus == data.status) {
		return await updateData('tasks', data)
	} else {
		calculateStartAndEnd(data, previewStatus)
		return await updateData('tasks', data)
	}
}

async function deleteTask(data) {
	if (!data?.id) {
		throw new Error('Delete in DB missing id')
	}
	return await deleteData('tasks', data?.id)
}

function calculateStartAndEnd(data, previewStatus) {
	const currentDate = new Date()

	switch (data?.status) {
		case 'To Do':

			data.startDate = null
			data.endDate = null

			break;

		case 'In Progress':

			data.startDate = currentDate
			data.endDate = new Date(new Date(currentDate.getTime() + data.effortInHours * 60 * 60 * 1000))

			break;

		case 'Done':
			if (previewStatus == 'To Do') {
				data.startDate = currentDate
				data.endDate = currentDate

			} else if (previewStatus == 'In Progress') {
				data.endDate = currentDate

			} else {
				throw new Error('Invalid status when updating task.')
			}

			break;

		default:
			throw new Error('Invalid status when updating task.')
	}

}


module.exports = {
	getAllTasks,
	createTask,
	updateTask,
	deleteTask
}