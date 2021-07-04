<template>
  <div class="page">
    <div class="page-head">
      <div class="page-head__icon">
        <img src="@/assets/shop.png" alt="">
      </div>
      <div class="page-head__title">YAYASAN PERINTIS MALAYSIA</div>
    </div>
    <div class="page-content">
      <div class="page-content__top">Amount</div>
      <div class="page-content__bottom">
        <div class="page-RM">RM</div>
        <input type="number" placeholder="请输入金额" v-model="amount">
      </div>
    </div>
    <div class="page-btn" @click="Confirm">Confirm</div>
  </div>
</template>

<script>
import { get } from '@/utils/request'
export default {
  name: "page3",
  data() {
    return {
      amount: ''
    }
  },
  mounted() {
    this.amount = sessionStorage.getItem('amount') || '';
    this.userId = sessionStorage.getItem('userId') || '';
  },
  methods: {
    async Confirm() {
      const { data } = await get('/cashback/payCSB', {
        amount: this.amount,
        userId: this.userId
      });
      if (Object.keys(data).length) {
        this.$toast('支付成功！')
        setTimeout(() => {
          this.$router.push({
            path: '/page4'
          })
        }, 1000)
      } else {
        this.$toast('支付失败，请重试！')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/mixin";
.page{
  margin:1.5rem .4rem 0;
  &-head{
    @include flexCenter;
    justify-content: flex-start;
    &__icon{
      @include wh(1.2rem, 1.2rem);
      background: #92e9f8;
      border-radius: 50%;
      @include flexCenter;
      img{
        @include wh(.8rem, .8rem);
      }
    }
    &__title{
      font-size: .3rem;
      margin-left:.3rem;
      font-weight: bold;
    }
  }
  &-content{
    background: #f3f3f3;
    border-bottom: .03rem solid #3792f5;
    padding:.2rem .2rem 0;
    &__top{
      color:#3792f5;
      font-size: .3rem;
    }
    &__bottom{
      display: flex;
      align-items: center;
      .page-RM{
        width:1rem;
        font-size: .5rem;
        color:#3792f5;
      }
      input{
        width:calc(100% - 1rem);
        border: none;
        outline: none;
        border-radius: .1rem;
        height:1rem;
        padding-left:.1rem;
        font-size: .4rem;
        color:#666;
        background: transparent;
        &::placeholder{
          color:#666;
          font-size: .35rem;
        }
      }
    }
  }
  &-btn{
    width:90%;
    height:1rem;
    background: #3792f5;
    border-radius: 1rem;
    font-size: .45rem;
    color:#fff;
    @include flexCenter;
    margin:1.5rem auto 0;
  }
}
</style>
