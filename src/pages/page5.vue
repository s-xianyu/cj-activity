<template>
  <div class="page">
    <div class="bg">
      <div class="list" v-for="item in list" :key="item.transactionId">
        <div class="list-left">
          <p>{{item.receiver}}</p>
          <p>{{item.type}}</p>
        </div>
        <div class="list-right">
          <p>{{item.amount}}</p>
          <p>{{item.dateTime | timeFilter}}</p>
        </div>
      </div>
      <div class="line" @click="toHome">-- 我是有底线的 --</div>
    </div>
  </div>
</template>

<script>
import { get } from '@/utils/request'
export default {
  name: "page2",
  data() {
    return {
      userId: '',
      list: [],
    }
  },
  filters: {
    timeFilter(value) {
      console.log(value)
      return value.substring(0, 10)
    }
  },
  mounted() {
    this.userId = sessionStorage.getItem('userId') || '';
    this.getList();
  },
  methods: {
    async getList() {
      const { data } = await get('/cashback/transactionHistory', {
        userId: this.userId
      })
      this.list = data;
      console.log(data)
    },
    toHome() {
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
@import "@/style/mixin";
.page {
  height: 100vh;

  .bg {
    background-image: url("../assets/page5.png");
    background-repeat: no-repeat;
    background-size: 100%;
    width: 100%;
    height: 100%;
    position: relative;
    padding-top:1rem;
    .list{
      @include flexCenter;
      justify-content: space-between;
      padding: .2rem 0;
      margin: 0 .3rem;
      border-bottom:1px solid #f3f3f3;
      &-left{
        p{
          color:#000;
          font-weight: bold;
          &:first-child{font-size: .3rem}
          &:last-child{font-size: .3rem;margin-top: .1rem}
        }
      }
      &-right{
        p{
          font-weight: bold;
          &:first-child{font-size: .3rem;color: #002aff;}
          &:last-child{font-size: .3rem;margin-top: .1rem;color: #999;}
        }
      }
    }
    .line{
      @include flexCenter;
      font-size: .25rem;
      color:#999;
      height:1rem;
    }
  }
}
</style>
