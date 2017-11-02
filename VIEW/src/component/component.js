import MarkDown from './MarkDown/MarkDown'
import table from './table/table'
import row from './row/row'
import code from './code/code'
const options = {
	MarkDown,
	table,
	row,
	code
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