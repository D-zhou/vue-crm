<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="shop" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="chat" dot to="/message">消息</van-tabbar-item>
      <van-tabbar-item icon="logistics" to="/post">物流</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/self">个人</van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
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
    }
  }
};
</script>

<style scoped>
.van-search {
  position: absolute;
  top: 46px;
  padding: 7px 87px;
  z-index: 999;
}
</style>
