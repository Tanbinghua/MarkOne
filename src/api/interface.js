import fetch from '../utils/fetch'

export function signUp (data) {
  return fetch({
    url: '/api/users/',
    method: 'POST',
    data
  })
}
