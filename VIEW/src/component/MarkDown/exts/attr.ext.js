import utils from '../utils.js'
export default function(code,marked){
	let attrs = code.match(/[\w-]+?\s*?\[.*?\]/mig);
	let localCode = utils.unwrap(code);
	console.log('attrs', attrs);
	
	let attrMap = {};
	if(attrs){
		attrs.forEach((item)=>{
			let execArray = (/([\w-]+?)\s*?\[(.*?)]/).exec(item);
			console.log(execArray);
			if(execArray){
				let attrItem = execArray[2].split(',').filter((item)=>{
					return !!item.trim();
				})
				let maplist = attrItem.map((item)=>{
					let itemMap = item.split('=');
					if(itemMap.length>1){
						return {attr: itemMap[0], value:itemMap[1]}
					}
					return null;
				}).filter((item)=>{ return !!item; });

				if(maplist.length>0){
					attrMap[execArray[1]] = maplist.map((item)=>{return `${item.attr}="${item.value}"`}).join(' ')
					localCode = localCode.replace(item,'');
				}
				
			}
		})
	}
	// console.log(attrMap);
	let markedCode = marked(localCode);
	for(let i in attrMap){
		let reg = new RegExp(`(<${i})([\\W])`,'mig');
		markedCode = markedCode.replace(reg, `$1 ${attrMap[i]}" $2`);
	}
	return markedCode;
}