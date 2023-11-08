const string = "Привет! Как дела?";

console.log( 'Фильтрация строки: "' + getVowels(string) + '"' );

function getVowels(string) {
	let vowels = '';
	const letters = [
		"а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"
	];

	for (let i = 0; i < string.length; i++) {
		const currentLetter = string[i].toLowerCase();

		if (letters.includes(currentLetter)) {
			vowels = vowels + currentLetter;
		}
	}

	return vowels;
}