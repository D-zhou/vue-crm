import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import home from '../components/home'
import message from '../components/message'
import post from '../components/post'
import self from '../components/self'
import newList from '../components/newList'
import detail from '../components/detail'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home,
    },
    {
      path: '/message',
      component: message
    },
    {
      path: '/post',
      component: post
    },
    {
      path: '/self',
      component: self
    },
    {
      path: '/home/newList',
      component: newList
    },
    {
      path: '/home/detail/:id',
      component: detail
    }
  ]
})
