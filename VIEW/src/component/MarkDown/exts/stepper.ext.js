export default function(code,marked){
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

}