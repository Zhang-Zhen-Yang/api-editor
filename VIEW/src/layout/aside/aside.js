import aside from './aside.vue'
//require('./MarkDown.directive');
export default function install(Vue){
	Vue.component('struct-aside', aside);	
}