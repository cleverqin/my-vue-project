<template>
  <div id="app">
    <Headers ></Headers>
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
    <Footers sel="selected"></Footers>
  </div>
</template>
<script>
  import Footers from './components/Footer'
  import Headers from './components/Header'
  export default {
    name: 'app',
    data () {
      return {
        transitionName: 'slide-left',
        selected:"index"
      }
    },
    beforeRouteUpdate (to, from, next) {
      let isBack = this.$router.isBack;
      console.log(11)
      if (isBack) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
      next()
    },
    components:{
      Footers,
      Headers
    }
  }
</script>
<style>
  .child-view {
    position: absolute;
    width:100%;
    transition: all .8s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(50px, 0);
    transform: translate(50px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-50px, 0);
    transform: translate(-50px, 0);
  }
</style>
