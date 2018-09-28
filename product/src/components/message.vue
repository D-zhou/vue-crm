<template>
  <div>
    <van-nav-bar title="消息" left-text="返回" left-arrow right-more-o @click-left="onClickLeft" @click-right="onClickRight">
      <van-icon name="more-o" slot="right" />
    </van-nav-bar>
    this is page:message
  </div>
</template>

<script>
export default {
  data: () => ({}),
  created() {},
  methods: {
    onClickLeft() {},
    onClickRight() {}
  }
};
</script>

<style  scoped>
</style>