const axios = require('axios');

const mockTask = {
	id: 1,
	taskName: 'ADO-686768 things for the deploy' + Math.floor(Math.random() * 1000),
	priority: 0,
	owner: 1,
	staff: 2,
	description: '',
	status: '',
	//   startDate: new Date().toISOString(),
	//   endDate: new Date().toISOString(),
	effortInHours: 9,
};


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

async function testGet( path) {
	const options = {
		method: 'get',
		url: `http://localhost:3000/${path}`,
	}
	const response = await axios(options)
	console.log(response.status)
	console.log(response.data)
}

async function callApp() {

	try {
		await testPost(mockTask, 'task/edit')
	} catch (error) {
		console.log('\n\n>>>>>>>>>>>>>>ERROR<<<<<<<<<<<<\n', error.response.statusText)
	}
	try {
		await testPost(mockTask, 'task/create')
	} catch (error) {
		console.log('\n\n>>>>>>>>>>>>>>ERROR<<<<<<<<<<<<\n', error.response.statusText)
	}
	try {
		await testPost(mockTask, 'task/delete')
	} catch (error) {
		console.log('\n\n>>>>>>>>>>>>>>ERROR<<<<<<<<<<<<\n', error.response.statusText)
	}
	try {
		await testGet('task/getall')
	} catch (error) {
		console.log('\n\n>>>>>>>>>>>>>>ERROR<<<<<<<<<<<<\n', error.response.statusText)
	}
	try {
		await testPost(mockUser, 'user/edit')
	} catch (error) {
		console.log('\n\n>>>>>>>>>>>>>>ERROR<<<<<<<<<<<<\n', error.response.statusText)
	}
	try {
		await testPost(mockUser, 'user/create')
	} catch (error) {
		console.log('\n\n>>>>>>>>>>>>>>ERROR<<<<<<<<<<<<\n', error.response.statusText)
	}
	try {
		await testPost(mockUser, 'user/delete')
	} catch (error) {
		console.log('\n\n>>>>>>>>>>>>>>ERROR<<<<<<<<<<<<\n', error.response.statusText)
	}
	try {
		await testGet('user/getall')
	} catch (error) {
		console.log('\n\n>>>>>>>>>>>>>ERROR<<<<<<<<<<\n', error.response.statusText)
	}

}


module.exports = {
	callApp
}