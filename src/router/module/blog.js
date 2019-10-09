/**
 * 博客系统
 */
const UserManage = () => import('../../views/blog/UserManage');
const ArticleManage = () => import('../../views/blog/ArticleManage');
const CommentManage = () => import('../../views/blog/CommentManage');
let blog = [
  {
    path: '/userManage',
    name: 'userManage',
    meta: { title: '用户管理' },
    component: UserManage
  },
  {
    path: '/articleManage',
    name: 'articleManage',
    meta: { title: '文章管理' },
    component: ArticleManage
  },
  {
    path: '/commentManage',
    name: 'commentManage',
    meta: { title: '评论管理' },
    component: CommentManage
  }
];
export { blog };
