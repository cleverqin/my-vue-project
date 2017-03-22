import Vue from 'vue'
import App from './App'
import router from './router'
import 'mint-ui/lib/style.css'
import 'assets/css/common.css'
import Mint from 'mint-ui';
Vue.use(Mint);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
