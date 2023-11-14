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

export function getProductByToken() {
  return request({
    url: '/mallproduct/spuInfo/user/products',
    method: 'get'
  })
}
