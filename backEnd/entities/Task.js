const Joi = require('joi')
const { PRODUCTIVITY_HOURS_DAY } = require('../utils/constants')

class Task {
	#id
	#taskName
	#priority
	#owner
	#startDate
	#daysOfDev

	constructor({
		id,
		taskName,
		priority,
		owner,
		startDate,
		effortInHours
	}) {
		this.id = id
		this.taskName = taskName
		this.priority = priority
		this.owner = owner
		this.startDate = startDate
		this.endDate = this.getEndDate();
	}

	getEndDate() {
		return this.startDate.add(PRODUCTIVITY_HOURS_DAY, 'hours')
	}
}


