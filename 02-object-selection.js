const workers = [
	{
		"name": "John",
		"salary": 500
	},
	{
		"name": "Mike",
		"salary": 1300
	},
	{
		"name": "Linda",
		"salary": 1500
	}
];

console.log('Достойные сотрудники: ' + getWorthyWorkers(workers));

function getWorthyWorkers(workers, neededSalary = 1000) {
	let worthyWorkers = [];

	workers.forEach(worker => {
		if (worker.salary > neededSalary) {
			worthyWorkers.push(worker.name);
		}
	});

	return worthyWorkers;
}