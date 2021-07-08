import Vue from 'vue'
import VueRouter from 'vue-router'

// 解决vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

Vue.use(VueRouter)
const routes = [
  { path: '*', redirect: '/login', name: '默认'},
  { path:'/login', component: ()=> import('../pages/login') },
  { path:'/home', component: ()=> import('../pages/page1') },
  { path:'/page2', component: ()=> import('../pages/page2') },
  { path:'/page2_2', component: ()=> import('../pages/page2_2') },
  { path:'/page3', component: ()=> import('../pages/page3') },
  { path:'/page4', component: ()=> import('../pages/page4') },
  { path:'/page4_1', component: ()=> import('../pages/page4_1') },
  { path:'/page4_2', component: ()=> import('../pages/page4_2') },
  { path:'/page4_3', component: ()=> import('../pages/page4_3') },
  { path:'/page5', component: ()=> import('../pages/page5') },
]

export default new VueRouter({
  mode: 'history',
  routes
})
