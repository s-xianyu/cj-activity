<template>
  <div class="page">
    <div class="bg"></div>
  </div>
</template>

<script>
export default {
  name: "page2",
  mounted() {
    setTimeout(() => {
      this.$toast('二维码识别成功！')
    },5000)
    setTimeout(() => {
      this.$router.push({
        path: '/page3'
      })
    }, 6000)
  }
}
</script>

<style lang="scss" scoped>
.page{
  height:100vh;
  .bg{
    background-image: url("../assets/page2.png");
    background-repeat: no-repeat;
    background-size: 100%;
    width:100%;
    height:100%;
    position: relative;
  }
}
</style>
