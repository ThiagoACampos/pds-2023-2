var express = require('express');
var router = express.Router();
const {
	getAllTasks,
	createTask,
	updateTask,
	deleteTask
} = require('../businesCases/taskCases')

const { myTaskMock, } = require('../entities/mock')

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.get('/task/create', async (req, res) => {
	res.send(await createTask(myTaskMock))
})

router.get('/task/delete', async (req, res) => {
	res.send(await deleteTask(myTaskMock))
})

router.get('/task/edit', async (req, res) => {
	res.send(await updateTask(myTaskMock))
})

router.get('/task/getall', async (req, res) => {
  res.send(await getAllTasks(2))
})


module.exports = router