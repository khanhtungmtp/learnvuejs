// define router
import Home from './components/Home.vue';
import User from './components/user/User.vue';
import UserDetail from './components/user/UserDetail.vue';

export const routes = [
  {path: '/', name: 'homepage', component: Home},
  {path: '/user', name: 'user', component: User},
  {path: '/user/:id', name: 'user-detail', component: UserDetail},
]
