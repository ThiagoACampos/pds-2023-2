const { request } = require("..")
const currentDateTimeISO = new Date().toISOString();

const randomNum = Math.floor(Math.random() * 1000) + 1

const myTaskMock = {
	id: 16,
	taskName: 'ADO-686768 things for the deploy' + randomNum,
	priority: 0,
	owner: 1,
	staff: 2,
	description:'',
	status:'',
	// startDate: currentDateTimeISO,
	// endDate: currentDateTimeISO,
	effortInHours: 9
}

const myUserMock = {
	id: 10,
	name: 'Rodolfo Lins',
	position: 'developer'
}

// const mockCalendar = {
// 	[{nomeTarefa, start, end},
// 		{ nomeTarefa, start, end }]
// }

module.exports = {
	myTaskMock,
	myUserMock
}

// Arrumar BD trocar pra nova esturtura de Tarefa ok

// organizar as rotas para receber request
// Criar a lógica para calcular início e fim da Tarefa
// Criar lógica para devolver o calendário







