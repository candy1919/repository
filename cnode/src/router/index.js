import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import index from '../pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component:App,
      children:[
      	{
      		path:'/',
      		name: 'index',
      		//component:resolve => require(['../pages/index'], resolve)
      		component:index
      	}
      ]
    }
  ]
})
