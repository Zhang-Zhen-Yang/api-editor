import Vue from 'vue'
import App from './App.vue'
import comp from './component/component'
Vue.use(comp);
new Vue({
  el: '#app',
  render: h => h(App)
})
