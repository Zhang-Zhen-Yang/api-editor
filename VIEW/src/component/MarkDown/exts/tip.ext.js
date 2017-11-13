import utils from '../utils.js'
export default function(code,marked){
	let localCode = utils.unwrap(code);
	return `<div class="tip">
	${marked(localCode)}
	</div>`
}