import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/mallmember/login',
    method: 'post',
    data
  })
}

export function getInfo(name) {
  return request({
    url: '/mallmember/member/findMemberByName',
    method: 'get',
    params: { name }
  })
}

export function logout() {
  return request({
    url: '/mallmember/user/logout',
    method: 'post'
  })
}
