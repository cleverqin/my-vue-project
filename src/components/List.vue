<template>
<div class="list mui-content">
  <form class="search-form">
    <div class="form-group">
      <input type="text" placeholder="搜索" v-model="keyWord">
    </div>
  </form>
  <ul class="mui-table-view mui-table-view-chevron">
    <li class="mui-table-view-cell mui-media" v-for="item in list">
      <router-link :to="{ name: 'detail', params: { id: item.id }}" class="mui-navigate-right">
        <img class="mui-media-object mui-pull-left" src="../assets/img/shuijiao.jpg">
        <div class="mui-media-body">
          {{item.name}}
          <p class="mui-ellipsis">{{item.phone}}</p>
        </div>
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


