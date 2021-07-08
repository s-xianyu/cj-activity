<template>
  <div class="page">
    <div class="bg">
    </div>
  </div>
</template>

<script>
import {get} from "@/utils/request";

export default {
  name: "page2_2",
  data() {
    return {
      amount: '',
      receiver: '',
      dateTime: '',
      refNo: '',
      hasCashback: ''
    }
  },
  async mounted() {
    this.userId = sessionStorage.getItem('userId')
    const {data} = await get('/cashback/payBSC', {
      userId: this.userId
    });
    if (Object.keys(data).length) {
      sessionStorage.setItem('p4.amount', data.amount)
      sessionStorage.setItem('p4.receiver', data.receiver)
      sessionStorage.setItem('p4.dateTime', data.dateTime)
      sessionStorage.setItem('p4.refNo', data.refNo)
      sessionStorage.setItem('p4.hasCashback', data.hasCashback)
      if (data.hasCashback == 'false') {
        setTimeout(() => {
          this.$router.push({
            path: '/page4_3'
          })
        }, 5000)
      } else {
        setTimeout(() => {
          this.$router.push({
            path: '/page4_2'
          })
        }, 5000)
      }

    } else {
      this.$toast('支付失败，请重试！')
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  height: 100vh;
  .bg {
    background-image: url("../assets/page2_2.png");
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
    height: 100%;
    position: relative;
  }
}
</style>
