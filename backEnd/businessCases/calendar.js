const { getAllTasks, updateTask } = require('./taskCases')

const {
	TO_DO,
	IN_PROGRESS,
	DONE
} = require('../utils/constants')
const { myTaskMock } = require('../entities/mock')



async function getCalendar() {
	
	const tasks = await getAllTasks()

	const taskInProgress = tasks.find((task) => task.status == IN_PROGRESS)
	const tasksToDo = tasks.filter((task) => task.status == TO_DO)
	const tasksDone = tasks.filter((task) => task.status == DONE)

	tasksToDo.sort((a, b) => a.priority - b.priority)
	tasksDone.sort((a, b) => a.endDate - b.endDate)
	
	if (tasksToDo.length != 0) {
		await enrichToDoTasks(tasksToDo, taskInProgress)
	}
	
	const response = [...tasksDone, taskInProgress, ...tasksToDo]
	return response
}

async function enrichToDoTasks(tasksToDo, taskInProgress) {
	let startDate = await getEndDate(taskInProgress)

	addPredictedDate(tasksToDo[0], startDate)

	for (let i = 1; i < tasksToDo.length; i++) {
		startDate = tasksToDo[i - 1].endDate

		addPredictedDate(tasksToDo[i], startDate)
	}
}

function addPredictedDate(task, startDate) {
	task.startDate = startDate
	task.endDate = new Date(new Date(startDate.getTime() + task.effortInHours * 60 * 60 * 1000))
}

async function getEndDate(task) {
	const currentDate = new Date()

	if (task.endDate < currentDate) {
		task.endDate = currentDate

		await updateTask(task)

		return startDate = currentDate
	}
	return task.endDate
}


module.exports = {
	getCalendar
}



























function getCalendarDays() {
	const currentDate = new Date()
	const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	const day = currentDate.getDate()
	const month = monthNames[currentDate.getMonth()]
	const daysToCalendar = []
}