let obj = {
	// 文本
	text:(ctx,item)=>{
		let options = {
			fillStyle:item.color||'#000000',
			font:[(item.fontSize||16)+'px',item.fontFamily||'微软雅黑'].join(' '),
			strokeStyle:item.strokeColor||'rgba(0,0,0,0)',
			lineWidth:(item.strokeWidth||0),
			shadowOffsetX:item.shadowOffsetX||0,
			shadowOffsetY:item.shadowOffsetY||0,
			shadowBlur:item.shadowBlur||0,
			shadowColor:item.shadowColor||'rgba(0,0,0,0.5)',
			globalAlpha:item.opacity==undefined?1:item.opacity,
		};
		let x=item.x||10,
			y=item.y||10;
		obj.setOptions(ctx, options)
		// console.log('time',JSON.stringify(item));
		if(item.rotate){
			ctx.save();
			ctx.translate(x,y);
			ctx.rotate(Math.PI/180*item.rotate);			
			if(options.lineWidth>0){
				ctx.strokeText(item.value,0,0);
				ctx.shadowColor='rgba(0,0,0,0)'
			}
			ctx.fillText(item.value,0,0);
			ctx.restore();
		}else{
			if(options.lineWidth>0){
				ctx.strokeText(item.value,x,y);
				ctx.shadowColor='rgba(0,0,0,0)'
			}
			ctx.fillText(item.value,x,y);
		}
	},

	//图片
	image:(ctx,item)=>{
		if(!item.imgObj) return;
		// console.log('item',JSON.stringify(item));
		let options = {
			shadowOffsetX:item.shadowOffsetX||0,
			shadowOffsetY:item.shadowOffsetY||0,
			shadowBlur:item.shadowBlur||0,
			shadowColor:item.shadowColor||'#000000',
			globalAlpha:item.opacity==undefined?1:item.opacity,
		}
		obj.setOptions(ctx, options)

		let x = item.x||0,
			y = item.y||0,
			clipX = item.clipX||0,
			clipY = item.clipY||0,
			clipW = item.clipW||(item.imgObj.width - clipX),
			clipH = item.clipH||(item.imgObj.height - clipY),
			w,h;
			if((item.w == undefined)||(item.w == 'auto')){
				if((item.h == undefined)||(item.h == 'auto')){
					w = item.imgObj.width;
					h = item.imgObj.height;
				}else{
					w = clipW/clipH*item.h;
					h = item.h;
				}
			}else{
				w = item.w;
				if((item.h == undefined)||(item.h == 'auto')){
					h = clipH/clipW*w;
				}else{
					h = item.h;
				}
			}
		console.log('img ctx',ctx);
		if(item.rotate){
			ctx.save();
			ctx.translate(x,y);
			ctx.rotate(Math.PI/180*item.rotate);			
			ctx.drawImage(item.imgObj,clipX,clipY,clipW,clipH,0,0,w,h);
			ctx.restore();
		}else{
			ctx.drawImage(item.imgObj,clipX,clipY,clipW,clipH,x,y,w,h);
		}
		
	},
	//四边形
	rect:(ctx,item)=>{
		// console.log('item',JSON.stringify(item));
		let options = {
			shadowOffsetX:item.shadowOffsetX||0,
			shadowOffsetY:item.shadowOffsetY||0,
			shadowBlur:item.shadowBlur||0,
			shadowColor:item.shadowColor||'rgba(0,0,0,0.5)',
			globalAlpha:item.opacity==undefined?1:item.opacity,
			fillStyle:item.fillColor||'#000000',
			strokeStyle:item.strokeColor||'#000000',
			lineWidth:(item.strokeWidth||0),
		}
		obj.setOptions(ctx, options)

		let x = item.x||0,
			y = item.y||0,
			w = item.w||0,
			h = item.h||0;
		// console.log([clipX,clipY,x,y,clipW,clipH,w,h]);
		if(item.rotate){
			ctx.save();
			ctx.translate(x,y);
			ctx.rotate(Math.PI/180*item.rotate);			
			if(options.lineWidth>0){
				ctx.strokeRect(0,0,w,h);
				ctx.shadowColor='rgba(0,0,0,0)'
			}
			ctx.fillRect(0,0,w,h);
			ctx.restore();
		}else{
			if(options.lineWidth>0){
				ctx.strokeRect(x,y,w,h);
				ctx.shadowColor='rgba(0,0,0,0)'
			}
			ctx.fillRect(x,y,w,h);
		}
	},
	// 圆/圆弧
	arc:(ctx, item)=>{
		let options = {
			shadowOffsetX:item.shadowOffsetX||0,
			shadowOffsetY:item.shadowOffsetY||0,
			shadowBlur:item.shadowBlur||0,
			shadowColor:item.shadowColor||'rgba(0,0,0,0.5)',
			globalAlpha:item.opacity==undefined?1:item.opacity,
			fillStyle:item.fillColor||'#000000',
			strokeStyle:item.strokeColor||'#000000',
			lineWidth:(item.strokeWidth||0),
		}
		obj.setOptions(ctx, options)

		let x = item.x||0,
			y = item.y||0,
			r = item.r||0,
			startAngle = item.startAngle||0,
			endAngle = item.endAngle==undefined?360:item.endAngle,
			counterclockwise = item.counterclockwise?true:false;
		console.log([x,y,r,startAngle,endAngle]);

		ctx.beginPath();
		if(item.rotate){
			ctx.save();
			ctx.translate(x,y);
			ctx.rotate(Math.PI/180*item.rotate);			
			if(options.lineWidth>0){
				ctx.strokeRect(0,0,w,h);
				ctx.shadowColor='rgba(0,0,0,0)'
			}
			ctx.fillRect(0,0,w,h);
			ctx.restore();
		}else{
			if(options.lineWidth>0){
				ctx.arc(x,y,r,startAngle*Math.PI/180,endAngle*Math.PI/180,counterclockwise);
				ctx.stroke();
			}
			ctx.arc(x,y,r,startAngle*Math.PI/180,endAngle*Math.PI/180,counterclockwise);
		}
	},

	// 线段
	line:(ctx, item)=>{
		let options = {
			shadowOffsetX:item.shadowOffsetX||0,
			shadowOffsetY:item.shadowOffsetY||0,
			shadowBlur:item.shadowBlur||0,
			shadowColor:item.shadowColor||'rgba(0,0,0,0.5)',
			globalAlpha:item.opacity==undefined?1:item.opacity,
			strokeStyle:item.lineColor||'#000000',
			lineWidth:(item.lineWidth == undefined)?1:item.lineWidth,
		}
		obj.setOptions(ctx, options)

		let x1,y1,x2,y2;
		if(item.start){
			x1 = item.start.x||0;
			y1 = item.start.y||0;
		}else{
			x1 = 0;
			y1 = 0;
		}
		if(item.end){
			x2 = item.end.x||0;
			y2 = item.end.y||0;
		}else{
			x2 = 0;
			y2 = 0;
		}
		//x1 = obj.setDrawNumber(x1);
		//x2 = obj.setDrawNumber(x2);
		if((options.lineWidth)%2 > 0){
			y1 = obj.setDrawNumber(y1);
			y2 = obj.setDrawNumber(y2);
		}
		if((x2-x1)%2 > 0){
			x1 = obj.setDrawNumber(x1);
			x2 = obj.setDrawNumber(x2);
		}
		
		console.log('[x1,x2,y1,y2]',[x1,x2,y1,y2]);
		ctx.beginPath();
		if(item.rotate){
			ctx.save();
			ctx.translate(x,y);
			ctx.rotate(Math.PI/180*item.rotate);			
			ctx.moveTo(0,0);
			ctx.lineTo(x2-x1,y2-y1)
			ctx.stroke();
			ctx.restore();
		}else{
			ctx.moveTo(x1,y1);
			ctx.lineTo(x2,y2)
			ctx.stroke();
		}
	},

	// 路径
	path:(ctx, item)=>{
		let options = {
			shadowOffsetX:item.shadowOffsetX||0,
			shadowOffsetY:item.shadowOffsetY||0,
			shadowBlur:item.shadowBlur||0,
			shadowColor:item.shadowColor||'rgba(0,0,0,0.5)',
			globalAlpha:item.opacity==undefined?1:item.opacity,
			strokeStyle:item.strokeColor||'#000000',
			lineWidth:(item.strokeWidth == undefined)?0:item.strokeWidth,
			fillStyle:(item.fillColor == undefined)?'rgba(0,0,0,0)':item.fillColor,
		}
		obj.setOptions(ctx, options)

		let path = item.path||'';
		let drawActions = obj.getDrawActions(path);


		drawActions.forEach((item)=>{
			let action = item.action;
			switch(action){
				case 'M':
					ctx.beginPath();
					ctx.moveTo.apply(ctx,item.points);
					break;
				case 'L':ctx.lineTo.apply(ctx,item.points);
					break;
				case 'A':ctx.arcTo.apply(ctx,item.points);
					break;
				case 'B':ctx.bezierCurveTo.apply(ctx,item.points);
					break;
				case 'Q':ctx.quadraticCurveTo().apply(ctx,item.points);
					break;
				case 'Z':ctx.closePath();
			}
		})
		ctx.stroke();
		ctx.fill();

		// console.log('drawActions',drawActions);
	},

	// 设置ctx
	setOptions:(ctx,options)=>{
		for(let i in options){
			let val = options[i]
			if(i == 'fillStyle' || i == 'strokeStyle'){
				val = obj.parseColor(ctx,val);
			}
			ctx[i] = val;
		}
	},

	//解析颜色
	parseColor:(ctx,val)=>{
		if(typeof val == 'string'){
			return val;
		}else{
			try{
				let color = '';
				switch(val.type){
					case 'line':
						let linearColor = ctx.createLinearGradient(val.start.x, val.start.y, val.end.x, val.end.y);
						val.colorStop.forEach((item)=>{
							linearColor.addColorStop(item.offset,item.color);
						})
						color =  linearColor;

					break;
					case 'radial':
						let radialColor = ctx.createRadialGradient(val.start.x, val.start.y, val.start.r, val.end.x, val.end.y, val.end.r);
						val.colorStop.forEach((item)=>{
							radialColor.addColorStop(item.offset,item.color);
						})
						color = radialColor;
					break;
				}
				return color;

			}catch(e){
				return '#000000';
			}
		}
	},

	//
	setDrawNumber:(val)=>{
		let intVal = parseInt(val);
		let flostVal = val - intVal;
		return intVal+0.5		
	},

	getDrawActions:(path)=>{
		let pathItem = path.match(/[MLQBZA][^A-Z]*/mig);
		console.log('pathItem',pathItem);
		let drawActions = [];

		if(pathItem){
			pathItem.forEach(item => {
				let numbers = item.match(/\D*?\d+\D*?/mig);
				if(numbers){

					let drawDction = {}
					numbers.forEach((val,index)=>{
						if(index==0){
							let firstNumber = (/\s*?(\w)\D*?(\d+)\D*?/mig).exec(val);
							if(firstNumber){
								drawDction.action = firstNumber[1];
								drawDction.points = [firstNumber[2]]
							}
							// console.log('firstNumber',firstNumber);
						}else{
							let otherNumber = (/\D*?(\d+)\D*?/mig).exec(val);
							// console.log('otherNumber',otherNumber); 
							drawDction.points.push(otherNumber[1])
						}
					});
					drawActions.push(drawDction);
				}else{
					if(item.indexOf('Z')>-1){
						drawActions.push({
							action:'Z'
						})
					}
				}
				// console.log('numbers',numbers);
			})
		}
		return drawActions;
		
	}

}
export default obj;