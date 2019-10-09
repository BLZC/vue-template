import Vue from 'vue';
import Router from 'vue-router';
import charts from './module/charts';
import editors from './module/editors';
import { blog } from './module/blog';

Vue.use(Router);
const originalPush = Router.prototype.push;
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err);
};

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/index',
      component: resolve => require(['../views/Home'], resolve),
      children: [
        // 首页
        {
          path: '/index',
          name: 'index',
          meta: { title: '门户首页' },
          component: resolve => require(['../views/home/index'], resolve)
        },
        // 我的信息
        {
          path: '/about',
          name: 'about',
          meta: { title: '个人信息' },
          component: resolve =>
            require(['../views/MessageManage/About'], resolve)
        },
        // 消息列表
        {
          path: '/message',
          name: 'message',
          meta: { title: '消息列表' },
          component: resolve =>
            require(['../views/MessageManage/Message'], resolve)
        },
        // 商城模块
        ...charts,
        ...blog,
        ...editors,
        // 视频播放
        {
          path: '/videoPlay',
          name: 'videoPlay',
          meta: { title: '视频播放' },
          component: resolve => require(['../views/video/VideoPlay'], resolve)
        },
        // 视频直播
        {
          path: '/liveBroadcast',
          name: 'liveBroadcast',
          meta: { title: '视频直播' },
          component: resolve =>
            require(['../views/video/LiveBroadcast'], resolve)
        },
        // vue-drag
        {
          path: '/drag',
          name: 'drag',
          meta: { title: 'VueDrag' },
          component: resolve => require(['../views/drag/VueDrag'], resolve)
        },
        // vue-grid-layout
        {
          path: '/gridLayout',
          name: 'gridLayout',
          meta: { title: 'GridLayout' },
          component: resolve =>
            require(['../views/drag/VueGridLayout'], resolve)
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../views/login/Login'], resolve)
    },
    {
      path: '*',
      component: () => import('../errorPage/404')
    }
  ]
});

/**
 * 导航守卫
 *  1. 根据登录状态
 *  2. 根据用户权限（尚待完成）
 */
router.beforeEach((to, from, next) => {
  if (localStorage.getItem('user')) {
    next();
  } else {
    if (to.path === '/login') {
      next();
    } else {
      next({
        path: '/login'
      });
    }
  }
});

export default router;
