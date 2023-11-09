const path = "/users/download/index.html";

console.log( 'Имеется ли в конце расширение .html в пути: "' + path + '"? ' + "\n" + isHtml(path) );

function isHtml(path, reqExt = '.html') {
	let pathExt = path.slice('-' + reqExt.length );

	return pathExt === reqExt;
}