import MarkDown from './MarkDown.vue'
import md from './MarkDown.directive'
//require('./MarkDown.directive');
export default function install(Vue){
	Vue.directive('md',md);
	Vue.component('markdown', MarkDown);
	
}