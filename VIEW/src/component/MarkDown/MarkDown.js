import MarkDown from './MarkDown.vue'
require('./MarkDown.directive');
export default function install(Vue){
	Vue.component('MarkDown', MarkDown);
}