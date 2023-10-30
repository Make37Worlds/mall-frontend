/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/table',
  component: Layout,
  redirect: '/table/product-list',
  name: 'Table',
  meta: {
    title: 'Table',
    icon: 'table'
  },
  children: [
    {
      path: 'product-list',
      component: () => import('@/views/table/product-list'),
      name: 'Product-List',
      meta: { title: 'Product List' }
    }
  ]
}
export default tableRouter
