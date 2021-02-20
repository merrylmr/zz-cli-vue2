import axios from 'axios'

// axios.defaults.baseURL = '/api/v1'

axios.interceptors.request.use((config) => {
  return config
})

axios.interceptors.response.use((res) => {
  if (res.status !== 200) {
    return Promise.reject(res.data)
  }
  return res.data;
}, (error) => {
  // 拦截错误状态码，进行相应的处理
  // const data = error.response.data
  // if (data.code === 401) {
  //
  // }
  return Promise.reject(error.response.data)
})

export default axios