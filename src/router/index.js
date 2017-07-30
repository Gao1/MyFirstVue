import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home'
import Fengjing from '../components/fengjing/fengjing'
import Renwen from '../components/renwen/renwen'
import Jianzhu from '../components/jianzhu/jianzhu'
import Zhoubian from '../components/zhoubian/zhoubian'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    }, {
        path: '/home',
        name: 'home',
        component: Home
    }, {
    	path: '/fengjing',
    	name: 'fengjing',
    	component: Fengjing
    }, {
      path: '/renwen',
      name: 'renwen',
      component: Renwen
    }, {
      path: '/jianzhu',
      name: 'jianzhu',
      component: Jianzhu
    }, {
      path: '/zhoubian',
      name: 'zhoubian',
      component: Zhoubian
    }
  ]
})
