// define router
import PageHeader from './components/layout/Header.vue';
import Home from './components/Home.vue';

// sử dụng promise, cái nào yêu cầu mới sử dụng, lazy load
const User = resolve => {
  // 'user' để chỉ load 1 file build.js giống như cache, có rồi ko load nữa
  require.ensure(['./components/user/User.vue'], () => {
    resolve(require('./components/user/User.vue'))
  }, 'user')
}

const UserDetail = resolve => {
  // ensure là đảm bảo, resolve là giải quyết
  require.ensure(['./components/user/UserDetail.vue'], () => {
    resolve(require('./components/user/UserDetail.vue'))
  }, 'user')
}

const UserStart = resolve => {
  require.ensure(['./components/user/UserBegin'], () => {
    resolve(require('./components/user/UserBegin'))
  }, 'user')
}

const UserEdit = resolve => {
  require.ensure(['./components/user/UserEdit'], () => {
    resolve(require('./components/user/UserEdit'))
  }, 'user')
}
// import User from './components/user/User.vue';
// import UserDetail from './components/user/UserDetail.vue';
// import UserStart from './components/user/UserBegin';
// import UserEdit from './components/user/UserEdit';


import Error from './components/404';

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
      {
        path: ':id', name: 'userdetails', component: UserDetail, beforeEnter: (to, from, next) => {
          console.log('action guard useredit');
          next();
        }
      },
      {path: ':id/edit', name: 'useredit', component: UserEdit},
    ]
  },
  {path: '/auth-redirect', redirect: {name: 'homepage'}},
  {path: '/404', name: 'errorpage', component: Error},
  {path: '*', redirect: '/404'}

]
