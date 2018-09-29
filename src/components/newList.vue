<template>
  <div>
    <van-nav-bar title="新闻咨询" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <router-link v-for="(item,index) in list" :key="index" :to="'/home/detail/'+item.id">
      <van-card :title="item.title" :desc="item.content" :num="item.click" :thumb="imageURL">
        <div slot="footer">
          <span>{{item.add_time}}</span>
          <van-button size="mini">查看</van-button>
        </div>
      </van-card>
    </router-link>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data: () => ({
    list: [],
    imageURL:
      "http://img5.duitang.com/uploads/item/201310/28/20131028131912_GYkUV.thumb.700_0.jpeg"
  }),
  created() {
    this.getnewslist();
  },
  methods: {
    onClickLeft(){
      this.$router.go(-1)
    },
    getnewslist() {
      this.$http.get("api/getnewslist").then(result => {
        const { status, message } = result.body;
        if (status === 0) {
          this.list = message;
        } else {
          Toast("获取数据失败");
        }
        // console.log(result.body);
      });
    }
  }
};
</script>

<style  scoped>
.van-nav-bar {
  background-color: #e6e8fa;
}
</style>