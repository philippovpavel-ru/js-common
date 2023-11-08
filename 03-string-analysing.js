const path = "/users/download/index.html";

console.log( 'Имеется ли в конце расширение .html в пути: "' + path + '"? ' + isHtml(path) );

function isHtml(path, reqExt = '.html') {
	let pathExt = path.slice(-5);

	if ( pathExt == reqExt ) {
		return true;
	}

	return false;
}