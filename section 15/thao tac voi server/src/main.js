import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.http.options.root = "https://learnvuejs-76db0.firebaseio.com/data.json"

Vue.http.interceptors.push( (request,next) => {
  console.log(request);
  // nếu request là post thì can thiệp đổi thành put (Tức là update)
  if (request.method =='POST'){
    request.method ='PUT'
  }
  next();
})
new Vue({
  el: '#app',
  render: h => h(App)
})
