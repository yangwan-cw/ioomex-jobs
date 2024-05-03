import axios from 'axios'
const baseURL = '/api'
const service = axios.create({
  baseURL,
  timeout: 10000
})

// 发起请求的拦截器
service.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem('token')
    if (token) {
      config.params = {
        token: token
      }
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (response.status !== 200) {
      return Promise.reject(new Error(res.success || 'Error'))
    } else {
      if (res.code == 200) {
        return res.result || res.data
      }else{
        console.log(res.success)
      }
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
