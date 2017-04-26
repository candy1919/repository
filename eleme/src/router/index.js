import Vue from 'vue'
import Router from 'vue-router'
import goods from '@/components/content/goods'
Vue.use(Router)

export default new Router({
  routes: [
        {
          path:'/',
          component:resolve => require(['@/components/content/goods'], resolve)
        },
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
})
