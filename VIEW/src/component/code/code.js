import code from './code.vue';
import codeDirective from './code.directive'
export default function install(Vue){
	Vue.component('v-code',code);
	Vue.directive('code',codeDirective);
}