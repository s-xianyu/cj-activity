<template>
  <div class="page">
    <div class="bg">
      <div class="amount">{{amount}}</div>
      <div class="receiverLab">Receiver</div>
      <div class="receiver">{{receiver}}</div>
      <div class="dateTimeLab">Date/Time</div>
      <div class="dateTime">{{dateTime}}</div>
      <div class="refNoLab">eWallet Ref No.</div>
      <div class="refNo">{{refNo}}</div>
      <div class="btn2" @click="toPage5"></div>
      <div class="btn" @click="toHome"></div>
    </div>
    <div class="popup" v-show="show">
      <div class="btn" @click="addList"></div>
    </div>
  </div>
</template>

<script>
import { Popup } from 'vant';
export default {
  name: "page2",
  components: { Popup },
  data() {
    return {
      amount: '',
      receiver: '',
      dateTime: '',
      refNo: '',
      show: true
    }
  },
  mounted() {
    this.amount = sessionStorage.getItem('p3.amount')|| '';
    this.receiver = sessionStorage.getItem('p3.receiver')|| '';
    this.dateTime = sessionStorage.getItem('p3.dateTime')|| '';
    this.refNo = sessionStorage.getItem('p3.refNo')|| '';
    this.userId = sessionStorage.getItem('userId') || '';
  },
  methods: {
    toPage5() {
      setTimeout(() => {
        this.$router.push({
          path: '/page5'
        })
      }, 1000)
    },
    toHome() {
      setTimeout(() => {
        this.$router.push({
          path: '/home'
        })
      }, 1000)
    },
    addList() {
      this.$toast('点击按钮加载数据！')
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
    .amount{
      font-size: .5rem;
      position: absolute;
      top: 3.05rem;
      left: 3.7rem;
      color: #000;
    }
    .receiverLab{
      font-size: .3rem;
      position: absolute;
      top: 5.05rem;
      left: .6rem;
      color: #575757;
      width: 2rem;
      height: 1rem;
    }
    .receiver{
      font-size: .3rem;
      text-align: right;
      font-weight: bold;
      position: absolute;
      top: 5.05rem;
      left: 2.7rem;
      color: #000;
      width: 4rem;
      height: 1rem;
    }
    .dateTimeLab{
      font-size: .3rem;
      position: absolute;
      top: 6.05rem;
      left: .6rem;
      color: #575757;
      width: 2rem;
      height: 1rem;
    }
    .dateTime{
      font-size: .3rem;
      text-align: right;
      font-weight: 700;
      position: absolute;
      top: 6.05rem;
      left: 2.7rem;
      color: #000;
      width: 4rem;
      height: 1rem;
    }
    .refNoLab{
      font-size: .3rem;
      position: absolute;
      top: 7.05rem;
      left: .6rem;
      color: #575757;
      width: 2rem;
      height: 1rem;
    }
    .refNo{
      font-size: .3rem;
      text-align: right;
      font-weight: 700;
      position: absolute;
      top: 7.05rem;
      left: 2.7rem;
      color: #000;
      width: 4rem;
      height: 1rem;
    }
    .btn{
      position: absolute;
      top: 12.3rem;
      left: 0;
      width: 100%;
      height: 1rem;
      background: transparent;

    }
    .btn2{
      position: absolute;
      top: 9.3rem;
      left: 0;
      width: 100%;
      height: 1rem;
      background: transparent;
    }
  }
  .popup{
    position: fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background: rgba(0,0,0,.5);
    &:before{
      content: '';
      position: absolute;
      width:90%;
      height:470px;
      background: url("../assets/Popup.png") no-repeat center 100%;
      top:50%;
      left:50%;
      transform: translate(-50%, -50%);
    }
    .btn{
      position: absolute;
      top: 580px;
      width:100%;
      height:50px;
    }
  }
}
</style>
