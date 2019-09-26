/**
 * 图标库模块的路由
 */
let charts = [
  {
    path: '/schart',
    name: 'schart',
    meta: { title: 'schart图表' },
    component: () => import('../../views/charts/TheSchart')
  }
];
export default charts;
