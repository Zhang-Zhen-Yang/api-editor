import row from './row';
import column from './column';
const directives = {
	row,
	column,
}
directives.install = (Vue) => {
	for (let directive in directives) {
		const directiveInstaller = directives[directive];
		if (directiveInstaller && directive !== 'install') {
			Vue.use(directiveInstaller);
		}
	}
};
if(window.Vue){
	for (let directive in directives) {
		const directiveInstaller = directives[directive];
		if (directiveInstaller && directive !== 'install') {
			window.Vue.use(directiveInstaller);
		}
	}
}
export default directives;