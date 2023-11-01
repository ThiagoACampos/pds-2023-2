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

	const tasksInOrder = [...tasksDone, taskInProgress, ...tasksToDo]
	console.log(tasksInOrder)



	const response = translateTasks(tasksInOrder)

	return response
}

function translateTasks(tasks) {
	const daysToReturn = []
	const tasksOfTheWeek = []
	for (let i = a0; i < 7; i++) {
		let newDate = new Date(new Date().getTime() + 24 * i * 60 * 60 * 1000)
		const tasksOfDay = getDayTasks(tasks, newDate)
		const taskTranslated = tasksOfDay.map((task) => {

			return {
				dateStart: task.startDate,
				dateEnd: task.endDate,
				title: 'Metting',
				detail: ''
			}

		})
		tasksOfTheWeek.push(taskTranslated)

	}

	let newDate = new Date(new Date().getTime() + 24 * 2 * 60 * 60 * 1000)

	const tasksOfDay = getDayTasks(tasks, newDate)

	return tasks.map((task) => {

	})
}

function getHHMM(time) {
	return time.getHour() + time.getMinutes()

}

function getDayTasks(tasks, date) {
	let firstHour = new Date(date)
	let lastHour = new Date(date)

	firstHour.setHours(0, 0, 0, 0)
	lastHour.setHours(23, 59, 59, 999)

	return tasks.filter((task) => task.startDate <= lastHour && task.endDate >= firstHour)
}

function getWeekTasks(tasks) {
	let currentDate = new Date()
	let lastDay = new Date(new Date(currentDate.getTime() + 24 * 8 * 60 * 60 * 1000))

	currentDate.setHours(0, 0, 0, 0)
	lastDay.setHours(23, 59, 59, 999)

	return tasks.filter((task) => task.startDate <= lastDay && task.endDate >= currentDate)
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
	task.endDate = new Date(new Date(startDate.getTime() + task.workload * 60 * 60 * 1000))
}

async function getEndDate(task) {
	const currentDate = new Date()

	if (task.endDate < currentDate) {
		task.endDate = currentDate

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



