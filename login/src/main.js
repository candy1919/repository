// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import vHeader from './components/vHeader'

Vue.config.productionTip = false
router.beforeEach(({meta,path},from,next)=>{
        var {auth=true}=meta;
        var isLogin=Boolean(store.state.user.id)
        if(auth&&!isLogin&&path!='/login'){
           next('/login');
        }
        next();
      })
// 全局注册组件
Vue.component('vHeader',vHeader)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
