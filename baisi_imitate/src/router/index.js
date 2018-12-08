import Vue from 'vue'
import Router from 'vue-router'
import Register from '../components/register/register.vue'
import Login from '../components/login/login.vue'
import Index from '../components/index/index.vue'
import New from '../components/new/new.vue'
import Attention from '../components/attention/attention.vue'
import Me from '../components/me/me.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path:'/new',
      name:'new',
      component:New
    },
    {
      path:'/attention',
      name:'attention',
      component:Attention
    },
    {
      path:'/me',
      name:'me',
      component:Me
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path:'/login',
      name:'login',
      component:Login
    }
  ]
})
