import axios from 'axios'
import router from './router'

// const instance = axios.create({
//     baseURL:'',
//     timeout: 2500
// })

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent

    return config
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  })

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    const {data} = response
    const {code} = data
    if(code === 403){
        router.replace({
            path:'/login'
        })
    }
    return response
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  })

  

  export default axios