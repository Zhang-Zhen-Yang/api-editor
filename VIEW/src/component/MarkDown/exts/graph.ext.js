export default function(code){
	let translateCode = code.replace(/&lt;/mig,'<');
	// console.log('translateCode',translateCode);
	let reg = /\[.*?image.*?\]/mig; 
	let match = (translateCode).match(reg);
	let images = [];
	if(match){
		match.forEach((item)=>{
			let itemMatch = (/image.*?"(.*?)".*?imgwidth.*?"(.*?)".*?imgheight.*?"(.*?)"/mig).exec(item);
			if(itemMatch){
				images.push({
					path:itemMatch[1],
					width:itemMatch[2],
					height:itemMatch[3],
				})
			}
		})
	}
	// console.log('match',match);
	return window.Viz(translateCode,{ images});
}