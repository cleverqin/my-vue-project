<template>
<div class="account">
  <div class="pic-imgBox">
    <img src="../assets/img/bg.jpg" id="topBg">
    <div class="img-box"><img src="../assets/img/header.png"></div>
  </div>
  <ul class="msg-list">
    <li><span class="tag-label">昵称：</span><span class="tag-txt">似水流年</span></li>
    <li><span class="tag-label">QQ：</span><span class="tag-txt">705597001</span></li>
    <li><span class="tag-label">邮箱：</span><span class="tag-txt">705597001@qq.com</span></li>
    <li><span class="tag-label">GitHub：</span><a class="tag-txt" href="https://github.com/yunchen132" target="_blank">https://github.com/yunchen132</a></li>
  </ul>
  <div class="title">如果本项目对你有，欢迎支付宝打赏</div>
  <div class="support-box"><img src="../assets/img/support.png"></div>
</div>
</template>
<style scoped>
  .pic-imgBox{
    position: relative;
  }
  #topBg{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
  }
  .msg-list{
    padding: 15px;
  }
  .msg-list li{
    line-height: 30px;
    font-size: 14px;
    border-bottom: 1px solid #ccc;
    padding: 5px;
  }
  .msg-list li .tag-txt{
    font-size: 14px;
  }
  .title{
    text-align: center;
    font-size: 12px;
    color: #666;
  }
  .support-box img{
    display: block;
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }
  .pic-imgBox{
    padding: 30px;
    background-size:  100% auto;
  }
</style>

