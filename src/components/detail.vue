<template>
  <div>
    <van-nav-bar title="新闻详情" left-text="返回" left-arrow @click-left="onClickLeft" />
    {{id}}
  </div>
</template>

<script>
export default {
  data: () => ({
    id:0
  }),
  created(){
    this.id = this.$route.params.id
    this.getnews()
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
    getnews(){
      this.$http.get("api/getnew/"+this.id).then(result => {
        console.log(result.body)
      })
    }
  }
};
</script>

<style  scoped>

</style>