import request from '@/utils/request'
export function getProductList() {
  return request({
    url: '/mallproduct/spuInfo/all',
    method: 'get'
  })
}

export function addProduct() {
  return request({
    url: '/mallproduct/spuInfo/add',
    method: 'post'
  })
}
