import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
// do là đối tượng nên có { }
import {routes} from "./routes.js";

Vue.use(VueRouter);
// global router
const router = new VueRouter({
  // để xem # trên trình duyệt là 1 hash fragments, ko phải ảo
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    // nếu vị trí đã lưu thì trả về vị trí đã lưu
    if (savedPosition) {
      return savedPosition;
    }
    // trang nào có hash thì nó sẽ nhảy vào hash
    if (to.hash) {
      return {selector: to.hash}
    }
  }
});

// arrow function, mõi 1 lần trước khi chạy (beforeEach)
router.beforeEach((to,from,next)=>{
  console.log('guard global');
  // phải có next mới chạy tiếp theo đc
  next();
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
