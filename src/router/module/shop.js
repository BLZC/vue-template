/**
 * 商城模块的路由
 */
let shop = [
  {
    path: '/classification',
    name: 'classification',
    component: () => import('../../views/shop/classification')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../../views/shop/list')
  },
  {
    path: '/attribute',
    name: 'attribute',
    component: () => import('../../views/shop/attribute')
  }
]
export default shop
