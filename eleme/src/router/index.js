import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      children:[
      	{
      		path:'/seller',
      		component:resolve => require(['@/components/content/seller'], resolve)
      	},
      	{
      		path:'/goods',
      		component:resolve => require(['@/components/content/goods'], resolve)
      	},
      	{
      		path:'/ratings',
      		component:resolve => require(['@/components/content/ratings'], resolve)
      	},
      ]
    }
  ]
})
