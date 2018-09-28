// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router.js'
// import Vant from 'vant';
import {
  Tabbar,
  TabbarItem ,
  Swipe,
  SwipeItem ,
  PullRefresh,
  Search,
  NavBar,
  Icon
} from 'vant';
import 'vant/lib/vant-css/index.css';
// import 'vant/packages/vant-css/src/base.css';
// import 'vant/packages/vant-css/src/button.css';
// import 'vant/packages/vant-css/src/checkbox.css';
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad)

// Vue.use(Vant);
Vue.use(Swipe)
  .use(Tabbar)
  .use(PullRefresh)
  .use(Search)
  .use(NavBar)
  .use(TabbarItem )
  .use(SwipeItem )
  .use(Icon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: c => c(App),
})
