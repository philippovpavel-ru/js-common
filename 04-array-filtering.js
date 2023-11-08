const mixedArray = [3,13,74,14,66,15,22,4];
const isEven = num => {
	return num % 2 == 0;
};

console.log( 'Фильтр четных чисел: ' + filterArray( mixedArray, isEven ) );

function filterArray( mixedArray, isEven ) {
	let filteredArray = [];

	mixedArray.forEach(num => {
		if (isEven(num)) {
			filteredArray.push(num);
		}
	});

	return filteredArray;
}