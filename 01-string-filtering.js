const string = "Привет! Как дела?";

console.log( 'Фильтрация строки: "' + getVowels(string) + '"' );

function getVowels(string) {
	let vowels = '';
	const letters = [
		"а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"
	];

	for (let i = 0; i < string.length; i++) {
		const lowerCaseLetter = string[i].toLowerCase();

		if ( letters.includes(lowerCaseLetter) ) {
			vowels += lowerCaseLetter;
		}
	}

	return vowels;
}