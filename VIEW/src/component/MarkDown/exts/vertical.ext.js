export default function(code,marked){
	return `<div style="-webkit-writing-mode: vertical-rl;writing-mode: vertical-rl;text-indent:2em;width:100%;height:500px;overflow:auto;">${marked(code)}</div>`
	
}