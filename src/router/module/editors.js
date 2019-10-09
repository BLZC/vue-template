/**
 * 编辑器模块路由
 */
const Markdown = () => import('../../views/editors/TheMarkdown');
const Quilleditor = () => import('../../views/editors/TheQuillEditor');
let editors = [
  {
    path: '/markdown',
    name: 'markdown',
    meta: { title: 'MD编辑器' },
    component: Markdown
  },
  {
    path: '/quilleditor',
    name: 'quilleditor',
    meta: { title: 'QE编辑器' },
    component: Quilleditor
  }
];
export default editors;
