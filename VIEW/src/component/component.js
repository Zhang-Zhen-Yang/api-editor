import MarkDown from './MarkDown/MarkDown'
import IFrame from './IFrame/IFrame'
import Dynamic from './Dynamic/Dynamic'
const options = {
	MarkDown,
	IFrame
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