<template>
  <div class="page">
    <div class="bg">
      <div class="userId">{{userId}}</div>
      <div class="amount">{{amount}}</div>
      <div class="btn" @click="toPage5"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "page2",
  data() {
    return {
      amount: '',
      userId: '',
    }
  },
  mounted() {
    this.amount = sessionStorage.getItem('amount') || '';
    this.userId = sessionStorage.getItem('userId') || '';
    this.$toast(`用户Id: ${this.userId},支付金额: ${this.amount}`)
  },
  methods: {
    toPage5() {
      this.$toast('马上跳转至订单页')
      setTimeout(() => {
        this.$router.push({
          path: '/page5'
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
    background-image: url("../assets/page4.png");
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
    height: 100%;
    position: relative;
    .userId{
      font-size: .3rem;
      position: absolute;
      top: 3.75rem;
      left: 4.3rem;
      color: #666;
    }
    .amount{
      font-size: .5rem;
      position: absolute;
      top: 3.05rem;
      left: 3.7rem;
      color: #000;
    }
    .btn{
      position: absolute;
      top: 12.3rem;
      left: 0;
      width: 100%;
      height: 1rem;
      background: transparent;

    }
  }
}
</style>
