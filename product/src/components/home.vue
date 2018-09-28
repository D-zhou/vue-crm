<template>
  <div>
    <van-nav-bar title="首页" left-text="返回" :right-text="righttext" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <!-- <router-link to='/login'>login</router-link> -->
    <van-search v-show="flag" placeholder="请输入搜索关键词" v-model="value" />
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" loosing-text="下拉加载...">
      <div class="myswipe">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </van-pull-refresh>
    <!-- <router-view></router-view> -->
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg",
        "https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg",
        "https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg",
        "https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg"
      ],
      isLoading: true,
      value: "",
      righttext: "搜索",
      flag: false,
    };
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    },
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
      };
    }
  }
};
</script>

<style scoped>
.myswipe {
  padding-bottom: 30px;
}
.myswipe .van-swipe {
  cursor: pointer;
}
.myswipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
  line-height: 150px;
}
.myswipe .van-swipe-item:nth-child(even) {
  background-color: #39a9ed;
}
.myswipe .van-swipe-item:nth-child(odd) {
  background-color: #66c6f2;
}
.myswipe .van-swipe img {
  width: 100%;
  height: 240px;
  display: block;
  padding: 30px 60px;
  box-sizing: border-box;
  background-color: #fff;
  pointer-events: none;
}
.myswipe--vertical {
  height: 200px;
}
.myswipe--vertical .van-swipe-item {
  line-height: 200px;
}
.van-search {
  position: absolute;
  top: 46px;
  padding: 7px 87px;
  z-index: 999;
}
</style>