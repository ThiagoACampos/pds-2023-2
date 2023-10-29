var express = require('express');
var router = express.Router();
const {
	getAllTasks,
	createTask,
	updateTask,
	deleteTask
} = require('../businesCases/taskCases')
const {
	createUser,
	deleteUser,
	updateUser,
	getAllUsers
} = require('../businesCases/userCases')
const { myTaskMock, myUserMock } = require('../entities/mock')
const { handleErrors } = require('../utils/errorTreatment');
const { routes } = require('..');


try {
	// Routes
	router.get('/', (req, res) => {
		res.send('Hello World!')
	})

	// Tasks calls
	router.post('/task/create', async (req, res) => {
		res.send(await createTask(req.body))
	})

	router.get('/task/delete', async (req, res) => {
		res.send(await deleteTask(myTaskMock))
	})

	router.get('/task/edit', async (req, res) => {
		res.send(await updateTask(myTaskMock))
	})

	router.get('/task/getall', async (req, res) => {
		res.send(await getAllTasks())
	})

	// User calls
	router.get('/user/create', async (req, res) => {
		res.send(await createUser(myUserMock))
	})

	router.get('/user/delete', async (req, res) => {
		res.send(await deleteUser(myUserMock))
	})

	router.get('/user/edit', async (req, res) => {
		await updateUser(myUserMock)
			.then(result => res.status(200).send(result))
			.catch(err => res.redirect('/error'))
	})

	router.get('/user/getall', async (req, res) => {
		res.send(await getAllUsers())
	})

	router.get('/user/getall', async (req, res) => {
		res.send(await getAllUsers())
	})

	// Error routes

	router.get('/error', async (req, res) => {
		res.send('<h1>Gremlins in the server room. ! Sorry :( </h1>')
	})


} catch (error) {
	console.log(error)
	const errorResponse = handleErrors(error)
}


module.exports = router
