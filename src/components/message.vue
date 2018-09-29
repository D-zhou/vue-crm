<template>
  <div>
    <van-nav-bar title="消息" left-text="返回" left-arrow right-more-o @click-left="onClickLeft" @click-right="onClickRight">
      <van-icon name="more-o" slot="right" />
    </van-nav-bar>
    <!-- <van-list v-model="loading" :finished="finished" @load="onLoad">
      <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list> -->
  </div>
</template>

<script>
import Vue from 'vue'
import { List } from 'vant';
Vue.use(List)
export default {
  data: () => ({
    // list: [],
    // loading: false,
    // finished: false
  }),
  created() {
    // getMessage();
  },
  methods: {
    onClickLeft() {},
    onClickRight() {},
    // getMessage() {
    //   this.$http.get("http://localhost:5000/api/getnew/:newid").then(result => {
    //     const { status, message } = result.params;
    //     console.log(result);
    //     // if (status == 0) {

    //     //   this.list = message;
    //     // }
    //   });
    // },
    // onLoad() {
    //   // 异步更新数据
    //   setTimeout(() => {
    //     this.$http
    //       .get("http://localhost:5000/api/getnew/:newid")
    //       .then(result => {
    //         // const { status, message } = result.params;
    //         console.log(result.params);
    //         // if (status == 0) {

    //         //   this.list = message;
    //         // }
    //       });
    //     for (let i = 0; i < 10; i++) {
    //       this.list.push(this.list.length + 1);
    //     }
    //     // 加载状态结束
    //     this.loading = false;

    //     // 数据全部加载完成
    //     if (this.list.length >= 40) {
    //       this.finished = true;
    //     }
    //   }, 500);
    // }
  }
};
</script>

<style  scoped>
</style>