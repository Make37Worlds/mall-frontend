import request from '@/utils/request'
export function ceshi() {
  return request({
    url: '/mallmember/member/test',
    method: 'get'
  })
}

export function registerMember(data) {
  return request({
    url: '/mallmember/member/add',
    method: 'post',
    data
  })
}
