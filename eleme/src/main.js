// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import components from 'components'
import 'common/css/icon.css'
import 'common/less/common.less'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Object.keys(components).forEach(key=>{
	var name=key.replace(/(\w)/,(v)=>v.toUpperCase())
	Vue.component(`v${name}`,components[key])
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
