<template>
  <div class="page">
    <div class="bg">
      <div class="btn" @click="toHome"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "page7",
  mounted() {
    this.$toast('已完成支付！')
  },
  methods: {
    toHome() {
      this.$toast('回到首页！');
      setTimeout(() => {
        this.$router.push({
          path: '/'
        })
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  height: 100vh;

  .bg {
    background-image: url("../assets/page7.jpeg");
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
    height: 100%;
    position: relative;
    .btn{
      width: 100%;
      height: 1rem;
      background: transparent;
      position: absolute;
      top: 12.6rem;
      left: 0;
    }
  }
}
</style>
