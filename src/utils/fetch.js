import axios from 'axios'

const service = axios.create({
  baseURL: '/',
  timeout: 15000
})

service.interceptors.response.use(res => {
  return res
})

export default service
