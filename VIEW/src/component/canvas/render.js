let obj = {
	text:(ctx,item)=>{
		console.log('ctx',ctx);
		console.log('time',JSON.stringify(item));
		ctx.fillText(item.value,100,100);
	},
	image:(ctx,item)=>{
		console.log('ctx',ctx);
		let x = item.x||0,
			y = item.y||0,
			clipX = item.clipX||0,
			clipY = item.clipY||0,
			clipW = item.clipW||(item.imgObj.width - clipX),
			clipH = item.clipH||(item.imgObj.height - clipY),
			w,h;
			if((typeof item.w == undefined)||(item.w == 'auto')){
				if((typeof item.h == undefined)||(item.h == 'auto')){
					w = item.imgObj.width;
					h = item.imgObj.height;
				}else{
					w = item.imgObj.width/item.imgObj.height*item.h;
					h = item.h;
				}
			}else{
				w = item.w;
				if((typeof item.h == undefined)||(item.h == 'auto')){
					h = item.imgObj.height/item.imgObj.width*w;
				}else{
					h = item.h;
				}
			}
		console.log([clipX,clipY,x,y,clipW,clipH,w,h]);
		ctx.drawImage(item.imgObj,clipX,clipY,clipW,clipH,x,y,w,h);
	},
	rect:(ctx,item)=>{

	}

}
export default obj;