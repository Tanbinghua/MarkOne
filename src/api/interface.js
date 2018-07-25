import fetch from '../utils/fetch'

export function signUp (data) {
  return fetch({
    url: '/api/users/',
    method: 'POST',
    data
  })
}

export function signIn (data) {
  return fetch({
    url: '/api/users/login',
    method: 'POST',
    data
  })
}

export function signOut () {
  return fetch({
    url: '/api/users/logout',
    method: 'GET'
  })
}

export function getNotes () {
  return fetch({
    url: 'api/notes/',
    method: 'GET'
  })
}

export function userInfo () {
  return fetch({
    url: 'api/users/profile',
    method: 'GET'
  })
}
