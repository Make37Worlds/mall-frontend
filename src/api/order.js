import request from '@/utils/request'

export function buyProduct(data) {
  return request({
    url: '/mallorder/order/ordercreateWithStockCheck',
    method: 'post',
    data
  })
}
