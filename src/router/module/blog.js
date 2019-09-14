/**
 * 博客系统
 */
let blog = [
  {
    path: '/userManage',
    name: 'userManage',
    component: () => import('../../views/blog/userManage')
  },
  {
    path: '/articleManage',
    name: 'articleManage',
    component: () => import('../../views/blog/articleManage')
  },
  {
    path: '/commentManage',
    name: 'commentManage',
    component: () => import('../../views/blog/commentManage')
  }
]
export { blog }
