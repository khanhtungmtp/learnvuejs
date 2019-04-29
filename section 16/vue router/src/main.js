import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
// do là đối tượng nên có { }
import { routes } from "./routes.js";

Vue.use(VueRouter)
// global router
const router = new VueRouter({
  routes
})


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
