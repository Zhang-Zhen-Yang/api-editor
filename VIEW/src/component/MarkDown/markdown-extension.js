
function extend(obj,marked){
	function widthFun(width){
		return function(code){
			return `<div style="display:inline-block;vertical-align:top;width:${width*100}%;">${marked(code.replace(/\^\^\^/mig,'```'))}</div>`
		}
	}

	const ext = {
		'0.05':widthFun(0.05),
		'0.1':widthFun(0.1),
		'0.15':widthFun(0.15),
		'0.2':widthFun(0.2),
		'0.25':widthFun(0.25),
		'0.3':widthFun(0.3),
		'0.35':widthFun(0.35),
		'0.4':widthFun(0.4),
		'0.45':widthFun(0.45),
		'0.5':widthFun(0.5),
		'0.55':widthFun(0.55),
		'0.6':widthFun(0.6),
		'0.65':widthFun(0.65),
		'0.7':widthFun(0.7),
		'0.75':widthFun(0.75),
		'0.8':widthFun(0.8),
		'0.85':widthFun(0.85),
		'0.9':widthFun(0.9),
		'0.95':widthFun(0.95),
		'1':widthFun(1),

		'width0.05':widthFun(0.05),
		'width0.1':widthFun(0.1),
		'width0.15':widthFun(0.15),
		'width0.2':widthFun(0.2),
		'width0.25':widthFun(0.25),
		'width0.3':widthFun(0.3),
		'width0.35':widthFun(0.35),
		'width0.4':widthFun(0.4),
		'width0.45':widthFun(0.45),
		'width0.5':widthFun(0.5),
		'width0.55':widthFun(0.55),
		'width0.6':widthFun(0.6),
		'width0.65':widthFun(0.65),
		'width0.7':widthFun(0.7),
		'width0.75':widthFun(0.75),
		'width0.8':widthFun(0.8),
		'width0.85':widthFun(0.85),
		'width0.9':widthFun(0.9),
		'width0.95':widthFun(0.95),
		'width1':widthFun(1),
		'vertical':function(code){
			return `<div style="-webkit-writing-mode: vertical-rl;writing-mode: vertical-rl;text-indent:2em;">${marked(code)}</div>`
		}
	}

  for(let item in ext ){
		obj[item] = ext[item];
	}
}
export default extend;