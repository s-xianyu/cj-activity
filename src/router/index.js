import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

Vue.use(VueRouter)
const routes = [
  { path: '*', redirect: '/home', name: '默认'},

  { path:'/home', component: ()=> import('../pages/page1') },
  { path:'/page2', component: ()=> import('../pages/page2') },
  { path:'/page3', component: ()=> import('../pages/page3') },
  { path:'/page4', component: ()=> import('../pages/page4') },
  { path:'/page5', component: ()=> import('../pages/page5') },
  { path:'/page6', component: ()=> import('../pages/page6') },
  { path:'/page7', component: ()=> import('../pages/page7') },
]

export default new VueRouter({
  mode: 'hash',
  routes
})
