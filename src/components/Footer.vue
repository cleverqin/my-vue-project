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
      <mt-tab-item id="user" href="#/account">
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
    }
  }
</script>



