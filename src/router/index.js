import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Home from 'components/Home'
import List from 'components/List'
import Account from 'components/Account'
import Add from 'components/Add'
import Detail from 'components/Detail'
Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Hello
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    }
    ,
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ],
  linkActiveClass:'active'
})
