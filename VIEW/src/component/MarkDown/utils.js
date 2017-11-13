let utils = {
	unwrap:function(code){
		/*let firstIndex = code.indexOf('^^^');
		let lastIndex = code.lastIndexOf('^^^');
		if(firstIndex>-1&&(firstIndex!=lastIndex)){
			return code.replace('^^^','```',lastIndex).replace('^^^','```',firstIndex);
		}
		return code;*/
		return code.replace(/\^\^\^/mig,'```');

	}

}
export default utils;