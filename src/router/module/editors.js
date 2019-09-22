/**
 * 编辑器模块路由
 */
let editors = [
  {
    path: '/mymarkdown',
    name: 'mymarkdown',
    meta: { title: 'MD编辑器' },
    component: () => import('../../views/editors/mymarkdown')
  },
  {
    path: '/quilleditor',
    name: 'quilleditor',
    meta: { title: 'QE编辑器' },
    component: () => import('../../views/editors/quilleditor')
  }
];
export default editors;
