var express = require('express');
var router = express.Router();
const {
	getAllTasks,
	createTask,
	updateTask,
	deleteTask
} = require('../businessCases/taskCases')
const {
	createUser,
	deleteUser,
	updateUser,
	getAllUsers
} = require('../businessCases/userCases')
const { myTaskMock, myUserMock } = require('../entities/mock')
const { handleErrors } = require('../utils/errorTreatment');

const { callApp } = require('../tests/testRequest')
const { getCalendar } = require('../businessCases/calendar')



try {
	// Routes
	router.get('/', (req, res) => {
		res.send('Hello World!')
	})

	// Tasks calls
	router.post('/task/create', async (req, res) => {
		await createTask(req.body)
			.then(result => res.status(200).send(result))
			.catch(err => {
				console.log(err)
				res.redirect('/error')})
	})

	router.post('/task/delete', async (req, res) => {
		await deleteTask(req.body)
			.then(result => res.status(200).send(result))
			.catch(err => {
				console.log(err)
				res.redirect('/error')})
	})

	router.post('/task/edit', async (req, res) => {
		await updateTask(req.body)
			.then(result => res.status(200).send(result))
			.catch(err => {
				console.log(err)
				res.redirect('/error')})
	})

	router.get('/task/getall', async (req, res) => {
			await getAllTasks()
		.then(result => res.status(200).send(result))
			.catch(err => {
				console.log(err)
				res.redirect('/error')})
	})

	// User calls
	router.post('/user/create', async (req, res) => {
		await createUser(req.body)
			.then(result => res.status(200).send(result))
			.catch(err => {
				console.log(err)
				res.redirect('/error')})
	})

	router.post('/user/delete', async (req, res) => {
		await deleteUser(req.body)
			.then(result => res.status(200).send(result))
			.catch(err => {
				console.log(err)
				res.redirect('/error')})
	})

	router.post('/user/edit', async (req, res) => {
		await updateUser(req.body)
			.then(result => res.status(200).send(result))
			.catch(err => {
				console.log(err)
				res.redirect('/error')})
	})

	router.get('/user/getall', async (req, res) => {
		await getAllUsers()
			.then(result => res.status(200).send(result))
			.catch(err => {
				console.log(err)
				res.redirect('/error')})
	})

	// Calendar route

	router.get('/calendar', async (req, res) => {
		await getCalendar()
			.then(result => res.status(200).send(result))
			.catch(err => {
				console.log(err)
				res.redirect('/error')
			})
	})


	// Error routes
	router.get('/error', async (req, res) => {
		res.send('<h1>Gremlins in the server room. ! Sorry :( </h1>')
	})


} catch (error) {
	console.log(error)
	const errorResponse = handleErrors(error)
}

// callApp()
// getCalendar()
// Use callApp only for testing routes


module.exports = router
