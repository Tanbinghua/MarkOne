import axios from 'axios'

const service = axios.create({
  baseURL: 'api_base_url',
  timeout: 5000
})

service.interceptors.request.use(config => {
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

service.interceptors.response.use(
  response => response,
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default service
