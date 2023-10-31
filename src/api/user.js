import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/mallmember/login',
    method: 'post',
    data
  })
}
//
// export function getInfo(token) {
//   return request({
//     url: '/mallmember/user/info',
//     method: 'get',
//     params: { token }
//   })
// }

export function logout() {
  return request({
    url: '/mallmember/user/logout',
    method: 'post'
  })
}
