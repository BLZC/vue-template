import Vue from 'vue';
import Router from 'vue-router';
import charts from './module/charts';
import editors from './module/editors';
import { blog } from './module/blog';
import { getLocalStorage as getls } from '../util/localStorageConfig';

Vue.use(Router);
const originalPush = Router.prototype.push;
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err);
};

let router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/index',
      component: () => import('../views/Home'),
      children: [
        // 首页
        {
          path: '/index',
          name: 'index',
          meta: { title: '门户首页' },
          component: () => import('../views/home/index')
        },
        // 我的信息
        {
          path: '/about',
          name: 'about',
          meta: { title: '个人信息' },
          component: () => import('../views/MessageManage/About')
        },
        // 消息列表
        {
          path: '/message',
          name: 'message',
          meta: { title: '消息列表' },
          component: () => import('../views/MessageManage/Message')
        },
        ...charts,
        ...blog,
        ...editors,
        // 视频播放
        {
          path: '/videoPlay',
          name: 'videoPlay',
          meta: { title: '视频播放' },
          component: () => import('../views/video/VideoPlay')
        },
        // 视频直播
        {
          path: '/liveBroadcast',
          name: 'liveBroadcast',
          meta: { title: '视频直播' },
          component: () => import('../views/video/LiveBroadcast')
        },
        // vue-drag
        {
          path: '/drag',
          name: 'drag',
          meta: { title: 'VueDrag' },
          component: () => import('../views/drag/VueDrag')
        },
        // vue-grid-layout
        {
          path: '/gridLayout',
          name: 'gridLayout',
          meta: { title: 'GridLayout' },
          component: () => import('../views/drag/VueGridLayout')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/Login')
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
  if (getls('user')) {
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
