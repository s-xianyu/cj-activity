<template>
  <div class="page">
    <div class="bg"></div>
  </div>
</template>

<script>
export default {
  name: "page2",
  mounted() {
    this.$toast('5秒后我要回首页了')
    setTimeout(() => {
      this.$router.push({
        path: '/'
      })
    }, 5000)
  }
}
</script>

<style lang="scss" scoped>
.page {
  height: 100vh;

  .bg {
    background-image: url("../assets/page5.jpeg");
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
    height: 100%;
    position: relative;
  }
}
</style>
