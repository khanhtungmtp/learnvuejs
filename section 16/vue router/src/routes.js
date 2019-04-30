// define router
import PageHeader from './components/layout/Header.vue';
import Home from './components/Home.vue';
import User from './components/user/User.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserStart from './components/user/UserBegin';
import UserEdit from './components/user/UserEdit';

export const routes = [
  {
    path: '/', name: 'homepage', components: {
      default: Home,
      'page-header': PageHeader
    }
  },
  {
    path: '/user', name: 'user', component: User, children: [
      {path: '', name: 'index', component: UserStart},
      {path: ':id', name: 'userdetails', component: UserDetail},
      {path: ':id/edit', name: 'useredit', component: UserEdit},
    ]
  },

]
