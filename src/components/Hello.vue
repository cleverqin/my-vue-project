<template>
  <div class="hello">
    <div class="a-title">关于项目</div>
    <p>这是我这一个vue.js开源项目。这里使用了mint-ui，vue-router，和webstorage。这个项目的的数据交互我使用了HTML5的本地存储，这样即使你没有服务的情况也可以保存数据。当然你也可以进行更改和优化。如果你有好的意见和想法可以联系我。如果你感觉该项目对你有用请你点赞。感谢你的支持！</p>
    <div class="a-title">项目简介</div>
    <p>功能：该应用是一个简单的通信录管理的小应用。实现了通信录得基本增删改查。本应用的数据只做本地存储。</p>
    <p>开发日期：{{devDate}}</p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      devDate: '2017-03-22 ',
    }
  }
}
</script>
<style scoped>
  .hello{
    padding: 15px;
  }
  .hello .a-title{
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
  }
  .hello p{
    font-size: 15px;
    line-height: 1.75em;
    color: #696969;
    margin-bottom: 10px;
  }
</style>
