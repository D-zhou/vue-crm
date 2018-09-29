<template>
  <div id="home">
    <van-nav-bar title="首页" left-text="返回" :right-text="righttext" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <transition>
      <van-search v-show="flag" placeholder="请输入搜索关键词" v-model="value" />
    </transition>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" loosing-text="下拉加载...">
      <div class="myswipe">
        <van-swipe :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image.img" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <section class="van-doc-demo-section demo-icon">
        <section class="van-doc-demo-block">
          <router-link tag='div' class="van-col van-col--8" to="/home/newList"><i class="van-icon van-icon-close">
              <!----></i><span>close</span></router-link>
          <router-link tag='div' class="van-col van-col--8" to="/newList"><i class="van-icon van-icon-upgrade">
              <!----></i><span>upgrade</span></router-link>
          <router-link tag='div' class="van-col van-col--8" to="/newList"><i class="van-icon van-icon-add-o">
              <!----></i><span>add-o</span></router-link>
          <router-link tag='div' class="van-col van-col--8" to="/newList"><i class="van-icon van-icon-passed">
              <!----></i><span>passed</span></router-link>
          <router-link tag='div' class="van-col van-col--8" to="/newList"><i class="van-icon van-icon-chat">
              <!----></i><span>chat</span></router-link>
          <router-link tag='div' class="van-col van-col--8" to="/newList"><i class="van-icon van-icon-question">
              <!----></i><span>question</span></router-link>
          <router-link tag='div' class="van-col van-col--8" to="/newList"><i class="van-icon van-icon-clock">
              <!----></i><span>clock</span></router-link>
          <router-link tag='div' class="van-col van-col--8" to="/newList"><i class="van-icon van-icon-gold-coin">
              <!----></i><span>gold-coin</span></router-link>
          <router-link tag='div' class="van-col van-col--8" to="/newList"><i class="van-icon van-icon-play">
              <!----></i><span>play</span></router-link>
        </section>
      </section>
    </van-pull-refresh>
  </div>
</template>

<script>
import { Toast } from "vant";
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
      flag: false
    };
  },
  created() {
    this.getSwipe();
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
      }
    },
    getSwipe() {
      this.$http.get("api/getlunbo").then(result => {
        // console.log(result.body);
        const { status, message } = result.body;
        if (status == 0) {
          this.images = message;
        } else {
          Toast("为获取到数据");
        }
      });
    }
  }
};
</script>

<style scoped>
#home {
  width: 100%;
}
.van-nav-bar {
  background-color: #e6e8fa;
}
/* 轮播图 */
.myswipe {
  width: 100%;
  padding-bottom: 30px;
  overflow: hidden;
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
.myswipe .van-swipe img {
  width: 100%;
  height: 240px;
  display: block;
  /* padding: 0 5px; */
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
/* 搜索 */
.van-search {
  position: absolute;
  top: 46px;
  padding: 7px 99px;
  z-index: 999;
  background-color: #e6e8fa !important;
}
.v-enter,
.v-leave-to{
  opacity: 0;
}
.v-enter-active,
.v-leave-active{
  transition:all .8s ease;
}
/* 九宫格 */
.van-doc-demo-section {
  min-height: 100vh;
  padding-bottom: 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.van-doc-demo-section__title {
  margin: 0;
  padding: 15px;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 400;
  text-transform: capitalize;
}
.van-doc-demo-section__title + .van-doc-demo-block .van-doc-demo-block__title {
  padding-top: 0;
}

.demo-icon {
  font-size: 0;
}
.demo-icon .van-col {
  text-align: center;
  height: 100px;
  float: none;
  display: inline-block;
  vertical-align: middle;
}
.demo-icon .van-icon {
  display: block;
  font-size: 32px;
  margin: 15px 0;
  color: rgba(69, 90, 100, 0.8);
}
.demo-icon span {
  font-size: 14px;
}
</style>