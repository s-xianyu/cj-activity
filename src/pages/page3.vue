<template>
  <div class="page">
    <div class="bg">
      <input type="number" v-model="amount">
      <div class="btn" @click="Confirm"></div>
    </div>
  </div>
</template>

<script>
import { get } from '@/utils/request'
export default {
  name: "page3",
  data() {
    return {
      amount: '',
      receiver: '',
      dateTime: '',
      refNo: '',
      hasCashback: ''
    }
  },
  mounted() {
    this.amount = '0.00';
    this.userId = sessionStorage.getItem('userId') || '';
  },
  methods: {
    async Confirm() {
      const { data } = await get('/cashback/payCSB', {
        amount: this.amount,
        userId: this.userId
      });
      if (Object.keys(data).length) {
        sessionStorage.setItem('p3.amount',data.amount)
        sessionStorage.setItem('p3.receiver',data.receiver)
        sessionStorage.setItem('p3.dateTime',data.dateTime)
        sessionStorage.setItem('p3.refNo',data.refNo)
        sessionStorage.setItem('p3.hasCashback',data.hasCashback)
        if(data.hasCashback == 'false'){
          setTimeout(() => {
            this.$router.push({
              path: '/page4_1'
            })
          }, 1000)
        }else {
          setTimeout(() => {
            this.$router.push({
              path: '/page4'
            })
          }, 1000)
        }

      } else {
        this.$toast('支付失败，请重试！')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../style/mixin";
.page{
  height:100vh;
  .bg{
    background-image: url("../assets/page3.png");
    background-repeat: no-repeat;
    background-size: 100%;
    width:100%;
    height:100%;
    position: relative;
    input{
      font-size: .6rem;
      font-weight: 100;
      color: #3792f5;
      position: absolute;
      top: 4.3rem;
      left: 1.6rem;
    }
    .btn{
      background: rgba(0,0,0,0);
      width: 5.6rem;
      height: 1rem;
      position: absolute;
      top: 12rem;
      left: 0.7rem;
    }
  }
}
</style>
