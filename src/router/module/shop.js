/**
 * 商城模块的路由
 */
let shop = [
  {
    path: '/classification',
    name: 'classification',
    meta: { title: '商品分类' },
    component: () => import('../../views/shop/classification')
  },
  {
    path: '/list',
    name: 'list',
    meta: { title: '商品列表' },
    component: () => import('../../views/shop/list')
  },
  {
    path: '/attribute',
    name: 'attribute',
    meta: { title: '商品属性' },
    component: () => import('../../views/shop/attribute')
  }
];
export default shop;
