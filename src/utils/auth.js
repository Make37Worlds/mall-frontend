import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const UserName = 'Admin-Username'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function setUserName(name) {
  return Cookies.set(UserName, name)
}

export function removeUserName() {
  return Cookies.remove(UserName)
}
export function removeToken() {
  return Cookies.remove(TokenKey)
}