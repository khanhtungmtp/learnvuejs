// define router
import Home from './components/Home.vue';
import User from './components/user/User.vue';

export const routes = [
  {path: '/', name: 'homepage', component: Home},
  {path: '/user', name: 'user', component: User},
]
