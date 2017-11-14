import utils from '../utils.js'
export default function(code,marked,type){
	let localCode = utils.unwrap(code);
	return `<div class="tip tip-${type}">
	${marked(localCode)}
	</div>`
}