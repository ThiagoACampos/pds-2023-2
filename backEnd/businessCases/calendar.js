const { getAllTasks, updateTask } = require('./taskCases')

const {
	TO_DO,
	IN_PROGRESS,
	DONE
} = require('../utils/constants')
const { myTaskMock } = require('../entities/mock')



async function getCalendar() {

	const tasks = await getAllTasks()

	const taskInProgress = tasks.find((task) => task.status === IN_PROGRESS)
	const tasksToDo = tasks.filter((task) => task.status === TO_DO)
	const tasksDone = tasks.filter((task) => task.status === DONE)

	tasksToDo.sort((a, b) => a.priority - b.priority)
	tasksDone.sort((a, b) => a.endDate - b.endDate)

	if (tasksToDo.length != 0) {
		await enrichToDoTasks(tasksToDo, taskInProgress)
	}

	const tasksInOrder = [...tasksDone, taskInProgress, ...tasksToDo]


	const response = translateTasks(tasksInOrder)

	return response
}

function translateTasks(tasksInOrder) {
	let weekDate = new Date().getDay() - 1;
	const startTimeDaily = 9;
	let currentTime = startTimeDaily;

	const tasksOfTheWeek = [];

	tasksInOrder.forEach((task) => {

		if (currentTime + task.workload >= 18){
			weekDate += 1;
			currentTime = startTimeDaily;
		}

		const taskTranslated = {
			dayWeekStart: weekDate,
			taskDetais: {
				dateStart: getTimeHHMMFormat(currentTime),
				dateEnd: getTimeHHMMFormat(currentTime += task.workload),
				title: task.taskName,
				detail: task.description
			}
		}

		tasksOfTheWeek.push(taskTranslated);
	});

	return mapToDaysOfTheWeek(tasksOfTheWeek);
}

function mapToDaysOfTheWeek(tasksOfTheWeek) {

	let daysOfTheWeekWithTasks = [];
	for (let i = 0; i < 7; i++) {
		daysOfTheWeekWithTasks.push([]);
	}

	tasksOfTheWeek.forEach((task) => {
		daysOfTheWeekWithTasks[task.dayWeekStart].push(task.taskDetais)
	});

	return daysOfTheWeekWithTasks;

}

function getTimeHHMMFormat(hour) {
	return String(hour) + ":00";
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
	getCalendar,
	translateTasks,
	getTimeHHMMFormat,
	mapToDaysOfTheWeek,
	addPredictedDate
}