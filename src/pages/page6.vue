<template>
  <div class="page">
    <div class="bg">
    </div>
  </div>
</template>

<script>
export default {
  name: "page2",
  mounted() {
    this.$toast('扫码成功，正在支付中！')
    setTimeout(() => {
      this.$router.push({
        path: '/page7'
      })
    }, 2000)
  }
}
</script>

<style lang="scss" scoped>
.page {
  height: 100vh;
  .bg {
    background-image: url("../assets/page6.png");
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
    height: 100%;
    position: relative;
  }
}
</style>
