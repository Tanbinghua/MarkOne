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

export function getNotes (params) {
  return fetch({
    url: 'api/notes/',
    method: 'GET',
    params
  })
}

export function userInfo () {
  return fetch({
    url: 'api/users/profile',
    method: 'GET'
  })
}

export function getHighList (params) {
  return fetch({
    url: 'api/notes/highlight',
    method: 'GET',
    params
  })
}

export function getTrashList (params) {
  return fetch({
    url: 'api/notes/trash',
    method: 'GET',
    params
  })
}

export function toHighlight (uuid, data) {
  return fetch({
    url: `api/sections/${uuid}`,
    method: 'PUT',
    data
  })
}

export function checkUser (params) {
  return fetch({
    url: 'api/users/check_user',
    method: 'GET',
    params
  })
}

export function forgetPassword (data) {
  return fetch({
    url: 'api/users/forget_password',
    method: 'PUT',
    data
  })
}

export function resetPassword (data) {
  return fetch({
    url: 'api/users/profile',
    method: 'PUT',
    data
  })
}

export function loginGoogle (data) {
  return fetch({
    url: 'api/users/google_login',
    method: 'POST',
    data
  })
}
