<template>
  <div class="page">
    <div class="bg">
      <input type="userId" v-model="userId">
      <div class="btn" @click="login"></div>
    </div>
  </div>
</template>

<script>
import { get } from '@/utils/request'
export default {
  name: "login",
  data() {
    return {
      userId: '',
      amount: ''
    }
  },
  mounted() {

  },
  methods: {
    async login() {
      // eslint-disable-next-line no-unused-vars
      const { data } = await get('/cashback/getUserAmount', {
        userId: this.userId
      })
      sessionStorage.setItem('userId', data.userId);
      sessionStorage.setItem('amount', data.amount);
      setTimeout(() => {
        this.$router.push({
          path: '/home'
        })
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../style/mixin";
.page{
  height:100vh;
  .bg{
    background-image: url("../assets/login.png");
    background-repeat: no-repeat;
    background-size: 100%;
    width:100%;
    height:100%;
    position: relative;
    input{
      font-size: .6rem;
      font-weight: 100;
      color: #000;
      position: absolute;
      top: 4.5rem;
      left: 2.3rem;
    }
    .btn{
      background: rgba(0,0,0,0);
      width: 5.6rem;
      height: 1rem;
      position: absolute;
      top: 13rem;
      left: 0.7rem;
    }
  }
}
</style>
