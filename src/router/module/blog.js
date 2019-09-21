/**
 * 博客系统
 */
let blog = [
  {
    path: '/userManage',
    name: 'userManage',
    meta: { title: '用户管理' },
    component: () => import('../../views/blog/userManage')
  },
  {
    path: '/articleManage',
    name: 'articleManage',
    meta: { title: '文章管理' },
    component: () => import('../../views/blog/articleManage')
  },
  {
    path: '/commentManage',
    name: 'commentManage',
    meta: { title: '评论管理' },
    component: () => import('../../views/blog/commentManage')
  }
];
export { blog };
