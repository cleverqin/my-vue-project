<template>
<div class="list mui-content">
  <form class="search-form">
    <div class="form-group">
      <input type="text" placeholder="搜索" v-model="keyWord">
    </div>
  </form>
  <div class="contact-list-box">
    <ul class="contact-list">
      <li class="contact-item" v-for="item in list">
        <router-link class="contact-item-link" :to="{ name: 'detail', params: { id: item.id }}">
          <div class="contact-pic-box">
            <img src="../assets/img/shuijiao.jpg" />
          </div>
          <div class="contact-msg-box">
            <div class="contact-row-box"><span class="contact-name">{{item.name}}</span><span class="contact-tag">{{item.tag}}</span></div>
            <div class="contact-row-box"><span class="contact-phone">{{item.phone}}</span></div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
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
<style >
  .contact-list-box{
    border-top: 1px solid #ddd;
  }
  .contact-item{
    padding: 10px 15px;
    background: #fff;
    position: relative;
  }
  .contact-item:after{
    position: absolute;
    right: 0;
    bottom: 0;
    left: 15px;
    height: 1px;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #919095;
  }
  .contact-item-link{
    display: block;
  }
  .contact-item-link:after{
    display: table;
    content: "";
    clear: both;
  }
  .contact-pic-box{
    width: 60px;
    height: 60px;
    float: left;
  }
  .contact-pic-box img{
    width: 60px;
    height: 60px;
    border-radius:50% ;
  }
  .contact-msg-box{
    margin-left: 65px;
    padding: 5px;
  }
  .contact-row-box{
    line-height: 25px;
  }
  .contact-name{
    font-size: 16px;
    color: #000000;
    margin-right: 15px;
    font-weight: bold;
  }
  .contact-tag{
    font-size: 12px;
    color: #999;
  }
  .contact-phone{
    font-size: 14px;
    color: #666;
  }
</style>
