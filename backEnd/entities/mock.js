const { request } = require("..")
const currentDateTimeISO = new Date().toISOString();

const myTaskMock = {
	id: 16,
	taskName: 'ADO-686768 things for the deploy',
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

// Arrumar BD trocar pra nova esturtura de nomeTarefa ok
// organizar as rotas para receber request
// Criar a lógica para calcular início e fim da nomeTarefa
// Criar lógica para devolver o calendário







