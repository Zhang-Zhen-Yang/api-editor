import utils from '../utils.js'
export default function(code,marked){
	let css = code.match(/\w*?\s*?\{.*?\}/mig);
	let localCode = utils.unwrap(code);
	let styles = {};
	if(css){
		css.forEach((item)=>{
			let execArray = (/(\w+?)\s*?{(.*?)}/).exec(item);
			if(execArray){
				// console.log('execArray',execArray);
				localCode = localCode.replace(item,'');
				styles[execArray[1]] = execArray[2]
			}
		})
	}

	let markedCode = marked(localCode);
	for(let i in styles){
		let reg = new RegExp(`(<${i})([\\W])`,'mig');
		markedCode = markedCode.replace(reg, '$1 style="'+styles[i]+'" $2');
	}
	return markedCode;
}