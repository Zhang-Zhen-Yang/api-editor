import Vue from 'vue'
import App from './App.vue'
require('./directive/markDown');
new Vue({
  el: '#app',
  render: h => h(App)
})
