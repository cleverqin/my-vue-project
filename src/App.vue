<template>
  <div id="app">
    <Headers></Headers>
      <router-view class="view"></router-view>
    <Footers></Footers>
  </div>
</template>
<script>
  import Footers from './components/Footer'
  import Headers from './components/Header'
  export default {
    name: 'app',
    components:{
      Footers,
      Headers
    }
  }
</script>
