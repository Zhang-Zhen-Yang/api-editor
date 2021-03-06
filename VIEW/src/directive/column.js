export default function rowDirective(Vue){
	Vue.directive('column',(el, binding,vnode) => {
		if(binding.modifiers && binding.modifiers.left){
			el.style.float = 'left';
		}
		if(binding.modifiers && binding.modifiers.right){
			el.style.float = 'right';
		}
		let width = binding.value;
		if(typeof width == 'number'){
			width = width*100+'%';
		}
		el.style.width = (width || '100%');
	});
}
