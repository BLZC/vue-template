/**
 * 博客系统
 */
let blog = [
  {
    path: '/userManage',
    name: 'userManage',
    meta: { title: '用户管理' },
    component: () => import('../../views/blog/UserManage/UserManage')
  },
  {
    path: '/articleManage',
    name: 'articleManage',
    meta: { title: '文章管理' },
    component: () => import('../../views/blog/ArticleManage/ArticleManage')
  },
  {
    path: '/commentManage',
    name: 'commentManage',
    meta: { title: '评论管理' },
    component: () => import('../../views/blog/CommentManage/CommentManage')
  }
];
export { blog };
