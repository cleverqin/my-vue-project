<template>
  <mt-header title="通信录应用" fixed>
    <router-link to="/" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
    <router-link slot="right" to="/add">
      <span class="iconfont icon-plus"></span>
    </router-link>
  </mt-header>
</template>
<script>
  export default {
    data () {
      return {}
    }
  }
</script>
