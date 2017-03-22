const POSTCARD="POSTCARD-LIST";
export  default {
  fetch:function () {
    return JSON.parse(window.localStorage.getItem(POSTCARD)||
    "[]")
  },
  save:function (list) {
    window.localStorage.setItem(POSTCARD,JSON.stringify(list))
  },
  savePostCard:function (postCard) {
    var list=this.fetch();
    list.push(postCard);
    this.save(list);
  },
  updatePostCard:function (postCard) {
    var list=this.fetch();
    for(var index in list){
      if(list[index].id==postCard.id){
        list[index]=postCard;
      }
    }
    this.save(list);
  },
  getPostCardById:function (id) {
    var list=this.fetch();
    var postCard={};
    list.forEach(function (item) {
      if(item.id==id){
        postCard=item;
      }
    })
    return postCard;
  },
  search:function (keyword) {
    var list=this.fetch();
    var reg = new RegExp(keyword,"g");
    var newList=[];
    list.forEach(function (item) {
      if(reg.test(item.name)||reg.test(item.phone)||reg.test(item.qq)||reg.test(item.tag)){
        newList.push(item)
      }
    })
    return newList;
  },
  delPostCardById:function (id) {
    var list=this.fetch();
    list.forEach(function (item) {
      if(item.id==id){
        list.splice(item.index-1,1);
      }
    })
    this.save(list);
  }
}
