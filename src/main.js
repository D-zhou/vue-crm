// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router.js'
import VueResource from 'vue-resource'
import 'animate.css/animate.css'

// import Vant from 'vant';
import {
  Tabbar,
  TabbarItem ,
  Swipe,
  SwipeItem ,
  PullRefresh,
  Search,
  NavBar,
  Icon,
  Card,
  button ,
  Toast
} from 'vant';
import 'vant/lib/vant-css/index.css';

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad)
Vue.use(VueResource)

// Vue.use(Vant);
Vue.use(Swipe)
  .use(Tabbar)
  .use(PullRefresh)
  .use(Search)
  .use(NavBar)
  .use(TabbarItem )
  .use(SwipeItem )
  .use(Icon)
  .use(Card  )
  .use(button)
  .use(Toast)

Vue.config.productionTip = false
Vue.http.options.root = "http://127.0.0.1:5000/"
Vue.http.options.emulateJSON = true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: c => c(App),
})
