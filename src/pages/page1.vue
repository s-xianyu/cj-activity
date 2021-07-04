<template>
  <div class="page">
    <div class="bg">
      <div class="amount">{{amount}}</div>
      <div class="btn" @click="toPage2"></div>
    </div>
  </div>
</template>

<script>
import { get } from '@/utils/request'
export default {
  name: 'index',
  data() {
    return {
      userId: '',
      amount: ''
    }
  },
  mounted() {
    this.getAmount();
  },
  methods: {
    async getAmount() {
      const i = Math.random() * (999999999 - 100000000) + 100000000;
      this.userId = parseInt(i, 10);
      const { data } = await get('/cashback/getUserAmount', {
        userId: this.userId
      })
      this.amount = data.amount;
    },
    toPage2() {
      this.$toast('正在进行扫码，请稍后！');
      sessionStorage.setItem('userId', this.userId);
      sessionStorage.setItem('amount', this.amount);
      setTimeout(() => {
        this.$router.push({
          path: '/page2'
        })
      },1000)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../style/mixin";
.page{
  height:100vh;
  .bg{
    background-image: url("../assets/page1.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    width:100%;
    height:100%;
    position: relative;
    .amount{
      position: absolute;
      font-size: .5rem;
      font-weight: 600;
      color:#fff;
      position: absolute;
      top:.83rem;
      left:1.6rem;
    }
    .btn{
      width:1.7rem;
      height: 1.7rem;
      background: rgba(0,0,0,0);
      position: absolute;
      top:3.4rem;
      left:.3rem;
    }
  }
}
</style>
