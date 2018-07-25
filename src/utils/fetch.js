import axios from 'axios'

const service = axios.create({
  baseURL: '/',
  timeout: 15000
})

service.interceptors.response.use(res => {
  if (res.status === 403) {
    this.$router.push({path: '/login'})
    console.log(res.statusText)
    this.store.commit('SET_USER_INFO', JSON.stringify({}))

    return '{success: false}'
  } else if (res.statusText !== 'OK') {
    console.log(res.status + ': ' + res.statusText)
    return res
  } else {
    return res
  }
})

export default service
