<template>
  <div class="page">
    <div class="bg">
      <div class="amount">{{amount}}</div>
      <div class="scan" @click="toPage2"></div>
      <div class="pay" @click="toPage2_2"></div>
      <div class="history" @click="toPage5"></div>
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
      this.userId = sessionStorage.getItem('userId') ;
      if(this.userId == null){
        const i = Math.random() * (999999999 - 100000000) + 100000000;
        this.userId = parseInt(i, 10);
      }
      const { data } = await get('/cashback/getUserAmount', {
        userId: this.userId
      })
      this.amount = data.amount;
      sessionStorage.setItem('userId', this.userId);
    },
    toPage2() {
      this.$router.push({
        path: '/page2'
      })
    },
    toPage2_2() {
      this.$router.push({
        path: '/page2_2'
      })
    },
    toPage5() {
      this.$router.push({
        path: '/page5'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../style/mixin";
.page{
  height:100vh;
  .bg{
    background-image: url("../assets/page1.png");
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
    .scan{
      width:1.7rem;
      height: 1.7rem;
      background: rgba(0,0,0,0);
      position: absolute;
      top:3.4rem;
      left:.3rem;
      z-index: 100;
    }
    .pay{
      width:1.7rem;
      height: 1.7rem;
      background: rgba(0,0,0,0);
      position: absolute;
      top:3.4rem;
      left:2rem;
      z-index: 100;
    }
    .history{
      background: rgba(0,0,0,0);
      z-index: 100;
      width: 3.4rem;
      height: 1rem;
      position: absolute;
      top: 2rem;
      left: 3.5rem;
    }
  }
}
</style>
