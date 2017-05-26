<template>
  <mt-header title="通信录应用" fixed>
    <mt-button icon="back" @click="goBack" slot="left">返回</mt-button>
    <router-link slot="right" to="/add">
      <span class="iconfont icon-plus"></span>
    </router-link>
  </mt-header>
</template>
<script>
  export default {
    data () {
      return {}
    },
    methods:{
        goBack:function () {
          this.$router.go(-1)
        }
    }
  }
</script>
