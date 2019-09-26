/**
 * 编辑器模块路由
 */
let editors = [
  {
    path: '/markdown',
    name: 'markdown',
    meta: { title: 'MD编辑器' },
    component: () => import('../../views/editors/TheMarkdown')
  },
  {
    path: '/quilleditor',
    name: 'quilleditor',
    meta: { title: 'QE编辑器' },
    component: () => import('../../views/editors/TheQuillEditor')
  }
];
export default editors;
