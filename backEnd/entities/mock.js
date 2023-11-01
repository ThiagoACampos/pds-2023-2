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
	workload: 9
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
// organizar as rotas para receber request ok

// Criar a lógica para calcular início e fim da Tarefa ok
// Precisa ficar olhando o staus da tarefa e quando mudar atualizar o start time
// pra salvar tem que antes buscar na fila qual o tempo ela pode começar
// não pra salvar, mas pra formar o calendário
// no update checar se mudou o status pra doing se sim muda satate date pra atual.
// fazer o calendário. pega todas, acha a que está em doing e coloca nas outas o começo e fim 
// a partir do end data do que está sendo feita.
// criar tarefa não mexe nas datas
// update só se mudar status


// Criar lógica para devolver o calendário







