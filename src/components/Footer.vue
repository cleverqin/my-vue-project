<template>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="index" href="#/">
        <div class="icon-box"><span class="iconfont icon-a01a"></span></div>
        首页
      </mt-tab-item>
      <mt-tab-item id="list" href="#/list">
        <div class="icon-box"><span class="iconfont icon-zixunlist"></span></div>
        列表页
      </mt-tab-item>
      <mt-tab-item id="account" href="#/account">
        <div class="icon-box"><span class="iconfont icon-iconfontweibiaoti1015"></span></div>
        个人中心
      </mt-tab-item>
    </mt-tabbar>
</template>
<script>
  export default {
    data () {
      return {
        selected:'index'
      }
    },
    watch:{
      '$route':'isTab'
    },
    created:function(){
      this.selected=this.$route.name;
    },
    methods:{
      isTab(){
        this.selected=this.$route.name;
      }
    }
  }
</script>
<style scoped>
  body .mint-tab-item.is-selected{
      background: transparent;
  }
</style>



