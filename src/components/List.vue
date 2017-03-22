<template>
<div class="list">
  <form class="search-form">
    <div class="form-group">
      <input type="text" placeholder="搜索" v-model="keyWord">
    </div>
  </form>
  <ul>
    <li class="list-item" v-for="item in list">
      <router-link class="list-card" :to="{ name: 'detail', params: { id: item.id }}">
        <div class="row-left"><img src="../assets/img/logo.png"></div>
        <div class="row-right">
          <div class="name-row">{{item.name}}</div>
          <div class="phone-row">{{item.phone}}</div>
        </div>
        <span class="right-icon iconfont icon-tubiao04-copy"></span>
      </router-link>
    </li>
  </ul>
</div>
</template>
<script>
  import Store from '../store'
  export default {
    name: 'list',
    data () {
      return {
        keyWord: '',
        list:[]
      }
    },
    created:function () {
      this.list=Store.fetch();
    },
    watch: {
      keyWord : {
        handler:function () {
          this.list=Store.search(this.keyWord);
        },
        deep:true
      }
    },
    methods:{

    }
  }
</script>


