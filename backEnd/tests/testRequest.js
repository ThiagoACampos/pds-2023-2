const axios = require('axios');

const mockTask = {
	id: 44,
	taskName: 'Random Tasks' + Math.floor(Math.random() * 1000),
	priority: 5,
	owner: 1,
	staff: 2,
	description: '',
	status: 'In Progress',
	//   startDate: new Date().toISOString(),
	//   endDate: new Date().toISOString(),
	effortInHours: 1,
};

// For chose the request
const key = 'task/edits'

const mockUser = {
	id: 1,
	name: 'Rodolfo Lins2',
	position: 'developer'
}

async function testPost(body, path) {
	const options = {
		method: 'post',
		url: `http://localhost:3000/${path}`,
		headers:
		{
			'Content-Type': 'application/json'
		},
		json: true,
		data: body
	}
	const response = await axios(options)
	console.log(response.status)
	console.log(response.data)
}

async function testGet(path) {
	const options = {
		method: 'get',
		url: `http://localhost:3000/${path}`,
	}
	const response = await axios(options)
	console.log(response.status)
	console.log(response.data)
}

async function callApp() {

	

	switch (key) {

		case 'task/edit':
			try {
				await testPost(mockTask, 'task/edit')
			} catch (error) {
				console.log('\n\n>>>>>>>>>>>>>>ERROR<<<<<<<<<<<<\n', error.response.statusText)
			}
			break;
		case 'task/create':
			try {
				await testPost(mockTask, 'task/create')
			} catch (error) {
				console.log('\n\n>>>>>>>>>>>>>>ERROR<<<<<<<<<<<<\n', error.response.statusText)
			}
			break;
		case 'task/delete':
			try {
				await testPost(mockTask, 'task/delete')
			} catch (error) {
				console.log('\n\n>>>>>>>>>>>>>>ERROR<<<<<<<<<<<<\n', error.response.statusText)
			}
			break;
		case 'task/getall':
			try {
				await testGet('task/getall')
			} catch (error) {
				console.log('\n\n>>>>>>>>>>>>>>ERROR<<<<<<<<<<<<\n', error.response.statusText)
			}
			break;
		case 'user/edit':
			try {
				await testPost(mockUser, 'user/edit')
			} catch (error) {
				console.log('\n\n>>>>>>>>>>>>>>ERROR<<<<<<<<<<<<\n', error.response.statusText)
			}
			break;
		case 'user/create':
			try {
				await testPost(mockUser, 'user/create')
			} catch (error) {
				console.log('\n\n>>>>>>>>>>>>>>ERROR<<<<<<<<<<<<\n', error.response.statusText)
			}
			break;
		case 'user/delete':
			try {
				await testPost(mockUser, 'user/delete')
			} catch (error) {
				console.log('\n\n>>>>>>>>>>>>>>ERROR<<<<<<<<<<<<\n', error.response.statusText)
			}
			break;
		case 'user/getall':
			try {
				await testGet('user/getall')
			} catch (error) {
				console.log('\n\n>>>>>>>>>>>>>ERROR<<<<<<<<<<\n', error.response.statusText)
			}

		default:
			break;
	}
}


module.exports = {
	callApp
}