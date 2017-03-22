import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Home from 'components/Home'
import List from 'components/List'
import Account from 'components/Account'
import Add from 'components/Add'
import Detail from 'components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/add',
      name: 'Add',
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
