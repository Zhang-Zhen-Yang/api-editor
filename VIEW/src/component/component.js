import MarkDown from './MarkDown/MarkDown'
import table from './table/table'
import row from './row/row'
import code from './code/code'
import clipboard from './clipboard/clipboard'
import center from './center/center'
import aspect from './aspect/aspect'
import qrcode from './qrcode/qrcode'
import tabs from './tabs/tabs'
import snackbar from './snackbar/snackbar'
import canvas from './canvas/canvas'
import resize from './resize/resize'
const options = {
	MarkDown,
	table,
	row,
	code,
	clipboard,
	center,
	aspect,
	qrcode,
	tabs,
	snackbar,
	canvas,
	resize
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