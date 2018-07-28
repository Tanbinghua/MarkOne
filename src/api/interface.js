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

export function getHighList () {
  return fetch({
    url: 'api/notes/highlight',
    method: 'GET'
  })
}

export function getTrashList () {
  return fetch({
    url: 'api/notes/trash',
    method: 'GET'
  })
}

export function toHighlight (uuid, data) {
  return fetch({
    url: `api/sections/${uuid}`,
    method: 'PUT',
    data
  })
}

export function deleteView (uuid, data) {
  return fetch({
    url: `api/sections/${uuid}`,
    method: 'DELETE',
    data
  })
}
