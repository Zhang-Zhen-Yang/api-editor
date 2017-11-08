
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

		//竖直文本
		'vertical':function(code){
			return `<div style="-webkit-writing-mode: vertical-rl;writing-mode: vertical-rl;text-indent:2em;width:100%;height:500px;overflow:auto;">${marked(code)}</div>`
		},

		//步骤条
		stepper:function(code){
			let checked = `<div style="width: 8px;height: 14px;position: absolute;
			top: 4px;
			left: 9px;
			border: 2px solid #ffffff;
			border-top: 0;
			border-left: 0;
			transform: rotate(45deg)">
			</div>`;

			let reg = /\[.*?\]/mig;
			let res = code.match(reg);
			let stepnode = [];
			if(res){
				res.forEach((item)=>{
					let status = (/status\s*=\s*(.*?)\s*(,|])/).exec(item);
					let text = (/text\s*=\s*(.*?)\s*(,|])/).exec(item);
					stepnode.push({ status:status?status[1]:'unknow', text:text?text[1]:'unknow' });
				})
			}
			let nodeEle = stepnode.map((item,index)=>{
				return `<div style="text-align:center;">
					<div style="width:25px;height:25px;border-radius:50%;position:relative;display:inline-block;
					background-color:${item.status=='complete'?'#008DFF':(item.status=='current'?'#008DFF':'#aaaaaa')};line-height:25spx;text-align:center;color:white;">
						${ item.status=='complete'?checked:(index+1) }
					</div>
					<div>${item.text}</div>
				</div>`;
			})
			return `<div style="width:100%;padding:10px 10px;display:flex;justify-content: space-between;font-size:16px;">
						${nodeEle.join('<div style="padding:5px 18px;flex:1;"><hr></div>')}
			</div>`
		},
		css:function(code){
			let css = code.match(/\{.*?\}/);
			let localCode = code;
			if(css){
				localCode = localCode.replace(css[0],'')
				css = css[0].slice(1,-1);
			}
			
			console.log('css',css);
			let markedCode = marked(localCode);

			// let elements = markedCode.match(/\<p\>[\s\S]*?\<\/p\>/mig);

			/*let imgElements = markedCode.match(/\<img[\s\S]*?\\>/mig);
			let tableElements = markedCode.match(/\<table\>[\s\S]*?\<\/table\>/mig);
			if(imgElements){
				imgElements.forEach((item)=>{

				})
			}*/
			if(css){
				markedCode = markedCode.replace(/\<(img|table|blockquote|a|h1|h2|h3|h4|h5|h6|strong|em|hr|pre)/mig, '$& style="'+css+'"');
			}


			console.log(markedCode);
			return markedCode;
		}
	}

  for(let item in ext ){
		obj[item] = ext[item];
	}
}
export default extend;