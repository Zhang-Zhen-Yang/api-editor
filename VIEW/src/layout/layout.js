import struct from './struct/struct'
import header from './header/header'
import nav from './nav/nav'
import aside from './aside/aside'
import remote from './remote/remote'
import scrolltop from './scrolltop/scrolltop'
const options = {
	struct,
	header,
	nav,
	aside,
	scrolltop,
	remote
}
options.install = (Vue) => {
	for (let component in options) {
		const componentInstaller = options[component];
		if (componentInstaller && component !== 'install') {
			Vue.use(componentInstaller);
		}
	}
};
if(window.Vue){
	for (let component in options) {
		const componentInstaller = options[component];
		if (componentInstaller && component !== 'install') {
			window.Vue.use(componentInstaller);
		}
	}
}
export default options;