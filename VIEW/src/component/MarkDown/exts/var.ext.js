export default function(code, marked){
	let vars = code.match(/\w+?\s*?=\s*?\S+?(;|\s)/mig);
	if(vars){
		vars.forEach((item)=>{
			let matchs = (/(\S+?)\s*?=\s*?(\S+?)/mig).exec(item);
			console.log(matchs);
		})
	}
	console.log(vars);

	return ''
}