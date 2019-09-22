/**
 * 图标库模块的路由
 */
let charts = [
  {
    path: '/myschart',
    name: 'myschart',
    meta: { title: 'schart图表' },
    component: () => import('../../views/charts/myschart')
  }
];
export default charts;
