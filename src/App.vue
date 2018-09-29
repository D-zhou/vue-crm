<template>
  <div id="app">
    <van-tabbar v-model="active" @change="change">
      <van-tabbar-item icon="shop" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="chat" dot to="/message">消息</van-tabbar-item>
      <van-tabbar-item icon="logistics" to="/post">物流</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/self">个人</van-tabbar-item>
    </van-tabbar>
    <transition enter-active-class="rotateInUpLeft" leave-active-class="rotateOutUpLeft">
      <router-view class="animated"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      righttext: "搜索",
      flag: false,
      active: 0,
      isLoading: true
    };
  },
  created(){
    var index = JSON.parse(sessionStorage.getItem('index')) || 0
    this.active = index
  },
  methods: {
    onClickLeft() {
      console.log("返回");
    },
    onClickRight() {
      console.log("按钮");
      if (!this.flag) {
        this.righttext = "取消";
        this.flag = true;
      } else {
        this.righttext = "搜索";
        this.flag = false;
      }
    },
    change(index){
      console.log(index)
      sessionStorage.setItem('index',JSON.stringify(index))
    }
  }
};
</script>

<style scoped>
#app {
  width: 100%;
  overflow-x:auto;
  overflow: hidden;
}

.van-tabbar {
  background-color: #e6e8fa;
}
.van-search {
  position: absolute;
  top: 46px;
  padding: 7px 87px;
  z-index: 999;
}
.v-leave-to {
  position:absolute;
}
/* .v-enter{
  transform: translateX(100%);
}

.v-leave-to{
  position:absolute;
  transform: translateX(-100%)
}
.v-enter-active,
.v-leave-active{
  transition: all .5s;
} */
</style>
