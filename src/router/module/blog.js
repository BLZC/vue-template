/**
 * 博客系统
 */
const UserManage = () => import('../../views/blog/UserManage');
let blog = [
  {
    path: '/userManage',
    name: 'userManage',
    meta: { title: '用户管理' },
    component: UserManage
  }
];
export { blog };
