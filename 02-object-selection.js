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

console.log('Достойные сотрудники: ' + "\n" + getWorthyWorkers(workers));
console.log('Достойные сотрудники через filter: ' + "\n" + getWorthyWorkersFilter(workers));

function getWorthyWorkers(workers, neededSalary = 1000) {
	const worthyWorkers = [];

	workers.forEach(worker => {
		if (worker.salary > neededSalary) {
			worthyWorkers.push(worker.name);
		}
	});

	return worthyWorkers;
}

function getWorthyWorkersFilter(workers, neededSalary = 1000) {
	return workers
		.filter(worker => worker.salary > neededSalary)
		.map(worker => worker.name);
}